/** @format */

export const About = {
	title: "Hello! I'm Seth.",
	links: [
		{
			href: 'https://www.linkedin.com/in/sethhamm/',
			icon: '/linkedin.png',
			alt: 'linkedin',
		},
		{
			href: 'https://github.com/csharpseth',
			icon: '/github.png',
			alt: 'github',
		},
		{
			href: 'https://twitter.com/sethiesparkles',
			icon: '/twitter.png',
			alt: 'twitter',
		},
		{
			href: 'https://www.youtube.com/@codewithseth',
			icon: '/youtube.png',
			alt: 'youtube',
		},
	],
};

interface Project {
	title: string;
	previewText: string;
	coverImageURL: string;
	coverVideoURL: string;
	sourceLink: string;
	demoLink: string;
	pageLink: string;
}

export const Projects: Project[] = [
	{
		title: 'AI Sentiment Recognition',
		previewText:
			'This application prompts you with a randomly selected social media post. Then, using a webcam, looks at your face, determines how you reacted, and interacts with the post accordingly.',
		coverImageURL: '/sentiment-recognition.webp',
		coverVideoURL: '/sentiment-recognition.mp4',
		sourceLink: 'https://github.com/csharpseth/expression-analysis',
		demoLink: '',
		pageLink: '',
	},
	{
		title: 'Distance Sorter 9000',
		previewText:
			'A website where you can plot positions. Then, calculate and sort the positions by distance to the origin. Choose from multiple sorting algorithms and drawing methods, and even read brief descriptions of the algorithm technique.',
		coverImageURL: '/distance-sorter.webp',
		coverVideoURL: '/distance-sorter.mp4',
		sourceLink: 'https://github.com/csharpseth/distance-sorter',
		demoLink: 'https://csharpseth.github.io/distance-sorter/',
		pageLink: '',
	},
	{
		title: 'Triva - The Trivia App (WIP)',
		previewText:
			'A Kahoot clone, but better! Built with Express, React, and React Native. Functions similar to kahoot. Make an account, create a game, invite your friends, and quiz away on some randomly selected questions.',
		coverImageURL: '/triva.webp',
		coverVideoURL: '/triva.mp4',
		sourceLink: 'https://github.com/csharpseth/triva-the-trivia-app',
		demoLink: '',
		pageLink: '',
	},
];
