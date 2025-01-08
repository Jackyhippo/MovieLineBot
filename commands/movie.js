import axios from 'axios'
// import * as cheerio from 'cheerio'
import template from '../templates/movie.js'

export default async function movieSearch (query, event) {
  const TMDB_API_KEY = process.env.TMDB_API_KEY
  const tmdbUrl = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}`

  try {
    const response = await axios.get(tmdbUrl)

    // 在此處添加 console.log 調試
    console.log('TMDB API Response:', response.data)

    const movies = response.data.results

    if (movies.length === 0) {
      await event.reply('找不到相關電影，請再試一次！')
      return
    }

    // 取第一部電影資料
    const movie = movies[0]
    const movieTemplate = template()

    // 動態更新模板內容
    movieTemplate.body.contents[0].url = `https://image.tmdb.org/t/p/w500${movie.poster_path || ''}`
    movieTemplate.body.contents[2].contents[0].contents[0].text = movie.title || '未知電影標題'
    movieTemplate.body.contents[2].contents[1].contents[0].contents[1].text = movie.release_date || '未提供上映日期'

    // 回傳 Flex Message
    await event.reply({
      type: 'flex',
      altText: `${movie.title} 的電影資訊`,
      contents: movieTemplate
    })
  } catch (error) {
    console.error('Error fetching movie data:', error)
    await event.reply('發生錯誤，請稍後再試！')
  }
}
