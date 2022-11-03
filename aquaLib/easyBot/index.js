const Discord = require("discord.js");
const app = require('../../config/app.json');
const config = require('../../config/config.js')

const easyCommands = require('../easyCommands/index.js');
const sendMessage = require("./MessageCreator/sendMessage");

const Client = new Discord.Client({
    presence: { status: "online" },
    intents: ["DirectMessageReactions", "DirectMessageTyping", "DirectMessages", "GuildBans", "GuildEmojisAndStickers", "GuildIntegrations", "GuildInvites", "GuildMembers", "GuildMessageReactions", "GuildMessageTyping", "GuildMessages", "GuildPresences", "GuildScheduledEvents", "GuildVoiceStates", "GuildWebhooks", "Guilds", "MessageContent"]
});

Client.on('messageCreate', msg => {

    if(msg.content == "<@" + Client.user.id + ">") {
        if(config.autoCallMessageDelete == true && msg.deletable) msg.delete() 
        return sendMessage('custom', "Mon préfix est : " + app.prefix, msg.channel)
    }

    easyCommands.checkMessage(msg, Client);
});

Client.on('interactionCreate', interaction => {
    if(interaction.isButton()) {
        if(config.utiliserSystemeHelp != "") {
            require('./helpSystem/help.js').buttonGestionner(Client, interaction)
        }
    }
})

Client.login(app.token).catch((err) => {
    console.error("Une erreur est survenue durant la connexion du bot");
}).then(() => {
    console.log(app.name.toString() + ' opérationnel !');
});

module.exports = Client;