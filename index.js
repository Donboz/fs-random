const axios = require("axios");
const errmsg = "Herhangi bir sıkıntımı oldum / any problems ? discord: ! ! Donboz#7323"
async function hentai() {
    return await axios.get('https://nekobot.xyz/api/image?type=hentai').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
    } // FarbeSquad Studios

module.exports = {hentai}