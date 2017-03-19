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
app.get('/api/user', function(req, res, next) {
  res.json({"success":true,"user":{"id":"63a4faca-b557-4e50-ae56-cb4514562327","name":"Guest","show_onboarding":true}})
})

app.listen(process.env.PORT)
console.log('Listening on port ' + process.env.PORT)
