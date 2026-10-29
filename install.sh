
---

## 📄 Fichier 2/4 : `install.sh`

```bash
#!/data/data/com.termux/files/usr/bin/bash

RED='\033[1;31m'
GREEN='\033[1;32m'
CYAN='\033[1;36m'
YELLOW='\033[1;33m'
RESET='\033[0m'

clear
echo -e "${RED}"
cat << "EOF"
  ███╗   ██╗ █████╗ ████████╗███████╗██╗   ██╗
  ████╗  ██║██╔══██╗╚══██╔══╝██╔════╝██║   ██║
  ██╔██╗ ██║███████║   ██║   ███████╗██║   ██║
  ██║╚██╗██║██╔══██║   ██║   ╚════██║██║   ██║
  ██║ ╚████║██║  ██║   ██║   ███████║╚██████╔╝
  ╚═╝  ╚═══╝╚═╝  ╚═╝   ╚═╝   ╚══════╝ ╚═════╝
EOF
echo -e "${RESET}"
echo -e "${CYAN}     NATSUTECH'S TOOL  |  Alva'sDev${RESET}"
echo -e "${YELLOW}     Terminal Simulation - 100% Educational${RESET}"
echo ""

echo -e "${GREEN}[*] Updating packages...${RESET}"
pkg update -y && pkg upgrade -y

echo -e "${GREEN}[*] Installing Node.js...${RESET}"
pkg install nodejs -y

echo -e "${GREEN}[*] Installation complete!${RESET}"
echo ""
echo -e "${CYAN}▶ Run with: ${YELLOW}node natsu.js${RESET}"
echo ""