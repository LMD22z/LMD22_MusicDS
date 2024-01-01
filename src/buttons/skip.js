module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.isPlaying()) return inter.editReply({ content: `Nessuna musica attualmente in riproduzione... riprova ? ❌`, ephemeral: true });
    
    const success = queue.node.skip();

    return inter.editReply({ content: success ? `Musica attuale ${queue.currentTrack.title} skipped ✅` : `Qualcosa è andato storto ${inter.member}... riprova ? ❌`, ephemeral: true});
}