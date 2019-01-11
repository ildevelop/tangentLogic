const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'build')))
  .set('/static', path.join(__dirname, 'build/static'))
  .get('/', (req, res) => res.render('build/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))