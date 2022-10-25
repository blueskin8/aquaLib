const Discord = require('discord.js');
const app = require('../../../config/app.json'), config = require('../../../config/config.js')

const sendMessage = require('../../easyBot/MessageCreator/sendMessage.js')

module.exports = (Client, message) => {
    if (!Client || !message) throw "AquaLib : EasyCommands : Les arguments Client et message lors de l'appel de la fonction sont obligatoires."
    const args = message.content.trim().split(/ +/g);
    const mentions = message.mentions.members.first()
    const stringArgs = message.content.split(' ').slice(2).join(" ")

    let reason;
    if (stringArgs) { reason = stringArgs } else reason = "Aucune raison n'as été précisé.";

    if (config.autoCallMessageDelete == true) message.delete()

    if (mentions) {
        if (!mentions.bannable) return sendMessage('error', "Cet utilisateur est trop puissant, je ne peux pas le ban.", message.channel)
        mentions.ban({ reason: `${stringArgs}` }).then(() => {
            sendMessage('success', mentions.user.username + " à été banni(e) de ce serveur discord.\nRaison : " + reason, message.channel)
        })
    } else return sendMessage('error', 'Veuillez préciser un membre à bannir.', message.channel)
}