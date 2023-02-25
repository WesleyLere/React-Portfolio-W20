import Spudget from '../assets/Spudget_.png'
import GameBoxD from '../assets/GameBoxd.png'
import time from '../assets/Sign_of_the_Times.png'
export const projects =[
    {
        link: "www.spudget.net",
        src: Spudget,
        name: "Spudget",
        description: `Spudget is a web app for a user who can sign up and view and adjust their budgets. The app can help the user keep track of their spendings. The app includes different graphs for the user to easily view their monthly spending. Spuddy, our potato mascot, will help guide you! This is my most recent project. It is created with the MERN stack, an OCR, and TailwindCSS`
      },
      {
        link: "https://gamebox.herokuapp.com/",
        src: GameBoxD,
        name: "GameBoxd",
        description: `An web app which user can create their own account (receive a welcome email send through Nodemailer), search for games from STEAM through a STEAM API. Then, inside the game details page, user can view the game's thumbnail, description, other users' reviews and rating fo the game. User can also give their own rating and review on the same page and if they like the game, it can be bookmark to their profile. This was created with handlebars/TailwindCSS, and MySQL`
      },
      {
        link: "https://nwsheats.github.io/Sign-of-the-Times/",
        src: time,
        name: "Sign of the Times",
        description: `An application that allows for the user to enter a date and see the horoscope for that day, and famous people born on the same day. Created through basic html a TailwindCSS CDN and a few api's help this beginner Github pages site was my first foray into web development`
      }
]