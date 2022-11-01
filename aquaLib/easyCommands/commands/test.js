const Discord = require('discord.js');
const app = require('../../../config/app.json'), config = require('../../../config/config.js')

const sendMessage = require('../../easyBot/MessageCreator/sendMessage.js')

module.exports = (Client, message) => {
    if (!Client || !message) throw "AquaLib : EasyCommands : Les arguments Client et message lors de l'appel de la fonction sont obligatoires."
    const args = message.content.trim().split(/ +/g);
    const stringArgs = message.content.split(' ').slice(2).join(" ")
    const mentions = message.mentions.members.first()
    if (config.autoCallMessageDelete == true) message.delete()

    let embed = new Discord.EmbedBuilder()
        .setTitle("Informations sur le bot")
        .setThumbnail(Client.user.avatarURL())
        .setTimestamp()
        .setColor(app.botColor)
        .setFooter({ text: "Par " + app.name, iconURL: app.iconURL })
        .addFields(
            {
                name: "Latence du bot",
                value: message.createdTimestamp - Date.now() + "ms"
            }, {
                name: "Latence de l'API",
                value: Math.round(Client.ws.ping) + "ms"
            }, {
                name: "OS de l'hebergeur du bot",
                value: process.platform
            }
        )
    
    message.channel.send({embeds: [embed]})
}