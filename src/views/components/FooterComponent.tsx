/** @format */

import { useContext } from 'react';
import { DisplayContext } from '../../contexts/DisplayContext';
import { Clamp01, RelativeRemap } from '../../MyMath';

import '../../styles/Footer.scss';

export default function FooterComponent() {
	const { scrollPercent, windowWidth } = useContext(DisplayContext);

	return (
		<footer
			className={scrollPercent >= 0.96 ? 'visible' : ''}
			style={{
				bottom:
					(1 - Clamp01(RelativeRemap(scrollPercent, 0.95, 1))) * -200,
				width: windowWidth,
				height: 80,
			}}
		>
			<div className="socials">
				<a
					className="link"
					href="https://www.linkedin.com/in/sethhamm"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						className="icon"
						src="/linkedin.png"
						alt="linkedin"
						width="512"
						height="512"
					/>
				</a>
				<a
					className="link"
					href="https://github.com/csharpseth"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						className="icon"
						src="/github.png"
						alt="github"
						width="512"
						height="512"
					/>
				</a>
				<a
					className="link"
					href="https://twitter.com/sethiesparkles"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						className="icon"
						src="/twitter.png"
						alt="twitter"
						width="512"
						height="512"
					/>
				</a>
				<a
					className="link"
					href="https://www.youtube.com/@codewithseth"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						className="icon"
						src="/youtube.png"
						alt="youtube"
						width="512"
						height="512"
					/>
				</a>
			</div>
			<span>&copy; Seth Hamm 2023</span>
		</footer>
	);
}
