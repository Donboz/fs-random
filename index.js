const axios = require("axios");
const errmsg = "Herhangi bir sıkıntımı oldu / any problems ? discord: ! ! Donboz#7323 \n  "
const api = "16GnF6kqQInS7QKMd8HPjcXZX2udEv40"

/**
 * @param {object} options 
 * 
 */
    async function random(options = {}) {
        if(!options.tag) throw new Error("tag yeri boş kalamaz")
         const a = await axios.get(`https://api.giphy.com/v1/gifs/random?&api_key=${api}&tag=${options.tag}`)
         const aa = await a.data.images.original.url
         console.log(aa)
         return await aa
        } // FarbeSquad Studios

        /**
 * @param {object} options 
 */
    async function otorandom() {
        const a = await axios.get(`https://api.giphy.com/v1/gifs/random?&api_key=${api}`)
        const aa = await a.data.images.original.url
        console.log(aa)
        return await aa
        } // FarbeSquad Studios


        /**
 * @param {object} options 
 * 
 */
    async function search(options = {}) {
        if(!options.query) throw new Error("arama yeri boş kalamaz")
        const a = await axios.get(`https://api.giphy.com/v1/gifs/random?&api_key=${api}&q=${options.query}`)
        const aa = await a.data[0].images.original.url
        console.log(aa)
        return await aa
    } // FarbeSquad Studios
   

module.exports = {random,otorandom,search}