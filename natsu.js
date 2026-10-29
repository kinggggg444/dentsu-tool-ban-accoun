#!/usr/bin/env node
// DENTSU BAN TOOL - natsu.js
// by NatsuTech's | Alva'sDev

const readline = require('readline');

const C = {
  reset: '\x1b[0m',
  red: '\x1b[1;31m',
  green: '\x1b[1;32m',
  yellow: '\x1b[1;33m',
  blue: '\x1b[1;34m',
  magenta: '\x1b[1;35m',
  cyan: '\x1b[1;36m',
  white: '\x1b[1;37m',
  dim: '\x1b[2m',
  clear: '\x1b[2J\x1b[H'
};

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise((res) => rl.question(q, res));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const clear = () => process.stdout.write(C.clear);

// Générateurs
const randIp = () => `${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}`;
const randHex = (len) => Array.from({length: len}, () => Math.floor(Math.random()*16).toString(16)).join('').toUpperCase();
const randPort = () => Math.floor(Math.random() * 65535);

let stopLoading = false;

function banner() {
  clear();
  console.log(C.red + `
  ██████╗ ███████╗███╗   ██╗████████╗███████╗██╗   ██╗
  ██╔══██╗██╔════╝████╗  ██║╚══██╔══╝██╔════╝██║   ██║
  ██║  ██║█████╗  ██╔██╗ ██║   ██║   ███████╗██║   ██║
  ██║  ██║██╔══╝  ██║╚██╗██║   ██║   ╚════██║██║   ██║
  ██████╔╝███████╗██║ ╚████║   ██║   ███████║╚██████╔╝
  ╚═════╝ ╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝ ╚═════╝
  ` + C.reset);
  console.log(C.cyan + `               DENTSU BAN TOOL  |  Alva'sDev` + C.reset);
  console.log(C.red + `               [ SYSTEM ARMED - RUNNING ]` + C.reset + '\n');
}

async function menu() {
  stopLoading = false;
  banner();
  console.log(C.white + '  ┌─────────────────────────────────────┐' + C.reset);
  console.log(C.white + '  │  ' + C.red + '[ 1 ]' + C.white + ' - Ban Telegram Account ' + C.red + '📵' + C.white + '     │' + C.reset);
  console.log(C.white + '  │  ' + C.red + '[ 2 ]' + C.white + ' - Ban WhatsApp Account ' + C.red + '😈' + C.white + '     │' + C.reset);
  console.log(C.white + '  │  ' + C.red + '[ 3 ]' + C.white + ' - Spam WhatsApp ' + C.red + '🎭' + C.white + '            │' + C.reset);
  console.log(C.white + '  │  ' + C.red + '[ 4 ]' + C.white + ' - Check Ban Status ' + C.green + '🟢' + C.white + '        │' + C.reset);
  console.log(C.white + '  │  ' + C.red + '[ 5 ]' + C.white + ' - Dev Helper ' + C.red + '📦' + C.white + '              │' + C.reset);
  console.log(C.white + '  │  ' + C.red + '[ 00 ]' + C.white + ' - Back / Socials ' + C.red + '🔙' + C.white + '        │' + C.reset);
  console.log(C.white + '  └─────────────────────────────────────┘' + C.reset + '\n');

  const choice = (await ask(C.cyan + "  Dentsu >> " + C.reset)).trim();
  switch (choice) {
    case '1': return banTelegram();
    case '2': return banWhatsApp();
    case '3': return spamWhatsApp();
    case '4': return checkStatus();
    case '5': return devHelper();
    case '00': case '0': return socials();
    default:
      console.log(C.red + '\n  [!] Invalid choice.\n' + C.reset);
      await sleep(1000);
      return menu();
  }
}

async function progressBar(label, duration) {
  const width = 30;
  const steps = 30;
  const interval = duration / steps;
  process.stdout.write(C.yellow + `  [-] ${label} ` + C.reset);
  for (let i = 0; i <= width; i++) {
    const filled = '█'.repeat(i);
    const empty = '░'.repeat(width - i);
    process.stdout.write(`\r  ${C.yellow}[-] ${label} [${C.red}${filled}${C.dim}${empty}${C.reset}${C.yellow}] ${Math.round((i/width)*100)}%${C.reset}`);
    await sleep(interval);
  }
  process.stdout.write(C.green + ' [DONE]\n' + C.reset);
}

