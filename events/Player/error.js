const { EmbedBuilder } = require('discord.js');

module.exports = (queue, error) => {
    
    const ErrorEmbed = new EmbedBuilder()
    .setAuthor({name: `Si è verificato un errore imprevisto nel bot, controlla immediatamente la console!`})
    .setColor('#EE4B2B')
    
queue.metadata.send({ embeds: [ErrorEmbed] })

console.log(`Errore emesso dal Bot ${error.message}`);
}
