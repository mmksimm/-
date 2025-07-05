const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/..'));

let mining = false;
let balance = 0;
let energy = 100;
let blocks = [];

function mineBlock() {
  if (!mining) return;
  const reward = +(Math.random() * 0.005).toFixed(4);
  balance += reward;
  energy = Math.max(0, energy - 1);
  const id = blocks.length + 1;
  const hash = Math.random().toString(16).substring(2, 10).padStart(8, '0');
  blocks.unshift({ id, reward, hash, created: new Date().toISOString() });
  if (blocks.length > 10) blocks.pop();
  if (energy > 0) setTimeout(mineBlock, 1000);
}

app.post('/start', (req, res) => {
  if (!mining) {
    mining = true;
    energy = 100;
    mineBlock();
  }
  res.json({ mining });
});

app.post('/stop', (req, res) => {
  mining = false;
  res.json({ mining });
});

app.get('/status', (req, res) => {
  res.json({
    mining,
    balance: balance.toFixed(4),
    energy,
    blocks
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
