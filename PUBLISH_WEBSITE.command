#!/bin/bash
# CRESIGHT AGENCY - STATIC PUBLISH SCRIPT
# This script builds your website on your Mac so you can host it on cPanel easily.

echo "------------------------------------------------"
echo "CRESIGHT: PREPARING YOUR WEBSITE FOR CPANEL..."
echo "------------------------------------------------"

# 1. Install dependencies
echo "STEP 1: Installing engines (npm install)..."
npm install

# 2. Build the site
echo "STEP 2: Building your website (npm run build)..."
npm run build

echo "------------------------------------------------"
echo "SUCCESS! YOUR WEBSITE IS READY."
echo "------------------------------------------------"
echo "1. Look for a folder named 'out' in this directory."
echo "2. Upload everything INSIDE the 'out' folder to your cPanel 'public_html' folder."
echo "------------------------------------------------"
read -p "Press Enter to close this window..."
