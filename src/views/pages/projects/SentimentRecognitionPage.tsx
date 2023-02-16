import { QuarterPageSpacerComponent } from "../../components/PageSpacerComponent";
import ProjectPageComponent from "../../components/ProjectPageComponent";

export default function SentimentRecognitionPage() {

    return (
        <ProjectPageComponent>
            <img className="banner" src="/sentiment-recognition-banner.webp" alt="Title: Sentiment Recognition" />
                <h1>Introduction</h1>
                <p className="paragraph">
                After seeing all of the amazing AI projects going around recently, I decided to go about creating my own. Out of the myriad of implementations for AI, I went with Computer Vision.
                </p>
                <p className="paragraph">
                If you don't already know what Computer Vision is I will give you a brief description. Essentially it is when an AI model is used to analyze a given image, video, or live feed against a training set. This is used to recognize patterns in a picture or frame like faces or objects.
                </p>
                <h1>The Problem</h1>
                <p className="paragraph">
                When browsing social media, like a good consumer, I find myself straining to hit the like button and opt to rather not interact at all. Some people get smaller phones to make the long straining reach of their thumbs just a little less uncomfortable.
                </p>
                <p className="paragraph">
                However, this is a hardware solution and out of the realm of possibility for most. It would be nice if there was a way to like or dislike a post without having to do anything at all.
                </p>
                <h1>Solution</h1>
                <p className="paragraph">
                AI, this is how most problems are solved today, and this project is no different. I will take an AI library(OpenCV) and train a model to recognize the sentiment of my face. This model will use a live feed from my webcam, sample the frames, make a prediction of my current facial expression, and output a final guess.
                </p>
                <h1>Implementation</h1>
                <p className="paragraph">
                As previously mentioned I will be using an AI library called <a href="#">OpenCV</a>. 
                </p>
                <h3>Training</h3>
                <p className="paragraph">
                    
                </p>
                <p className="paragraph">
                    
                </p>
                <p className="paragraph">
                    
                </p>
                <p className="paragraph">
                    
                </p>
                <QuarterPageSpacerComponent />
        </ProjectPageComponent>
    )
}