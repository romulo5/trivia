## Trivia Game Code Challenge

Trivia is a React app built for g2i's coding challenge. This project was built using typescript, redux for state management, react-router for navigation and tailwindcss as a utility-first CSS framework. The project is organized by features, with a clear separation of UI and business logic. 

#####Folder Structure

src/
&emsp; |- api ->  api client
&emsp; |- app -> app component, redux store
&emsp; |- containers -> Layout component
&emsp; |- features
&emsp; &emsp; |- game -> game redux slice and related component
&emsp; &emsp; |- settings -> settings redux slice and related component
&emsp; |- helpers 
&emsp; |- pages -> all routes related components
&emsp; |- styles -> tailwindcss config
&emsp; | -types 


#### Project setup

##### dev
- yarn install
- yarn start

##### prod

- yarn build
- npx serve build


#### Stack
* Typescript 
* React
* Redux
* React-router
* TailwindCSS

2020 - Romulo Melo 