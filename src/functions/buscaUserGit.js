const fetch = require('node-fetch')

module.exports = async function buscaUserGit(git){
    const response = await fetch(`https://api.github.com/users/${git}`)
    const json = await response.json()

    return json
}