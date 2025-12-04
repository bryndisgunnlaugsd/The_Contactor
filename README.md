# The Contactor - Contact Management App

The Contactor is a contact management application built with React Native and Expo. The application provides a simple and intuitive interface for managing contacts with features including OS contact import, image capture, and phone call functionality.

This application was developed and tested for iOS devices.

**Note:** Extra Requirements are stated at the bottom

---

## Required Software

**Note:** This app is designed and tested for iOS. The instructions below are for macOS. If you're using Windows or Linux, you can still run the app using the Expo Go app on a physical device, but iOS Simulator will not be available.

### For macOS users:

1. **Node.js** (v14 or newer) - [Download here](https://nodejs.org/)
2. **Xcode** - Install from the Mac App Store (required for iOS Simulator)
3. **Expo CLI** - Install by running:
   ```bash
   npm install -g expo-cli
   ```
   
After installing Xcode, open it once and accept the license agreement.

### For Windows/Linux users:

1. **Node.js** (v14 or newer) - [Download here](https://nodejs.org/)
2. **Expo CLI** - Install by running:
   ```bash
   npm install -g expo-cli
   ```
3. **Physical iPhone** - You'll need an iPhone with Expo Go installed to test the app (iOS Simulator only works on macOS)

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bryndisgunnlaugsd/The_Contactor
   cd The_Contactor
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   This downloads all required packages.

---

## Running the App

### On iOS Simulator (macOS only)

Start the development server and launch the simulator:
```bash
npx expo start --ios
```

Or start the server first and then press `i`:
```bash
npx expo start
# Press 'i' when prompted
```

the first launch could take few minutes :)

### On a Physical iPhone (Works on any OS)

1. Install "Expo Go" from the App Store on your iPhone
2. Start the development server:
   ```bash
   npx expo start
   ```
3. Scan the QR code with your iPhone's Camera app
4. The app will open in Expo Go

*Note:* *Your computer and iPhone must be on the same Wi-Fi network.*

---

## Features

eftir að bæta inn hér

---

## Common Commands

```bash
# Start development server
npx expo start

# Start with cleared cache (fixes most issues)
npx expo start -c

# Open in iOS Simulator
npx expo start --ios

# Install new packages
npm install 
```

---

## Troubleshooting

### Simulator won't open
- Make sure Xcode is installed
- Open Xcode → Preferences → Locations
- Set "Command Line Tools" to the latest version

### App won't load on iPhone
- Ensure both devices are on the same Wi-Fi
- Restart the development server
- Try: `npx expo start --tunnel`

---

**Platform:** iOS  
**Designed for:** macOS (but can run on Windows/Linux using physical device)  
**Language:** TypeScript  
**Framework:** React Native with Expo

---

# Extra Requirements for Contactor

Beyond the core functionality requirements, the following additional features have been implemented

---

## 1
