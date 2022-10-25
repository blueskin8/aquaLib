const Discord = require('discord.js');
const app = require('../../../config/app.json'), config = require('../../../config/config.js')

const sendMessage = require('../../easyBot/MessageCreator/sendMessage.js')

module.exports = (Client, message) => {
    if (!Client || !message) throw "AquaLib : EasyCommands : Les arguments Client et message lors de l'appel de la fonction sont obligatoires."
    const args = message.content.trim().split(/ +/g);
    const stringArgs = message.content.split(' ').slice(2).join(" ")
    const mentions = message.mentions.members.first()
    if (config.autoCallMessageDelete == true) message.delete()
}