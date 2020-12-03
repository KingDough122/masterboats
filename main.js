 dbd = require("dbd.js")
 
const bot = new dbd.Bot({
sharding: true, 
shardAmount: 2,
token: "Nzc5NDIzNTA3NDYwNTIyMDY0.X7gUtQ.V4u7FF0DIz-OBp_-LraxxeD54KQ", 
prefix: "!" 
})
 
bot.onMessage("Bot has turned on!")
 
const fs = require('fs')

const folders = fs.readdirSync("./commands/")

for (const files of folders) {
const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./commands/${files}/${commands}`) 
bot.command({
name: command.name,
code: command.code
})
} 
}

bot.status({
  text: "$allMembersCount Members | Exotic Boat list Server",
  type: "WATCHING",
  time: 25
})

bot.status({
  text: "$commandsCount Commands in --> | Exotic Boat list Server",
  type: "PLAYING",
  time: 25
})

bot.variables({
  warn: "0",
  Name2: "automod"
})
