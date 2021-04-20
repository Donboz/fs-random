# farbesquad-random

Rastegele gif ve resim atan modül 

# Nasıl indirilir

npm install fs-random --save

# Neden farbesquad-random

Geniş kullanımlı , giphy api, nekobot api, ve kararlı yapıda

# Methodlar

komut yaparken;
Hepsinin başında await olmalı !!!
```js
random() 
search({query:})
srandom()
ssearch({query:})
hentai()
ass()
pussy()
anal()
kanna()
four()
hanal()
boobs()
thigh()
tentacle()
hboobs()
holo()
hass()
pgif()
hthigh()
yaoi()
hneko()
neko()
hkitsune()
kemonomimi()
```
# Komutlar v1.0.5

```js
const fbr = require("fs-random")

// eğer await olmassa veriyi çekemez

//örnek #1
let gif1 = await fbr.random()
const e1 = new Discord.MessageEmbed()
.setImage(gif1)

message.channel.send(e1)

//örnek #2
let gif2 = await fbr.search({query:""})
const e2 = new Discord.MessageEmbed()
.setImage(gif2)

message.channel.send(e2)

```
