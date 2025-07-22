# Telegram WebApp Chat Example

This repository contains a minimal Telegram mini-application built with the Telegram WebApp SDK and a simple Node.js backend.

## Features
- Connects to Telegram WebApp and adapts to light/dark themes automatically.
- Handles standard events (`ready`, `expand`, `close`, `themeChanged`).
- Simple chat interface that saves messages during the session.
- Greets users with a native Telegram popup using WebApp API 9.1.
- Backend written in Node.js using Express. If `BOT_TOKEN` and `CHAT_ID` environment variables are provided, messages are also forwarded to the specified Telegram chat.

## Running locally
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   BOT_TOKEN=YOUR_TOKEN CHAT_ID=CHAT_ID npm start
   ```
3. Serve the `index.html` through the server and open it via Telegram using `/setwebapp` in BotFather.

The project can also be deployed to services like Vercel or GitHub Pages.
