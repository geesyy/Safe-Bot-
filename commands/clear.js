const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'clear',
	category: 'moderation',
	run: async (client, message, args) => {
		if (!message.member.permissions.has('MANAGE_MESSAGES')) {
			return message.channel.send(
				`Você não tem permissão para limpar o chat, ${message.author.username}`, // returns this message to user with no perms
			);
		}
		if (!args[0]) {
			return message.channel.send('Por favor, insira um número valido entre 1 e 100.');
		}

		let deleteAmount = parseInt(args[0], 10);

		if (Number.isNaN(deleteAmount)) {
			return message.channel.send('Por favor, insira um número válido entre 1 e 100.');
		}

		// could use ternary
		if (deleteAmount > 100) {
			deleteAmount = 100;
		} else {
			deleteAmount = parseInt(args[0], 10);
		}

		await message.channel.bulkDelete(deleteAmount, true);

		const embed = new MessageEmbed()
    .setDescription(`**♻️ O chat foi limpo.**`)
		return message.channel.send(embed);
	},
};