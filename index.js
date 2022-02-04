const consign = require('./node_modules/consign')
const express = require('express')
const app = express()

consign({ cwd: __dirname })
  .then('src/js/Inicio.js')
  .into(app)
  