interface Project {
    title: string
    body: string
    backgroundImg: string,
    backgroundGif: string
    sourceLink: string,
    liveLink: string,
    pageLink: string
}

export const Projects: Project[] = [
    {
        title: "AI Sentiment Recognition",
        body:"This application prompts you with a randomly selected social media post. Then, using a webcam, looks at your face, determines how you reacted, and interacts with the post accordingly.",
        backgroundImg: "/sentiment-recognition.webp",
        backgroundGif: "/sentiment-recognition.mp4",
        sourceLink: "https://github.com/csharpseth/expression-analysis",
        liveLink: "",
        pageLink: "/ai-sentiment-recognition"
    },
    {
        title: "Distance Sorter 9000",
        body:"A website where you can plot positions. Then, calculate and sort the positions by distance to the origin. Choose from multiple sorting algorithms and drawing methods, and even read brief descriptions of the algorithm technique.",
        backgroundImg: "/distance-sorter.webp",
        backgroundGif: "/distance-sorter.mp4",
        sourceLink: "https://github.com/csharpseth/distance-sorter",
        liveLink: "https://csharpseth.github.io/distance-sorter/",
        pageLink: "/distance-sorter"
    },
    {
        title: "Triva - The Trivia App (WIP)",
        body:"A Kahoot clone, but better! Built with Express, React, and React Native. Functions similar to kahoot. Make an account, create a game, invite your friends, and quiz away on some randomly selected questions.",
        backgroundImg: "/triva.webp",
        backgroundGif: "/triva.mp4",
        sourceLink: "https://github.com/csharpseth/triva-the-trivia-app",
        liveLink: "",
        pageLink: "/triva"
    },
    {
        title: "ToTo - The ToDo App",
        body:"Toto is a ToDo app created with React Native and JavaScript. It offers user login and authentication. Additionally I used MongoDB for my database.",
        backgroundImg: "/toto.webp",
        backgroundGif: "/toto.mp4",
        sourceLink: "https://github.com/csharpseth/toto-todo-app",
        liveLink: "",
        pageLink: "/toto"
    },
    {
        title: "Calculator App",
        body:"A basic calculator built with React Native and JavaScript. Can Add, Subtract, Multiply, Divide, Convert to Percentage, and more.",
        backgroundImg: "/calculator.webp",
        backgroundGif: "/calculator.mp4",
        sourceLink: "https://github.com/csharpseth/react-native-calculator",
        liveLink: "",
        pageLink: ""
    },
]