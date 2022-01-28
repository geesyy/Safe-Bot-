const Discord = require('discord.js');

module.exports = {
    name: "anunciar",
    category: "Moderation",
    description: "announcement",
    usage: "[COMMAND] + [Channel] + [Text]",
    author: "[CuSO4-c3c,Hiyoriii,Hellsnakes]",
    run: async (client, message, args) => {
        if (!message.member.permissions.has('ADMINISTRATOR'))
        return message.channel.send(`Insufficient permission!!`);
        const channel = message.mentions.channels.first()
        if (!args.length) return message.channel.send(`Use: anunciar #channel <texto>`).then((m) => m.delete({ timeout: 5000 }));
        if (!channel) {
            message.reply("Especifique o canal que deseja anunciar.").then((m) => m.delete({ timeout: 5000 }));
            return
        } else {
            let announce = args.slice(1).join(" ")
            if(!announce) return message.channel.send(`Please Specify What Do You Want To Announce`)
            const embed = new Discord.MessageEmbed()
            .setTitle(`🔰Announcement🔰`)
            .setDescription(`${announce}`)
            .setFooter("Enviado por:"+ message.author.username +'#'+ message.author.discriminator)
            .setColor('RANDOM')
            channel.send(embed)
            channel.send(`@everyone`).then(m => m.delete())
        }
    }
}