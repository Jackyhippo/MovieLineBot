// 讀取 env 檔內容
import 'dotenv/config'
// 引用 linebot
import linebot from 'linebot'
import commandMovie from './commands/movie.js' // 引入 movie 查詢指令

// 設定並建立機器人
const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

// 監聽使用者訊息
bot.on('message', async (event) => {
  if (event.message.type === 'text') {
    const query = event.message.text // 使用者輸入的查詢文字
    await commandMovie(query, event)
  }
})

// 設定機器人監聽 路徑、port 和 callback function
bot.listen('/', process.env.PORT || 3001, () => {
  console.log('機器人啟動')
})
