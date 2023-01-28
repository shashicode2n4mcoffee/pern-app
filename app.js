let createError = require('http-errors')
let express = require('express')
let path = require('path')
let cookieParser = require('cookie-parser')
let logger = require('morgan')

let studentRouter = require('./routes/index').studentRouter
let lectureRouter = require('./routes/index').lectureRouter
let courseRouter = require('./routes/index').courseRouter
let advanceRouter = require('./routes/index').advanceRouter
const authRouter = require('./routes/index').authRouter
let usersRouter = require('./routes/users')

let app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// app.use('/', indexRouter)
app.use('/api/v1/student', studentRouter)
app.use('/api/v1/course', courseRouter)
app.use('/api/v1/lecturer', lectureRouter)
app.use('/api/v1/auth', authRouter)
app.get('/api/v1', (req, res) => {
  res.status(200).send('Hello World')
})
// app.use('/api/v1', advanceRouter)
app.use('/users', usersRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).send({ error: 'Not found' })
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500).send({ error: err })
})

module.exports = app
