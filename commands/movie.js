import axios from 'axios'
// import * as cheerio from 'cheerio'
import template from '../templates/movie.js'
import fs from 'node:fs'
import { translate } from '@vitalets/google-translate-api'

// 翻譯電影標題
async function translateText (text, targetLanguage) {
  try {
    const res = await translate(text, { to: targetLanguage })
    return res.text || text // 確保返回值為字串
  } catch (error) {
    console.log(error)
    console.error('Translation Error:', error)
    return text // 出現錯誤時返回原始文字
  }
}

export default async function movieSearch (query, event) {
  const TMDB_API_KEY = process.env.TMDB_API_KEY
  const tmdbUrl = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}`

  try {
    const response = await axios.get(tmdbUrl)
    // 調試用，打印完整的 API 回應
    console.log('TMDB API Response:', response.data)

    const movies = response.data.results

    if (!movies || movies.length === 0) {
      await event.reply('找不到相關電影，請再試一次！')
      return
    }

    // 用於存放多個 Bubble 模板
    const templates = []
    console.log('Templates for Carousel:', templates)

    // 使用 for 迴圈取到的各電影資料進模板
    for (const movie of movies.slice(0, 10)) {
      const movieTemplate = template()

      const translatedTitle = await translateText(movie.title || '未知電影標題', 'zh-TW')
        .catch(error => {
          console.error('Fallback to original title due to translation error:', error)
          return movie.title || '未知電影標題'
        })

      // 填充模板內容
      movieTemplate.hero.url = `https://image.tmdb.org/t/p/w500${movie.poster_path || ''}` // 電影海報
      movieTemplate.body.contents[0].text = typeof translatedTitle === 'string' ? translatedTitle : '未知電影標題' // 電影標題
      movieTemplate.body.contents[1].contents[1].text = movie.release_date || '未提供上映日期' // 上映日期
      movieTemplate.body.contents[2].contents[1].text = String(movie.vote_average || '未提供平均評分') // 平均評分
      movieTemplate.body.contents[3].contents[1].text = String(movie.vote_count || '未提供評分總數') // 評分總數

      // 將模板加入到陣列中
      templates.push(movieTemplate)
    }

    // 回傳 Flex Message
    const result = await event.reply({
      type: 'flex',
      altText: '電影搜尋結果',
      contents: {
        type: 'carousel',
        contents: templates
      }
    })
    console.log(result)

    // 如果模板有錯誤則回傳到 dump 資料夾
    if (process.env.DEBUG === 'true' && result.message) {
      fs.writeFileSync('./dump/movie.json', JSON.stringify(templates, null, 2))
    }
  } catch (error) {
    console.log(error)
    await event.reply('發生錯誤，請稍後再試！')
  }
}
