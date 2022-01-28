const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "moveall",
  run: async(client,message,args) => {
    if (!message.member.permissions.any(["ADMINISTRATOR", "MOVE_MEMBERS"])) {
        return message.reply(":x: Você não tem o poder de `Move_Members ou Administrator` para usar este comando.").then((m) => m.delete({ timeout: 5000 }));
      }
    let channel = message.member.voice.channel;
    if (!channel) return message.channel.send("Você precisa estar em um canal de voz para usar este comando.").then((m) => m.delete({ timeout: 5000 }));
    if (!message.guild.me.voice.connection) {
        channel.join().then((connection) => {
            message.guild.me.voice.setSelfDeaf(true);
            const paras = new MessageEmbed()
            .setDescription('**Agora, mova-me e arrastarei os usuários para um novo canal de voz.**')
            .setColor('RANDOM')
            message.channel.send(paras)

            client.on("voiceStateUpdate", async (oldmem, newmem) => {
                if (newmem.member.voice.channel && newmem.member.voice.channel.id !== channel.id) {
                    let newchannel = message.guild.channels.cache.get(newmem.member.voice.channel.id);
                    if (client.user.id === newmem.member.user.id) {
                        channel.members.forEach(e => {
                            e.voice.setChannel(newchannel);
                            newchannel.leave();
                        })
                    }
                }
            })
        })
    }
    else {
        message.channel.send(`**Já estou conectado a um canal de voz.**`);
    }
    }}
