import express from 'express';
import cors from 'cors';
import { Telegraf } from 'telegraf';

const app = express();
app.use(cors());
app.use(express.json());

const BOT_TOKEN = process.env.BOT_TOKEN;
let bot;
if (BOT_TOKEN) {
  bot = new Telegraf(BOT_TOKEN);
}

const messages = [];

app.get('/api/messages', (req, res) => {
  res.json(messages);
});

app.post('/api/messages', async (req, res) => {
  const { text, user } = req.body;
  if (!text) return res.status(400).end();
  const msg = { text, user, time: Date.now() };
  messages.push(msg);
  if (bot) {
    try {
      await bot.telegram.sendMessage(process.env.CHAT_ID, `${user || 'anon'}: ${text}`);
    } catch (e) {
      console.error(e);
    }
  }
  res.json(msg);
});

app.use(express.static('.'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running on', PORT));
