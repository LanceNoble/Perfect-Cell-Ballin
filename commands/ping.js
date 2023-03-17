const { SlashCommandBuilder } = require('discord.js');
const wait = require('timers/promises');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with pong!'),
	async execute(interaction) {
		await interaction.deferReply({ ephemeral: true });
		await wait(4000);
		await interaction.editReply('Pong!');
		const message = await interaction.fetchReply();
		console.log(message);
		await interaction.deleteReply();
		await interaction.followUp({ content: 'Pong again!', ephemeral: true });
	},
};