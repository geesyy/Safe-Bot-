const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.members.first()
    if(!user) return message.channel.send("Por favor, especifique um usuário existente.")

    let role = message.mentions.roles.first()
    if(!role) return message.channel.send("Por favor, especifique uma tag existente.")

    message.channel.send(`${user} foi adicionado a tag ${role} com sucesso.`)
    user.roles.add(role)
}

module.exports.help = {
    name: "addrole",
    aliases: ["arole"],
    description: "Adiciona uma tag ao usuário.",
    usage: "addrole user role",
    category: "Setting"
}

