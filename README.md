# farbesquad.random

`Rastegele gif ve resim atan modül `

# Nasıl indirilir

`npm install farbesquad.random --save`

# Neden farbesquad.random

`Çok geniş kullanımlı ve aşırı detaylı bir modül olduğundan`

# Methodlar

`random`
`otorandom`
`search`

# Komutlar v1.0.2

```
const fbr = require("farbesquad.random")

let gif1 = fbr.random({tag:""})

const e1 = new Discord.MessageEmbed()
.setImage(gif1)

let gif2 = fbr.otorandom()
const e2 = new Discord.MessageEmbed()
.setImage(gif2)


let gif3 = fbr.search({query:""})
const e3 = new Discord.MessageEmbed()
.setImage(gif3)

message.channel.send(e1)
message.channel.send(e2)
message.channel.send(e3)

```
