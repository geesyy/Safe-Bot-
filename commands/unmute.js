const { Message } = require('discord.js')

module.exports=  {
    name : 'unmute', 
    /**
     * @param {Message} message
     */
    run : async(client, message, args) => {
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if(!Member) return message.channel.send('Membro não encontrado').then((m) => m.delete({ timeout: 5000 }));

        const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');

        await Member.roles.remove(role)

        message.channel.send(`${Member.displayName} está desmutado.`).then((m) => m.delete({ timeout: 5000 }));
    }
}