async function radarScan(target, duration) {
  const frames = ['|', '/', '-', '\\'];
  const end = Date.now() + duration;
  let i = 0;
  process.stdout.write(C.red + `  [~] Scanning target ${target} ` + C.reset);
  while (Date.now() < end) {
    process.stdout.write(`\r  ${C.red}[~] Scanning target ${target} [${frames[i % frames.length]}] ${C.dim}BYPASSING FIREWALLS...${C.reset}`);
    i++;
    await sleep(100);
  }
  process.stdout.write(`\r  ${C.green}[+] Target Locked: ${target}               \n` + C.reset);
}

async function banTelegram() {
  banner();
  console.log(C.magenta + '  === BAN TELEGRAM ACCOUNT ===\n' + C.reset);
  const id = (await ask('  Enter Telegram ID: ')).trim();
  if (!id) return banTelegram();
  
  clear();
  console.log(C.red + `  Target: ${id} | STATUS: INITIATING ATTACK...\n` + C.reset);
  
  await radarScan(id, 2000);
  await progressBar('Connecting to Telegram DC', 1500);
  await progressBar('Bypassing API Limits', 1200);
  await progressBar('Injecting Payload ' + randHex(8), 2000);
  await progressBar('Flooding Abuse Reports', 2500);
  await progressBar('Executing Ban Sequence', 1800);

  console.log('\n' + C.green + '  [✓] TELEGRAM ACCOUNT BANNED SUCCESSFULLY.' + C.reset);
  console.log(C.dim + `  Target: ${id} | Status: OFFLINE` + C.reset);
  
  console.log('\n' + C.dim + '  Press Enter to return...' + C.reset);
  await ask('');
  return menu();
}

async function banWhatsApp() {
  banner();
  console.log(C.red + '  === BAN WHATSAPP ACCOUNT ===\n' + C.reset);
  const num = (await ask('  Enter number (ex: 242XXXXXXX): ')).trim();
  if (!num) return banWhatsApp();

  clear();
  await radarScan(num, 2000);
  await progressBar('Bypassing WA-Secure', 2000);
  
  clear();
  stopLoading = false;
  console.log(C.red + `  Target: ${num} | STATUS: INJECTING PAYLOAD...` + C.reset);
  console.log(C.red + `  [!] Tapez "00" et Entrée pour arrêter.\n` + C.reset);

  const stopListener = (input) => { if (input.trim() === '00') stopLoading = true; };
  rl.on('line', stopListener);

  let count = 0;
  while (!stopLoading) {
    count++;
    const lines = [
      `[${randIp()}:${randPort()}] Sending report #${count*13}... BYPASS WA-SECURE -> OK`,
      `[${randIp()}] Injecting TCP payload ${randHex(8)} -> SUCCESS`,
      `[${randIp()}] Exploiting zero-day CVE-2024-${Math.floor(Math.random()*9999)}...`,
      `[${randIp()}] Flooding WhatsApp servers with fake packets...`,
      `[${randIp()}] Spoofing MAC address to ${randHex(12)}...`,
      `[${randIp()}] Triggering account suspension protocol...`
    ];
    console.log(C.red + `  ${lines[Math.floor(Math.random() * lines.length)]}` + C.reset);
    await sleep(120); 

    if (count > 18) {
       clear();
       console.log(C.red + `  Target: ${num} | STATUS: INJECTING PAYLOAD...` + C.reset);
       console.log(C.red + `  [!] Tapez "00" et Entrée pour arrêter.\n` + C.reset);
       count = 0;
    }
  }

  rl.removeListener('line', stopListener);
  clear();
  return menu();
}

