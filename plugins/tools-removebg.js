import uploadImage from '../lib/uploadImage.js';
import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command, args, text }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';

  if (!mime) throw '⚠️️ Reply to an image.';
  let img = await q.download();
  let url = await uploadImage(img);

  try {
    const anime = `https://api.lolhuman.xyz/api/removebg?apikey=${lolkeysapi}&img=${url}`;
    await conn.sendFile(m.chat, anime, 'error.jpg', null, m);
  } catch (e) {
    throw '*[❗] Error, Our servers are down*';
  }
};
handler.help = ['removebg'];
handler.tags = ['tools'];
handler.command = /^(removebg|toanime)$/i;
export default handler;