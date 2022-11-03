const Discord = require('discord.js')
const app = require('../../../config/app.json')
const Element = require('../../../Elements.js')

module.exports = {
    HelpCommand: {
        title: "Help",
        desc: "Affiche l'help (cette fenêtre)\n**Syntaxe** : " + Element.HelpCommand.title + " [command : " + app.name + ".Command]",
        embed: [ new Discord.EmbedBuilder()
            .setTitle("Help")
            .setDescription("Affiche l'help (cette fenêtre)\n**Syntaxe** : " + Element.HelpCommand.title/* + [command : " + app.name + ".Command]"*/)
            .setColor(app.botColor).setTimestamp().setFooter({text: "Par " + app.name, iconURL: app.iconURL}) ]
    },
    ClearCommand: {
        title: "Clear",
        desc: "Supprime des messages\n**Syntaxe** : " + Element.ClearCommand.title + " <NombreDeMessagesASupprimer : int>",
        embed: [ new Discord.EmbedBuilder()
            .setTitle("Clear")
            .setDescription("Supprime des messages\n**Syntaxe** : " + Element.ClearCommand.title + " <NombreDeMessagesASupprimer : int> [Force : boolean]")
            .setColor(app.botColor).setTimestamp().setFooter({text: "Par " + app.name, iconURL: app.iconURL}) ]
    },
    UserinfoCommand: {
        title: "Userinfo",
        desc: "Récupère des informations sur un utilisateur\n**Syntaxe** : " + Element.UserinfoCommand.title + " [Mention : Discord.MessageMentions]",
        embed: [ new Discord.EmbedBuilder()
            .setTitle("Userinfo")
            .setDescription("Récupère des informations sur un utilisateur\n**Syntaxe** : " + Element.UserinfoCommand.title + " [Mention : Discord.MessageMentions]")
            .setColor(app.botColor).setTimestamp().setFooter({text: "Par " + app.name, iconURL: app.iconURL}) ]
    },
    BanCommand: {
        title: "Ban",
        desc: "Banni un utilisateur\n**Syntaxe** : " + Element.BanCommand.title + " <Mention : Discord.MessageMentions> [Raison : string]",
        embed: [ new Discord.EmbedBuilder()
            .setTitle("Ban")
            .setDescription("Banni un utilisateur\n**Syntaxe** : " + Element.BanCommand.title + " <Mention : Discord.MessageMentions> [Raison : String]")
            .setColor(app.botColor).setTimestamp().setFooter({text: "Par " + app.name, iconURL: app.iconURL}) ]
    },
    TestCommand: {
        title: "Test",
        desc: "Test la connexion du bot discord\n**Syntaxe** : " + Element.TestCommand.title,
        embed: [ new Discord.EmbedBuilder()
            .setTitle("Test")
            .setDescription("Test la connexion du bot discord\n**Syntaxe** : " + Element.TestCommand.title)
            .setColor(app.botColor).setTimestamp().setFooter({text: "Par " + app.name, iconURL: app.iconURL}) ]
    }
}