const { EmbedBuilder } = require('discord.js');

module.exports = (queue) => {

 const Disconnect = new EmbedBuilder()
    .setAuthor({name: `Disconnesso dal canale vocale, cancellazione della coda! ❌`})
    .setColor('#2f3136')

queue.metadata.send({ embeds: [Disconnect] })
}
