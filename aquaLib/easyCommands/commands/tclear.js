const Discord = require('discord.js');
const app = require('../../../config/app.json'), config = require('../../../config/config.js')

const sendMessage = require('../../easyBot/MessageCreator/sendMessage.js')

module.exports = (Client, message) => {
    if (!Client || !message) throw "AquaLib : EasyCommands : Les arguments Client et message lors de l'appel de la fonction sont obligatoires."
    const args = message.content.trim().split(/ +/g);
    let numberToDelete;
    numberToDelete = Number(args[1])
    if (config.autoCallMessageDelete == true && message.deletable == true) message.delete()
        if (args[1]) {
            if(args[1] == "all") {
                return message.channel.messages.fetch({ limit: 100 }).then(messages => {
                    if(messages.size == 0) return sendMessage('error', "Il n'y a aucun messages dans ce salon.", message.channel)
                    message.channel.send({ embeds: [new Discord.EmbedBuilder().setDescription("Tant que le bot ne s'arrète pas, la suppression continue automatiquement.").setTimestamp().setColor(app.botColor).setTitle("L'action à bien été lancée, la suppréssion peut durer plusieurs minutes").setFooter({ text: "Par " + app.name, iconURL: app.iconURL })]})
                    setTimeout(() => {
                        messages.forEach(msg => {
                            msg.delete()
                        })
                    }, 1000)
                })
            }
        } else sendMessage('error', "Veuillez indiquer un nombre de messages à supprimer.", message.channel)
}