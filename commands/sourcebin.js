const sourcebin = require('sourcebin_js')

module.exports = {
   name: 'sourcebin',
   run: async (client, message, args) => {

       if (!args.join(' ')) return message.reply('digite alguma coisa para gerar seu sourcebin.')

      sourcebin.create([{
      name: `Code by ${message.author.tag}`,
      content: args.join(' '),
      languageId: 'js'
    }])
      .then(src => {
           message.channel.send(src.url)
    })
  .catch(e => {
         message.channel.send(`desculpe, ocorreu um erro!`)
   });

  }
}