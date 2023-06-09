
const prismic = require('@prismicio/client')
const fetch = require('node-fetch') //version v2

const repoName = process.env.PRISMIC_ENDPOINT
const accessToken = process.env.PRIMSIC_ACCESS_TOKEN

export const client = prismic.createClient(repoName, { 
  fetch, 
  accessToken,
})