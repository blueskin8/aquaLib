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
                        msg.delete().then(() => {}).catch(err => console.error(err.toString() + "\nCette erreur n'est pas importante"))
                    })
                }, 1000)
            })
        }
        if (!isNaN(args[1]) && args[1] >= 1 && args[1] <= 100) {
            for (let i = args[1].split("").length; i != 0; i--) { if (args[1].split("")[i] == ".") return sendMessage('error', "Veuillez indiquer un nombre entier.", message.channel) }
            message.channel.bulkDelete(numberToDelete, true).then(() => {
                sendMessage("success", `Vous avez supprimé ${args[1]} message(s).`, message.channel)
            })
        } else sendMessage('error', "Veuillez indiquer un nombre entre 1 et 100.", message.channel)
    } else sendMessage('error', "Veuillez indiquer un nombre de messages à supprimer.", message.channel)
}