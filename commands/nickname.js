const Discord = module.require("discord.js");

module.exports = {
  name: "nickname",
  description: "Change the Nickname of other Users",
  userPerms: ["MANAGE_NICKNAMES"],
  botPerms: ["MANAGE_NICKNAMES"],
  run: async (client, message, args) => {
    let userTag = message.mentions.members.first();
    let newNickname = args.slice(1).join(" ");
    if (!userTag) {
      return message.reply("mencione o usuário que você deseja alterar o nickname.").then((m) => m.delete({ timeout: 5000 }));
    }
    if (!newNickname) {
      return message.reply("por favor, coloque um nickname válido para o usuário mencionado.").then((m) => m.delete({ timeout: 5000 }));
    }
    try {
      userTag.setNickname(newNickname);
    } catch (error) {
      message.reply(
        "Não é possível mudar o apelido deste usuário, ele tem um papel maior? É o criador do servidor? Tenho permissão para mudar o apelido dele?"
      ).then((m) => m.delete({ timeout: 5000 }));
    }
    message.channel.send(
      `Mudei o nome de ${userTag} para **${newNickname}**.`
    );
  },
};