## Table of contents

- [Installation and usage](#general-info)
- [Technologies](#technologies)
- [Screenshots](#creenshots)
- [Features](#features)

# Spotify Clone

Spotify Clone created to earn experience in using Next.js and NextAuth. You need spotify account to use most of the feature and Premium Spotify account to use web playback you also need to be added to spotify dashbord which I can't do to more than 20 people. You can still check online version with provided demo login and password

## Demo

[Check the project online](https://predakor.github.io/typer)

## Installation

Clone the project

```bash
  git clone https://github.com/Predakor/Typer
```

Go to the project directory

```bash
  cd typer
```

Install dependencies

```bash
  npm install
```

Login to Spotify and create new Project

```bash
  git clone https://github.com/Predakor/Typer
```

Create .env.local file with the following structure

```bash
  NEXTAUTH_SECRET = optionalValueForHashing
  CLIENT_SECRET = spotifySecret
  CLIENT_ID = spotifySecret
  NEXTAUTH_URL = yourPageURL
```

Do the same for the server variable

Start the server

```bash
  npm run dev
```

## Technologies

- React
- Typescript
- Tailwind
- Daisyui
- Next.js
- NextAuth

## Screenshots

![App Screenshot](https://github.com/Predakor/Typer/assets/86599904/9ed3d278-a444-4ceb-aec7-b6f226bf5ee2)

## Features

- Switchable light mode 
- Most of spotify features
- Web Playback for premium users 
- Old Spotify layout
- (...in progress) Track and Playlists analazyer
- (...in progress) custom Playlist and Track recomender based on user options
