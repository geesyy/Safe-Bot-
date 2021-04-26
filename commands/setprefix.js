const discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (bot, message, args) => {
    let prefix = args [0]
    if(!prefix) return message.channel.send("Você deve especificar um novo prefixo.")

    let embed = new discord.MessageEmbed()
    .setTitle("Novo Prefixo")
    .setDescription(`O prefixo foi alterado para ${prefix}`)

    db.set(`prefix_${message.guild.id}`, prefix)
    message.channel.send(embed)
}

module.exports.help = {
    name: "setprefix",
    aliases: ["prefix"],
    description: "Modificar de prefixo.",
    usage: "setprefix prefix",
    category: "Setting",
}