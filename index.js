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
        return await axios.get(`https://api.giphy.com/v1/gifs/search?&api_key=${api}&q=${options.query}`).then(async a => a.data.data[0].images.original.url).catch(err => console.error(errmsg + err))
    } // FarbeSquad Studios

           /**
 * @param {object} options 
 */
            async function srandom() {
                return await axios.get(`https://api.giphy.com/v1/stickers/random?&api_key=${api}`).then(async a => a.data.data.images.original.url).catch(err => console.error(errmsg + err))
            } // FarbeSquad Studios
           
    
            /**
     * @param {object} options 
     * 
     */
        async function ssearch(options = {}) {
            if(!options.query) throw new Error("arama yeri boş kalamaz")
            return await axios.get(`https://api.giphy.com/v1/stickers/search?&api_key=${api}&q=${options.query}`).then(async a => a.data.data[0].images.original.url).catch(err => console.error(errmsg + err))
        } // FarbeSquad Studios

        async function hentai() {
            return await axios.get('https://nekobot.xyz/api/image?type=hentai').then(async a => await a.data.message).catch(err => console.error(errmsg + err)) 
            } // FarbeSquad Studios
            async function pussy() {
            return await axios.get('https://nekobot.xyz/api/image?type=pussy').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
            } // FarbeSquad Studios
            async function anal() {
            return await axios.get('https://nekobot.xyz/api/image?type=anal').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
            } // FarbeSquad Studios
            async function hanal() {
            return await axios.get('https://nekobot.xyz/api/image?type=hanal').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
            } // FarbeSquad Studios
            async function thigh() {
            return await axios.get('https://nekobot.xyz/api/image?type=thigh').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
            } // FarbeSquad Studios
            async function boobs() {
            return await axios.get('https://nekobot.xyz/api/image?type=boobs').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
            } // FarbeSquad Studios
            async function ass() {
            return await axios.get('https://nekobot.xyz/api/image?type=ass').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
            } // FarbeSquad Studios
            async function kanna() {
            return await axios.get('https://nekobot.xyz/api/image?type=kanna').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
            } // FarbeSquad Studios
            async function four() {
            return await axios.get('https://nekobot.xyz/api/image?type=four').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
            } // FarbeSquad Studios
            async function hthigh() {
            return await axios.get('https://nekobot.xyz/api/image?type=hthigh').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
            } // FarbeSquad Studios
            async function tentacle() {
            return await axios.get('https://nekobot.xyz/api/image?type=tentacle').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
            } // FarbeSquad Studios
            async function hboobs() {
            return await axios.get('https://nekobot.xyz/api/image?type=hboobs').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
            } // FarbeSquad Studios
            async function holo() {
            return await axios.get('https://nekobot.xyz/api/image?type=holo').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
            } // FarbeSquad Studios
            async function hass() {
            return await axios.get('https://nekobot.xyz/api/image?type=hass').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
            } // FarbeSquad Studios 
            async function pgif() {
            return await axios.get('https://nekobot.xyz/api/image?type=pgif').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
            } // FarbeSquad Studios
            async function yaoi() {
            return await axios.get('https://nekobot.xyz/api/image?type=yaoi').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
            } // FarbeSquad Studios
            async function neko() {
            return await axios.get('https://nekobot.xyz/api/image?type=neko').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
            } // FarbeSquad Studios
            async function hneko() {
            return await axios.get('https://nekobot.xyz/api/image?type=hneko').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
            } // FarbeSquad Studios
            async function hkitsune() {
            return await axios.get('https://nekobot.xyz/api/image?type=hkitsune').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
            } // FarbeSquad Studios
            async function kemonomimi() {
            return await axios.get('https://nekobot.xyz/api/image?type=kemonomimi').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
            } // FarbeSquad Studios
   

module.exports = {random,search,hentai,ass,pussy,anal,kanna,four,hanal,boobs,thigh,tentacle,hboobs,holo,hass,pgif,hthigh, yaoi, hneko, neko, hkitsune, kemonomimi,ssearch,srandom}