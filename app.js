require('dotenv').config()

const express = require('express')
const app = express()
const path = require('path')
const port = 3000


// // Preloading Texture //
// const handleRequest = async api => {
//   const preloader = await client.getSingle('preloader')

//   const assets = []

//   assets.push(preloader.data.video1.url)

// return {
//   preloader
// }

// }

const prismic = require('@prismicio/client')
const fetch = require('node-fetch') //version v2
const UAParser = require('ua-parser-js')

const repoName = process.env.PRISMIC_ENDPOINT
const accessToken = process.env.PRIMSIC_ACCESS_TOKEN

const client = prismic.createClient(repoName, { 
  fetch, 
  accessToken,
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  const ua = UAParser(req.headers['user-agent'])

  res.locals.isDesktop = ua.device.type === undefined
  res.locals.isPhone = ua.device.type === 'mobile'
  res.locals.isTablet = ua.device.type === 'tablet'
  console.log(res.locals.isDesktop, res.locals.isPhone, res.locals.isTablet)
  res.locals.ctx = {
    prismic,
  }
  next()
})

// Query for the homepage path.
app.get('/', async (req, res) => {
  const preloader = await client.getSingle('preloader')
  console.log(preloader.data)
  // Here we are retrieving the document from your API endpoint
  const document = await client.get({ 
    predicates: [ prismic.predicate.at("document.type", 'home')]
  }).then( 
    response => {
      // Destructuring assignment
      const { results } = response;
      [ home ] = results;
      console.log(home.data);
        res.render('pages/home', {
          preloader,
        })
    })
  }
)

// Query for the mentions path.
// app.get('/mentions', async (req, res) => {
//   const preloader = await client.getSingle('preloader')
//   console.log(preloader.data)
//   // Here we are retrieving the document from your API endpoint
//   const document = await client.get({ 
//     predicates: [ prismic.predicate.at("document.type", 'mentions')]
//   }).then( 
//     response => {
//       // Destructuring assignment
//       const { results } = response;
//       // [ home ] = results;
//       // console.log(home.data);
//         res.render('pages/mentions', {
//           preloader,
//         })
//     })
//   }
// )

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})