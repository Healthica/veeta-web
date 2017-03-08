#!/usr/bin/env node
'use strict'

const env = require('node-env-file')
env(__dirname + '/../config/config.env')

const express = require('express')
const exphbs  = require('express-handlebars')
const app = express()

// For nginx forwarding
app.set('trust proxy', true)

// Handlebars
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs')

app.use('/static', express.static('static'))

app.get('/', function(req, res, next) {
  res.render('home')
})
app.get('/app', function(req, res, next) {
  res.render('app')
})

app.listen(process.env.PORT)
console.log('Listening on port ' + process.env.PORT)
