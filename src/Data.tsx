interface Project {
    title: string
    body: string
    backgroundImg: string,
    backgroundGif: string
    link: string,
    liveLink: string
}

export const Projects: Project[] = [
    {
        title: "AI Sentiment Recognition",
        body:"This application prompts you with a randomly selected social media post. Then, using a webcam, looks at your face, determines how you reacted, and interacts with the post accordingly.",
        backgroundImg: "/sentiment-recognition.png",
        backgroundGif: "/sentiment-recognition.gif",
        link: "https://github.com/csharpseth/expression-analysis",
        liveLink: ""
    },
    {
        title: "Distance Sorter 9000",
        body:"A website where you can plot positions. Then, calculate and sort the positions by distance to the origin. Choose from multiple sorting algorithms and drawing methods, and even read brief descriptions of the algorithm technique.",
        backgroundImg: "/distance-sorter.png",
        backgroundGif: "/distance-sorter.gif",
        link: "https://github.com/csharpseth/distance-sorter",
        liveLink: "https://csharpseth.github.io/distance-sorter/"
    },
    {
        title: "Triva - The Trivia App (WIP)",
        body:"A Kahoot clone, but better! Built with Express( Backend ), React( Frontend Web ), and React Native( Frontend App ). Functions similar to kahoot. Make an account, create a game, invite your friends, and quiz away on some randomly selected questions.",
        backgroundImg: "/triva.png",
        backgroundGif: "/triva.gif",
        link: "https://github.com/csharpseth/triva-the-trivia-app",
        liveLink: ""
    },
    {
        title: "ToTo - The ToDo App",
        body:"Toto is a ToDo app created with React Native and JavaScript. It offers user login and authentication. Additionally I used MongoDB for my database.",
        backgroundImg: "/toto.png",
        backgroundGif: "/toto.gif",
        link: "https://github.com/csharpseth/toto-todo-app",
        liveLink: ""
    },
    {
        title: "Calculator App",
        body:"A basic calculator built with React Native and JavaScript. Can Add, Subtract, Multiply, Divide, Convert to Percentage, and more.",
        backgroundImg: "/calculator.jpg",
        backgroundGif: "/calculator.gif",
        link: "https://github.com/csharpseth/react-native-calculator",
        liveLink: ""
    },
]