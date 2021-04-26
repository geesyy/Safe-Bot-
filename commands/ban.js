const Discord = require("discord.js")
 
exports.run = (bot, message, args) => {
  let user = message.mentions.users.first() || bot.users.cache.get(args[0])
    var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!membro) return message.reply('🚨 | O comando não foi digitado corretamente, digite *.helpadmin.*')
    if (membro === message.member) return message.reply(`🚨 | Desculpe, mas você não tem permissão para isso.`)
 
    var motivo = args.slice(1).join(" ");
    if (!motivo) return message.channel.send(`🚨 | Motivo inválido.`)
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`🚨 | Desculpe, mas você não tem permissão para executar o comando.`)
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('🚨 | Desculpe, mas você não tem permissão executar o comando.')
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('🚨 | Desculpe, mas você não tem permissão para executar o comando.')
 
message.channel.send(`Deseja realmente banir o ${user}?  Clique no emoji.`).then(msg => {
        msg.react("👍")
 
        let filtro = (reaction, usuario) => reaction.emoji.name === "👍" && usuario.id === message.author.id;
        let coletor = msg.createReactionCollector(filtro, {max: 1})
 
        coletor.on("collect", cp => {
            cp.remove(message.author.id); {
                let embed = new Discord.MessageEmbed()
                .setTitle('🚨 - BANIMENTO')
                .setColor('#ff210e')
                .setTimestamp()
                .setThumbnail('https://imgur.com/HBkNyYD.gif')
                .addFields(
                  {
                    name: "``Informações do Banimento:``",
                    value: `**Usuário banido**: ${membro} \n **Motivo**: ${motivo} \n **Banido por**: ${message.author.username}`
                  }
                )
                message.channel.send(embed);
            }
            membro.ban();
        })
    })
}