import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Enter text or your question?`
    let res = await fetch(`https://api.lolhuman.xyz/api/openai-turbo?apikey=${lolkeysapi}&text=${prompt}&system=hey`)
    let zel = await res.json()
   m.reply(zel.result)  catch (e) {
         m.reply("Sorry we have faced server side error use Openai or ai command")
      }
};

handler.help = ['chatgpt']
handler.tags = ['ai']
handler.command = /^(ai|openai)$/i

export default handler;

 
