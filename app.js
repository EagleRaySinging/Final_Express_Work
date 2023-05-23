// 宣告伺服器相關變數
const express = require('express')
const app = express()
const port = 3000
const handlebars = require('express-handlebars')

// 設定樣版引擎
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 設定靜態資料夾
app.use(express.static('public'))

// 設定根目錄，首頁渲染
app.get('/', (req, res) => {
  res.render('index', { button: '首頁' })
})

// 設定About路由
app.get('/about', (req, res) => {
  res.render('index', { button: 'About' })
})

// 設定Portfolio路由
app.get('/portfolio', (req, res) => {
  res.render('index', { button: 'Portfolio' })
})

// 設定Contact路由
app.get('/contact', (req, res) => {
  res.render('index', { button: 'Contact' })
})


// 綁監聽器在伺服器上
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})