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
        if (!isNaN(args[1]) && args[1] >= 1 && args[1] <= 100) {
            if (args[2] == "true") {
                return message.channel.messages.fetch({ limit: args[1] }).then(messages => {
                    if (messages.size == 0) return sendMessage('error', "Il n'y a aucun messages dans ce salon.", message.channel)
                    message.channel.send({ embeds: [new Discord.EmbedBuilder().setDescription("Tant que le bot ne s'arrète pas, la suppression continue.\nDans une suppression forcée, les messages sont supprimés un par un.").setTimestamp().setColor(app.botColor).setTitle("L'action à bien été lancée, la suppréssion peut prendre du temps").setFooter({ text: "Par " + app.name, iconURL: app.iconURL })] }).then(msg => { if (config.BotMessageDelete.autoBotMessageDelete == true) { setTimeout(() => { if (msg.deletable) msg.delete().catch(err => console.error(err + "\nCette erreur n'est pas importante")) }, config.BotMessageDelete.timeout) } })
                    setTimeout(() => {
                        messages.forEach(msg => {
                            msg.delete().then(() => { }).catch(err => console.error(err.toString() + "\nCette erreur n'est pas importante"))
                        })
                    }, 5000)
                })
            }
            if(args[2] && args[2] !== "false") return sendMessage('error', "Le paramètre Force n'accepte qu'un boolean (true ou false)", message.channel)
            for (let i = args[1].split("").length; i != 0; i--) { if (args[1].split("")[i] == ".") return sendMessage('error', "Veuillez indiquer un nombre entier.", message.channel) }
            message.channel.bulkDelete(numberToDelete, true).then(() => {
                sendMessage("success", `Vous avez supprimé ${args[1]} message(s).`, message.channel)
            })
        } else sendMessage('error', "Veuillez indiquer un nombre entre 1 et 100.", message.channel)
    } else sendMessage('error', "Veuillez indiquer un nombre de messages à supprimer.", message.channel)
}