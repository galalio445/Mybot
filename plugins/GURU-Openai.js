import fetch from 'node-fetch';

let handler = async (m, { text, usedPrefix, command }) => {
  
  if (!text && !(m.quoted && m.quoted.text)) {
    throw `Please provide some text or quote a message to get a response.`;
  }

  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text;
  }

  try {
    conn.sendPresenceUpdate('composing', m.chat);
    const prompt = encodeURIComponent(text);
     const endpoint = `https://api.lolhuman.xyz/api/openai-turbo?apikey${lolkeysapi}&text=${prompt}&system=${prompt}`;

    const response = await fetch(endpoint);
    const data = await response.json();
    const abc = data.result; 

   m.reply(abc);

  } catch (error) {
    console.error('Error: use chat chatgpt or openai command', error);
    throw `*ERROR*`;
  }
};
handler.help = ["ai"]
handler.command = ['ai'];
handler.diamond = false;

export default handler;

