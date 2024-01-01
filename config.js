module.exports = {
    app: {
        token: '', //----your token https://discord.com/developers
        playing: 'by LMD22 ❤️',
        global: true,
        guild: '', // your ServerID
        ExtraMessages: true,
        loopMessage: true,

    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '', // your custom role for dj bot
            commands: []
        },
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
