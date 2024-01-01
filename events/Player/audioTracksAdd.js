const { EmbedBuilder } = require('discord.js');

module.exports = (queue) => {
    if (!client.config.app.ExtraMessages) return

    const audioTracksAdd = new EmbedBuilder()
    .setAuthor({name: `Tutti i brani nella playlist vengono aggiunti alla coda ✅`})
    .setColor('#2f3136')

queue.metadata.send({ embeds: [audioTracksAdd] })

}
