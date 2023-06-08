## Table of contents

- [Installation and usage](#Installation)
- [Screenshots](#Screenshots)
- [Technologies](#Technologies)
- [Features](#Features)

# Spotify Clone

[Check the project online](https://spotify-web-player-sandy.vercel.app/)

Spotify Clone created to earn experience in using Next.js and NextAuth, Additionally I decided to add some extra features. You need spotify account to use most of the feature and Premium Spotify account to use web playback you also need to be added to spotify dashbord which I can't do to more than 20 people. You can still check online version with provided demo login and password

## Features

- Switchable light mode
- Most of spotify features
- Web Playback for premium users
- Old Spotify layout
- (...in progress) Track and Playlists analazyer
- (...in progress) custom Playlist and Track recomender based on user options

## Technologies

- React
- Typescript
- Next.js
- NextAuth
- Tailwind
- Daisyui

## Screenshots

![Screenshot 2023-06-08 at 11-45-55 Discofy](https://github.com/Predakor/spotify-web-player/assets/86599904/091504a2-a4dc-4ddc-8cb5-0087658a7d53)

## Installation

Clone the project

```bash
  git clone https://github.com/Predakor/spotify-web-player
```

Go to the project directory

```bash
  cd spotify-web-player
```

Install dependencies

```bash
  pnpm install
```

Login to Spotify and create new Project

```bash
  https://developer.spotify.com/dashboard
```

Create .env.local file with the following structure

```bash
  CLIENT_ID = clientIdFromSpotifyDashbord
  CLIENT_SECRET = clientSecretFromSpotifyDashbord
  NEXTAUTH_URL = http://localhost:3000
  NEXTAUTH_SECRET = optionalValueForHashing
```

Do the same for the server variable

Start the server

```bash
  npm run dev
```
