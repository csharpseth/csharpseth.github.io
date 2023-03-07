/** @format */

import { QuarterPageSpacerComponent } from '../../components/PageSpacerComponent'
import ProjectPageComponent from '../../components/ProjectPageComponent'

export default function SentimentRecognitionPage() {
	return (
		<ProjectPageComponent>
			<img
				className="banner"
				src="/sentiment-recognition-banner.webp"
				alt="Title: Sentiment Recognition"
			/>
			<h1>Introduction:</h1>
			<p className="paragraph">
				After seeing all of the amazing AI projects going around
				recently, I decided to go about creating my own. Out of the
				myriad of implementations for AI, I went with Computer Vision.
			</p>
			<p className="paragraph">
				If you don't already know what Computer Vision is I will give
				you a brief description. Essentially it is when an AI model is
				used to analyze a given image, video, or live feed against a
				training set. This is used to recognize patterns in a picture or
				frame like faces or objects.
			</p>
			<h2>The Problem:</h2>
			<p className="paragraph">
				When browsing social media, like a good consumer, I find myself
				straining to hit the like button and opt to rather not interact
				at all. Some people get smaller phones to make the long
				straining reach of their thumbs just a little less
				uncomfortable.
			</p>
			<p className="paragraph">
				However, this is a hardware solution and out reach for most. It
				would be nice if there was a way to like or dislike a post
				without having to do anything at all.
			</p>
			<h2>The Solution:</h2>
			<p className="paragraph">
				AI, this is how most problems are solved today, and this project
				is no different. I will take an AI library(OpenCV) and train a
				model to recognize the sentiment of my face. This model will use
				a live feed from my webcam, sample the frames, make a prediction
				of my current facial expression, and output a final guess.
			</p>
			<h1>Implementation:</h1>
			<p className="paragraph">
				To create this project I had made a few priorities. Since this
				is primarily a demonstration of AI I decided to focus on that
				aspect and take a few shortcuts with the website.
				{/* <ul>
                    <li><a href="https://github.com/opencv/opencv">OpenCV</a></li>
                    <li><a href="https://expressjs.com/">NodeJs/Express</a></li>
                    <li><a href="https://www.youtube.com/watch?v=oXlwWbU8l2o&t=9494s">OpenCV Course</a></li>
                </ul> */}
			</p>
			<h2>AI Training</h2>
			<p className="paragraph">
				I started by creating an OpenCV project in Python. Then created
				a basic facial detection program. Using my webcam, I was able to
				detect and crop my face out of each frame. I used this cropped
				region to train my model.
			</p>
			<p className="paragraph">
				Training the model was simple but required me to get a lot of
				training data. Since I did not have a computer capable of
				training for multiple users, I settled on training it on me
				exclusively. This required me to take roughly one thousand
				pictures of myself for each categorie. Of which, there are only
				three: Positive, Negative, and Neutral.
			</p>
			<p className="paragraph">
				The training process used OpenCV's built in facial recognition.
				This lead to an accuracy of about 60%. To remedy this I sampled
				over multiple frames and averaged the predictions based on their
				weight. The weights would prioritized non-neutral predictions.
			</p>
			<p className="paragraph">
				With the predictions averaged the accuracy was bumped to an
				astounding 70%. This was good enough to continue testing.
			</p>
			<h2>Interface</h2>
			<p className="paragraph">
				Next, I created a website to interface with the AI model. I used
				an Express API to host the website, which looks like this:
			</p>
			<img
				className="screenshot"
				src="/pho-instagram-bigmac.webp"
				alt=""
			/>
			<p className="paragraph">
				It prompts you with random TikToks and allows them to play
				through. The remaining time is indicated by the progress bar.
				When the time run out, or if you click the <i>Like</i>/
				<i>Dislike</i> buttons, it prompts you with the next post.
			</p>
			<p className="paragraph">
				Finally, I merged the two components(AI Model and Website) into
				one functioning system. I simply added a POST route on my
				Express server which needed two parameters. First a boolean of
				whether there was even a face present, and secondly a number
				correlating to one of the three prediction categories.
			</p>
			<p className="paragraph">
				All I had to do was send a POST request from my python
				application to my Rest API.
			</p>
			<p className="paragraph"></p>
			<QuarterPageSpacerComponent />
		</ProjectPageComponent>
	)
}
