const Discord = require('discord.js');
const app = require('../../../config/app.json'), config = require('../../../config/config.js');

const Client = require('../index.js')

let msg;

module.exports = (type = String, message = String, channel = Discord.TextChannel) => {

    msg = "";

    if (type) {
        if (type == "custom") {
            if (message) {
                if (config.messagesType == "text") {
                    msg = message;
                }
                if (config.messagesType == "embed") {
                    msg = { embeds: [new Discord.EmbedBuilder().setColor(app.botColor).setTitle(message).setTimestamp().setFooter({text: "Par " + app.name, iconURL: app.iconURL})] }
                }
            } else throw 'AquaLib : sendMessage : Le String message est obligatoire si le String type est custom'
        }

        else if (type == "error") {
            if (config.messagesType == "embed") {
                if (message) {
                    msg = { embeds: [new Discord.EmbedBuilder().setColor("#EE4343").setTitle('Erreur').setDescription(message).setTimestamp().setFooter({text: "Par " + app.name, iconURL: app.iconURL})] };
                } else if (!message) {
                    msg = { embeds: [new Discord.EmbedBuilder().setColor("#EE4343").setTitle('Erreur').setDescription("Une erreur est survenue !").setTimestamp().setFooter({text: "Par " + app.name, iconURL: app.iconURL})] };
                }
            }

            if (config.messagesType == "text") {
                if (message) {
                    msg = message;
                } else if (!message) {
                    msg = "Une erreur est survenue !";
                }
            }
        }

        else if (type == "success") {
            if (config.messagesType == "embed") {
                if (message) {
                    msg = { embeds: [new Discord.EmbedBuilder().setColor("#35D668").setTitle('Parfait').setDescription(message).setTimestamp().setFooter({text: "Par " + app.name, iconURL: app.iconURL})] };
                } else if (!message) throw `AquaLib: sendMessage : Le String message est obligatoire si le String type est success`
            }

            if (config.messagesType == "text") {
                if (message) {
                    msg = message
                } else if (!message) throw `AquaLib: sendMessage : Le String message est obligatoire si le String type est success`
            }
        } else throw 'AquaLib : sendMessage : Le String type doit etre "custom" ou "error" ou "success"'
    } else throw 'AquaLib : sendMessage : Le String type est obligatoire ("custom" ou "error" ou "success")'

    if (config.BotMessageDelete.autoBotMessageDelete == true) {
        channel.send(msg).then(message => { setTimeout(() => message.delete().then(() => { }).then(() => { }).catch((err) => { console.error('AquaLib : easyBot : MessageCreator : sendMessage.js:58 : Un message n\'as pas pu être supprimer :\n' + err) }), config.BotMessageDelete.timeout) })
    } else return channel.send(msg)
}