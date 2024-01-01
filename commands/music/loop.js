const { QueueRepeatMode, useMainPlayer, useQueue } = require('discord-player');
const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'loop',
    description: 'abilita o disabilita il looping dei brani o dell\'intera coda',
    voiceChannel: true,
    options: [
        {
        name: 'action' ,
        description: 'quale azione vuoi eseguire sul loop',
        type: ApplicationCommandOptionType.String,
        required: true,
        choices: [
            { name: 'Queue', value: 'enable_loop_queue' },
            { name: 'Disable', value: 'disable_loop'},
            { name: 'Song', value: 'enable_loop_song' },
            { name: 'autoplay', value: 'enable_autoplay' },
        ],
    }
    ],
    execute({ inter }) {
        const player = useMainPlayer()

const queue = useQueue(inter.guild);
        let BaseEmbed = new EmbedBuilder()
        .setColor('#2f3136')

        if (!queue || !queue.isPlaying()) return inter.editReply({ content: `Nessuna musica attualmente in riproduzione ${inter.member}... riprova ? ❌`, ephemeral: true });
        switch (inter.options._hoistedOptions.map(x => x.value).toString()) {
            case 'enable_loop_queue': {
                if (queue.repeatMode === QueueRepeatMode.TRACK) return inter.editReply({ content:`Devi prima disabilitare la musica corrente in modalità loop (/loop Disable) ${inter.member}... riprova ? ❌`, ephemeral: true });

                const success = queue.setRepeatMode(QueueRepeatMode.QUEUE);
                
                BaseEmbed.setAuthor({ name: success ? `Qualcosa è andato storto ${inter.member}... riprova ? ❌` : `La modalità ripeti è abilitata tutta la coda verrà ripetuta all'infinit 🔁` })

                return inter.editReply({ embeds: [BaseEmbed] });
                
            }
            case 'disable_loop': {
                if (queue.repeatMode === QueueRepeatMode.OFF) return inter.editReply({ content:`È necessario prima abilitare la modalità loop (/loop Queue or /loop Song) ${inter.member}... riprova ? ❌`, ephemeral: true });
                
                const success = queue.setRepeatMode(QueueRepeatMode.OFF);

                BaseEmbed.setAuthor({ name: success ? `Qualcosa è andato storto ${inter.member}... riprova ? ❌` : `Modalità ripeti disabilitata la coda non verrà più ripetuta 🔁`})

                return inter.editReply({ embeds: [BaseEmbed] });
                
            }
            case 'enable_loop_song': {
                if (queue.repeatMode === QueueRepeatMode.QUEUE) return inter.editReply({ content:`Devi prima disabilitare la musica corrente in modalità loop (/loop Disable) ${inter.member}... riprova ? ❌`, ephemeral: true });

                const success = queue.setRepeatMode(QueueRepeatMode.TRACK);

                BaseEmbed.setAuthor({ name: success ? `Qualcosa è andato storto ${inter.member}... riprova ? ❌` : `La modalità di ripetizione attivata, il brano corrente verrà ripetuto all'infinito (puoi terminare il loop con /loop disable)` })

                return inter.editReply({ embeds: [BaseEmbed] });
                
            }
            case 'enable_autoplay': {
                if (queue.repeatMode === QueueRepeatMode.AUTOPLAY) return inter.editReply({ content:`Devi prima disabilitare la musica corrente in modalità loop (/loop Disable) ${inter.member}... riprova ? ❌`, ephemeral: true });

                const success = queue.setRepeatMode(QueueRepeatMode.AUTOPLAY);

                BaseEmbed.setAuthor({ name: success ? `Qualcosa è andato storto ${inter.member}... riprova ? ❌` : `Abilitando la riproduzione automatica, la coda verrà riempita automaticamente con brani simili a quello corrente 🔁` })

                return inter.editReply({ embeds: [BaseEmbed] });

            }
        }
       
    },
};