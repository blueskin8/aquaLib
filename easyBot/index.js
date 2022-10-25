const Discord = require("discord.js");
const app = require('../../config/app.json');
const config = require('../../config/config.js')

const easyCommands = require('../easyCommands/index.js');

const Client = new Discord.Client({
    presence: { status: "online" },
    intents: ["DirectMessageReactions", "DirectMessageTyping", "DirectMessages", "GuildBans", "GuildEmojisAndStickers", "GuildIntegrations", "GuildInvites", "GuildMembers", "GuildMessageReactions", "GuildMessageTyping", "GuildMessages", "GuildPresences", "GuildScheduledEvents", "GuildVoiceStates", "GuildWebhooks", "Guilds", "MessageContent"]
});

Client.on('messageCreate', msg => {
    easyCommands.checkMessage(msg, Client);
});

Client.on('interactionCreate', interaction => {
    if(interaction.isButton()) {
        if(config.utiliserSystemeHelp != "") {
            require('./helpSystem/help.js').buttonGestionner(Client, interaction)
        }
    }
})

Client.login(config.token).catch((err) => {
    console.error("Une erreur est survenue durant la connexion du bot");
}).then(() => {
    console.log(app.name.toString() + ' opérationnel !');
});

module.exports = Client;