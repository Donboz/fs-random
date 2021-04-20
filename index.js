const axios = require("axios");
const errmsg = "Herhangi bir sıkıntımı oldu / any problems ? discord: ! ! Donboz#7323 \n  "
const api = "16GnF6kqQInS7QKMd8HPjcXZX2udEv40"

        /**
 * @param {object} options 
 */
         async function random() {
            return await axios.get(`https://api.giphy.com/v1/gifs/random?&api_key=${api}`).then(async a => a.data.data.images.original.url)
        } // FarbeSquad Studios
       

        /**
 * @param {object} options 
 * 
 */
    async function search(options = {}) {
        if(!options.query) throw new Error("arama yeri boş kalamaz")
        return await axios.get(`https://api.giphy.com/v1/gifs/search?&api_key=${api}&q=${options.query}`).then(async a => a.data.data[0].images.original.url)
    } // FarbeSquad Studios
   

module.exports = {random,search}