async function spamWhatsApp() {
  banner();
  console.log(C.blue + '  === SPAM WHATSAPP ===\n' + C.reset);
  const num = (await ask('  Enter number (ex: 242XXXXXXX): ')).trim();
  if (!num) return spamWhatsApp();

  clear();
  await radarScan(num, 1500);
  await progressBar('Establishing Proxy Chain', 1500);

  clear();
  stopLoading = false;
  console.log(C.blue + `  Target: ${num} | STATUS: MASS SPAMMING...` + C.reset);
  console.log(C.blue + `  [!] Tapez "00" et Entrée pour arrêter.\n` + C.reset);

  const stopListener = (input) => { if (input.trim() === '00') stopLoading = true; };
  rl.on('line', stopListener);

  let count = 0;
  while (!stopLoading) {
    count++;
    const lines = [
      `[${randIp()}] Sending payload #${count*47}... DELIVERED`,
      `[${randIp()}] Connecting to WA gateway...`,
      `[${randIp()}] Bypassing anti-spam filter... OK`,
      `[${randIp()}] Attaching media file ${randHex(6)}.mp4...`,
      `[${randIp()}] Message delivered to ${num}`
    ];
    console.log(C.blue + `  ${lines[Math.floor(Math.random() * lines.length)]}` + C.reset);
    await sleep(120); 

    if (count > 18) {
       clear();
       console.log(C.blue + `  Target: ${num} | STATUS: MASS SPAMMING...` + C.reset);
       console.log(C.blue + `  [!] Tapez "00" et Entrée pour arrêter.\n` + C.reset);
       count = 0;
    }
  }

  rl.removeListener('line', stopListener);
  clear();
  return menu();
}

async function checkStatus() {
  banner();
  console.log(C.green + '  === CHECK TARGET STATUS ===\n' + C.reset);
  const target = (await ask('  WhatsApp number or Telegram ID: ')).trim();
  if (!target) return checkStatus();

  clear();
  await radarScan(target, 1500);
  await progressBar('Querying Secure Database', 1200);
  await progressBar('Bypassing Firewall', 1000);
  
  const isActive = Math.random() > 0.5;
  console.log('\n  ---------------------------------');
  if (isActive) {
    console.log(C.green + `  TARGET : ${target}` + C.reset);
    console.log(C.green + `  STATUS : ACTIVE 🟢` + C.reset);
    console.log(C.green + `  SECURE : NO` + C.reset);
  } else {
    console.log(C.red + `  TARGET : ${target}` + C.reset);
    console.log(C.red + `  STATUS : BANNED 🔴` + C.reset);
    console.log(C.red + `  SECURE : LOCKED` + C.reset);
  }
  console.log('  ---------------------------------\n');
  
  await new Promise((resolve) => rl.question(C.dim + '  Press Enter to return...' + C.reset, resolve));
  return menu();
}

async function devHelper() {
  banner();
  console.log(C.yellow + '  === DEV HELPER ===\n' + C.reset);
  console.log(C.white + '  Commands:\n' + C.reset);
  console.log(C.cyan + '  node natsu.js   ' + C.dim + '-> Run tool' + C.reset);
  console.log(C.cyan + '  pkg update      ' + C.dim + '-> Update system' + C.reset);
  console.log(C.cyan + '  clear           ' + C.dim + '-> Clear screen' + C.reset);
  console.log('');
  await new Promise((resolve) => rl.question(C.dim + '  Press Enter to return...' + C.reset, resolve));
  return menu();
}

async function socials() {
  banner();
  console.log(C.cyan + "  === FOLLOW DENTSU ===" + C.reset);
  console.log(C.green + '  WhatsApp: ' + C.reset + 'https://whatsapp.com/channel/0029VbC1s7fFnSz1YhZYc01h');
  console.log(C.blue + '  Telegram: ' + C.reset + 'https://t.me/DPLOIEMENT_DUN_BOT2');
  console.log(C.blue + '  Telegram: ' + C.reset + 'https://t.me/NatsuetDentsu');
  console.log('');
  await new Promise((resolve) => rl.question(C.dim + '  Press Enter to return...' + C.reset, resolve));
  return menu();
}

process.on('SIGINT', () => {
  console.log(C.red + '\n\n  [x] Process killed. Exiting...\n' + C.reset);
  process.exit(0);
});

(async () => { await sleep(300); menu(); })();
