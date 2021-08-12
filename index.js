const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
const config = require('./config.json');
client.commands = new Discord.Collection();
client.event = new Discord.Collection();
client.prefix = "!";

const Distube = require('distube');

client.distube = new Distube(client, { searchSongs: false, emitNewSongOnly: true });

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

client.on('voiceStateUpdate', (oldstate, newstate) => {
    if (newstate.channel) {
        console.log(`${newstate.member.user.tag} connected to ${newstate.channel.name}`);
        newstate.channel.join();
    }
    if (oldstate.channel) {
        console.log(`${oldstate.member.user.tag} disconnected from ${oldstate.channel.name}`);
        oldstate.channel.leave();
    }
});


client.login(config.token);