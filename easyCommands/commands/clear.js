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
        if (args[1] == "all") {
            message.channel.bulkDelete(100, true)
            message.channel.bulkDelete(100, true)
            message.channel.bulkDelete(100, true)
            message.channel.bulkDelete(100, true)
            message.channel.bulkDelete(100, true)
            message.channel.bulkDelete(100, true)
            message.channel.bulkDelete(100, true)
            message.channel.bulkDelete(100, true)
            message.channel.bulkDelete(100, true)
            message.channel.bulkDelete(100, true)
            return
        }
        if (!isNaN(args[1]) && args[1] >= 1 && args[1] <= 100) {
            for (let i = args[1].split("").length; i != 0; i--) { if (args[1].split("")[i] == ".") return sendMessage('error', "Veuillez indiquer un nombre entier.", message.channel) }
            message.channel.bulkDelete(numberToDelete, true).then(() => {
                sendMessage("success", `Vous avez supprimé ${args[1]} message(s).`, message.channel)
            })
        } else sendMessage('error', "Veuillez indiquer un nombre entre 1 et 100.", message.channel)
    } else sendMessage('error', "Veuillez indiquer un nombre de messages à supprimer.", message.channel)
}