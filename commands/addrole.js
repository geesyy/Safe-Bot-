const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Você não tem permissão para usar este comando.').then((m) => m.delete({ timeout: 5000 }));
    let user = message.mentions.members.first()
    if(!user) return message.channel.send("Por favor, especifique um usuário existente.").then((m) => m.delete({ timeout: 5000 }));

    let role = message.mentions.roles.first()
    if(!role) return message.channel.send("Por favor, especifique uma tag existente.").then((m) => m.delete({ timeout: 5000 }));

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

