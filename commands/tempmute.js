const {Message, MessageEmbed}= require('discord.js')
const ms = require('ms')

module.exports = {
    name : 'tempmute',
    /**
     * @param {Message} message
     */
    run : async(client, message, args) => {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Você não tem permissão para usar este comando.').then((m) => m.delete({ timeout: 5000 }));
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const time = args[1]
        if(!Member) return message.channel.send('Perdão, membro não encontrado.').then((m) => m.delete({ timeout: 5000 }));
        if(!time) return message.channel.send('Por favor, especifique um tempo para silenciar.').then((m) => m.delete({ timeout: 5000 }));
        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
        if(!role) {
            try {
                message.channel.send('A tag Muted não foi encontrada.').then((m) => m.delete({ timeout: 5000 }));

                let muterole = await message.guild.roles.create({
                    data : {
                        name : 'muted',
                        permissions: []
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
                message.channel.send('A tag muted foi criada com sucesso, disponha.').then((m) => m.delete({ timeout: 5000 }));
            } catch (error) {
                console.log(error)
            }
        };
        let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
        if(Member.roles.cache.has(role2.id)) return message.channel.send(`${Member.displayName} já foi silenciado.`).then((m) => m.delete({ timeout: 5000 }));
        await Member.roles.add(role2)
        message.channel.send(`${Member.displayName} foi silenciado.`).then((m) => m.delete({ timeout: 5000 }));

        setTimeout(async () => {
            await Member.roles.remove(role2)
            message.channel.send(`${Member.displayName} não está mais silenciado.`).then((m) => m.delete({ timeout: 5000 }));
        }, ms(time))
    }
}