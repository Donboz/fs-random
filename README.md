# farbesquad-random

`Rastegele gif ve resim atan modül `

# Nasıl indirilir

`npm install farbesquad.random --save`

# Neden farbesquad-random

`Geniş kullanımlı , giphy api, ve kararlı yapıda`

# Methodlar

`random`
`search`

# Komutlar v1.0.0

```
const fbr = require("farbesquad-random")


let gif1 = fbr.random()
const e1 = new Discord.MessageEmbed()
.setImage(gif1)


let gif2 = fbr.search({query:""})
const e2 = new Discord.MessageEmbed()
.setImage(gif2)

message.channel.send(e1)
message.channel.send(e2)

```
