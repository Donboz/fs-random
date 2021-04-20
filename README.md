# farbesquad-random

`Rastegele gif ve resim atan modül `

# Nasıl indirilir

`npm install fs-random --save`

# Neden farbesquad-random

`Geniş kullanımlı , giphy api, nekobot api, ve kararlı yapıda`

# Methodlar

Hepsinin başında await olmalı !!!

`random()`(gif)
`search("query:")`(gif)
`srandom()`(stickers)
`ssearch("query:")`(stickers)
`hentai()`(nsfw)
`ass()`(nsfw)
`pussy()`(nsfw)
`anal()`(nsfw)
`kanna()`(nsfw)
`four()`(nsfw)
`hanal()`(nsfw)
`boobs()`(nsfw)
`thigh()`(nsfw)
`tentacle()`(nsfw)
`hboobs()`(nsfw)
`holo()`(nsfw)
`hass()`(nsfw)
`pgif()`(nsfw)
`hthigh()`(nsfw)
`yaoi()`(nsfw)
`hneko()`(nsfw)
`neko()`(nsfw)
`hkitsune()`(nsfw)
`kemonomimi()`(nsfw)

# Komutlar v1.0.0

```js
const fbr = require("fs-random")


let gif1 = fbr.random()
const e1 = new Discord.MessageEmbed()
.setImage(gif1)


let gif2 = fbr.search({query:""})
const e2 = new Discord.MessageEmbed()
.setImage(gif2)

message.channel.send(e1)
message.channel.send(e2)

```
