#!/bin/bash

# Correct file location
HTML_FILE="/home/mbilal71/projects/bmg/BM_parchment.html"
PROJECT_DIR="/home/mbilal71/projects/bmg"

# Colors
RED="\e[31m"
GREEN="\e[32m"
YELLOW="\e[33m"
BLUE="\e[34m"
CYAN="\e[36m"
RESET="\e[0m"

# Animated Loading
loading() {
    echo -ne "${CYAN}Loading${RESET}"
    for i in {1..3}; do
        echo -ne "."
        sleep 0.2
    done
    echo ""
}

# Banner
banner() {
clear
echo -e "${YELLOW}"
cat << "EOF"
██████╗ ███╗   ███╗ ██████╗ 
██╔══██╗████╗ ████║██╔════╝ 
██████╔╝██╔████╔██║██║  ███╗
██╔══██╗██║╚██╔╝██║██║   ██║
██████╔╝██║ ╚═╝ ██║╚██████╔╝
╚═════╝ ╚═╝     ╚═╝ ╚═════╝  
   B  &  M  —  HTML Launcher
EOF
echo -e "${RESET}"
}

# MENU LOOP
while true; do
    banner
    echo -e "${CYAN}1)${RESET} Open BM_parchment.html"
    echo -e "${CYAN}2)${RESET} Show file location"
    echo -e "${CYAN}3)${RESET} Edit file (nano)"
    echo -e "${CYAN}4)${RESET} Reload menu"
    echo -e "${CYAN}5)${RESET} Exit"
    echo ""
    read -p "Select an option: " opt

    case $opt in

        1)
            if [ ! -f "$HTML_FILE" ]; then
                echo -e "${RED}Error:${RESET} $HTML_FILE not found!"
                read -p "Press Enter..."
                continue
            fi
            
            loading
            echo -e "${GREEN}Opening BM_parchment.html...${RESET}"

            if command -v xdg-open >/dev/null 2>&1; then
                xdg-open "$HTML_FILE"
            elif command -v firefox >/dev/null 2>&1; then
                firefox "$HTML_FILE"
            elif command -v chromium >/dev/null 2>&1; then
                chromium "$HTML_FILE"
            else
                echo -e "${RED}No browser found.${RESET}"
            fi

            read -p "Press Enter..."
            ;;

        2)
            echo -e "${GREEN}File Path:${RESET} $HTML_FILE"
            ls -lh "$HTML_FILE" 2>/dev/null
            read -p "Press Enter..."
            ;;

        3)
            if [ -f "$HTML_FILE" ]; then
                echo -e "${BLUE}Opening nano...${RESET}"
                sleep 0.4
                nano "$HTML_FILE"
            else
                echo -e "${RED}BM_parchment.html not found!${RESET}"
                sleep 1
            fi
            ;;

        4)
            echo -e "${YELLOW}Refreshing UI...${RESET}"
            sleep 0.5
            ;;

        5)
            echo -e "${GREEN}Goodbye, chief!${RESET}"
            exit 0
            ;;

        *)
            echo -e "${RED}Invalid choice!${RESET}"
            sleep 0.5
            ;;
    esac
done
