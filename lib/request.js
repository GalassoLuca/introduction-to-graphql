const request = require('request')

module.exports = async (url) => {
  url += `/?format=json`

  console.log('url', url)

  return new Promise ((resolve, reject) => {
    request(url, { json: true }, (err, res, body) => {
      if (err) reject(err)

      resolve(body.results)
    })
  })
}
