<div align='center'>
  <img src='demo/logo.png' alt='Logo' width='500'>
</div>

# Curated YouTube music lessons

<br>
<br>
<div align='center' width='100%'>
  <img src='demo/01_musemasters-demo.gif' alt='MuseMasters demo' style='box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05); border-radius: 0.5rem'>
</div>

<br>
<br>
<details>
  <summary>Table of Contents</summary>

  - [Overview](#overview)
    - [The Details](#the-details)
    - [Built With](#built-with)
  - [Getting Started](#getting-started)
  - [Future Home of MuseMasters](#future-home-of-musemasters)
  - [Contact](#contact)
</details>

## Overview

YouTube is a rabbithole of videos. Learning to play an instrument on YouTube can be overwhelming.

Distracting, unrelated videos are right around the corner. MuseMasters curates music lesson videos based on custom search queries. Music lessons in one place, on a separate community-oriented platform to facilitate learning.

### The Details

Users are able to watch videos without the need to log in. In the future they will be able to like videos, comment on them, submit suggestions, as well as view their saved videos. However, to do so they *will* need to be logged in. User authentication was done using JSON Web Tokens (JWT), and bcrypt.js to encrypt passwords. All data is stored in MongoDB. Images are stored on Cloudinary.

### Built With

- [React.js](https://reactjs.org)
- [Node.js](https://nodejs.org)
- [Express.js](https://expressjs.com)
- [MongoDB](https://www.mongodb.com)
- [Mongoose](https://mongoosejs.com)
- [Video.js](https://video.js.com)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme)
- [bcrypt.js](https://github.com/dcodeIO/bcrypt.js#readme))
- [Axios](https://axios-http.com)
- [YouTube Data API v3](https://developers.google.com/youtube/v3/docs/)
- [Google APIs Node.js Client](https://github.com/googleapis/google-api-nodejs-client#readme)
- [styled-components](https://www.styled-components.com)

## Getting Started

1. `yarn install` or `npm install` from client _and_ server folders to install dependencies
2. `yarn start:client` from client folder to start frontend dev environment
3. `yarn start:server` from server folder to start backend dev environment

## Future Home of MuseMasters

[musemasters.org](https://musemasters.org)

## Contact

[Stan Clarke, Jr.](https://github.com/stanclarke-jr) - stan@stanclarkejr.ca



