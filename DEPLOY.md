# Deployment Guide for Telegram Mini App

This repository contains a small Node.js server and front-end files. Follow these steps to run it locally or deploy it to a hosting platform.

## Prerequisites
- Node.js 16 or newer
- A Telegram bot token (`BOT_TOKEN`)
- Optionally, a chat ID (`CHAT_ID`) if you want to forward messages to a Telegram chat

## Local setup
```bash
# Install dependencies
npm install

# Start the server
BOT_TOKEN=YOUR_TOKEN CHAT_ID=YOUR_CHAT_ID npm start
```
The app will run on `http://localhost:3000`. Use BotFather's `/setwebapp` command to link `index.html` to your bot for testing.

## Deploying
1. Push this repository to your preferred hosting service (Heroku, Render, Vercel, etc.).
2. Set the environment variables `BOT_TOKEN` and `CHAT_ID` in the platform's dashboard.
3. Configure the platform to run `npm start`.
4. Point your bot's Web App URL to the deployed address using `/setwebapp` in BotFather.

Once deployed, users can open the bot and access the mini app directly.
