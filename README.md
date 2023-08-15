# Tokopedia Play Clone UI

An application that showed list of videos and detail of the video, built with React, JavaScript, MaterialUI, and Vite.  
This project already deployed at Vercel. [https://tokopedia-play-clone-eosin.vercel.app/](https://tokopedia-play-clone-eosin.vercel.app/)

## Project Screen Shot(s)
#### HomePage
![HomePage](https://github.com/adanngrha/tokopedia-play-clone/blob/main/pics/homepage.png?raw=true)
#### Video Detail Page
![VideoDetailPage](https://github.com/adanngrha/tokopedia-play-clone/blob/main/pics/videodetailpage1.png?raw=true)

## Installation and Setup

To get started, clone this repository and make sure you have `node.js` and `npm` installed globally on your machine. Also `MongoDB` if you want to run this project locally. Then, navigate to the cloned repository folder in your terminal and run `npm install`.

Add a `.env` file before running the project, create a new file called `.env` in the root directory of the project. Then, add any environment variables you need, using the `KEY=VALUE` format. For example:

```
NODE_ENV=development // can be changed into production
PORT=3080 // port you want to use
MONGO_CONNECTION_STRING_PROD={copy your mongodb atlas connection string here}
MONGO_CONNECTION_STRING_DEV=mongodb://localhost:27017/tokopedia_play_clone
SECRET_KEY='{add your secret key here, it can be anything}'

```

To run the test suite, use the command `npm run dev`.

To start the server, use the command `npm run start`.

To access the app, open your browser and go to `localhost:5173/`.
