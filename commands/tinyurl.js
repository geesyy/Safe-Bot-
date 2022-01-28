const Short = require("tinyurl");
const Discord = require("discord.js");

module.exports = {
  name: "tinyurl",
  aliases: ["str"],
  category: "Fun",
  description: "Make URL Short!",
  usage: "tinyurl <Link> | <Aliase>",
  run: async (client, message, args) => {
    
    if (!args[0] || !args[0].startsWith("http")) return message.channel.send("Por favor, coloque o link que deseja encurtar!").then((m) => m.delete({ timeout: 5000 }));

    async function ShortLink(Type, Link, Aliase) {
      if (Type === "aliase") {
        const Data = await Short.shortenWithAlias({ url: Link, alias: Aliase }).then(function(res) {
           return { data: res };
        }, function (err) {
          if (err) return "Unable";
        });
        return Data;
      } else {
        const Data = await Short.shorten(Link).then(function(res) {
          return { data: res };
        }, function (err) {
          if (err) return "Unable";
        });
        return Data;
      };
    };

    const URL = args[0], Aliases = args.slice(1).join("-");
    const Pro = await ShortLink(Aliases ? "aliase" : "Other", URL, Aliases ? Aliases : "None");

    const Embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(Pro.data === "Unable" || Pro.data === "Error" ? "Failed" : "E aí, segue abaixo o seu novo link:")
    .setDescription(Pro.data === "Unable" || Pro.data === "Error" ? "Unable To Shorten The URL!" : `${Pro.data}`)
    .setFooter(`Requested By ${message.author.username}`)
    .setTimestamp();

    return message.channel.send(Embed);
    
  }
};