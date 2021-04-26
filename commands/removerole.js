const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.members.first()
    if(!user) return message.channel.send("Por favor, especifique um usuário existente.")

    let role = message.mentions.roles.first()
    if(!role) return message.channel.send("Por favor, descreva uma tag existente.")

    message.channel.send(`${user} foi retirado da tag ${role} com sucesso.`)
    user.roles.remove(role)
}

module.exports.help = {
    name: "removerole",
    aliases: ["rmrole" , "rrole"],
    description: "Remove uma tag do usuário.",
    usage: "removerole user role",
    category: "Setting"
}

