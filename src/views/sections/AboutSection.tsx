/** @format */

import ScrollSectionComponent from '../components/ScrollSectionComponent';

import { About } from '../../Data';
import '../../styles/AboutSection.scss';
import { useContext, useEffect } from 'react';
import { DisplayContext } from '../../contexts/DisplayContext';
import { RelativeRemap } from '../../MyMath';

export default function AboutSection() {
	const { scrollPercent, SetLandingPlayed, landingPlayed } =
		useContext(DisplayContext);

	useEffect(() => {
		setTimeout(SetLandingPlayed, 2000);
	}, [SetLandingPlayed]);

	return (
		<ScrollSectionComponent id="about">
			<div
				className={`profile ${landingPlayed ? '' : 'play'}`}
				style={{
					opacity: 1 - RelativeRemap(scrollPercent, 0.05, 0.15),
				}}
			>
				<div className="profile-media">
					<img
						className="profile__img"
						src="/me.webp"
						alt="profile"
						width="1000"
						height="1000"
					/>
					<h2 className="name">Seth Hamm</h2>
					<span className="location">
						<img
							src="/icon_location.png"
							alt=""
							width="319"
							height="512"
						/>
						Wichita, KS
					</span>
				</div>
				<div className="info">
					<h1>{About.title}</h1>
					<div className="bio">
						<h2 className="hook">
							Full-Stack <b>Web</b> and <b>Mobile</b> Developer.
						</h2>

						{/* <p className="subtext">
                        I build efficient and responsive user interfaces. My communication skills and ability to collaborate effectively make me a valuable team member for any development project.
                        </p> */}

						{/* <ul className="tool-list">
                            <li className="tool">
                                <span className="title">NodeJS</span>
                                <img className="color" src="/tool-logo-node-color.png" alt="" />
                                <img className="white" src="/tool-logo-node-white.png" alt="" />
                            </li>
                            <li className="tool">
                                <span className="title">ReactJS</span>
                                <img className="color" src="/tool-logo-react-color.png" alt="" />
                                <img className="white" src="/tool-logo-react-white.png" alt="" />
                            </li>
                            <li className="tool">
                                <span className="title">TypeScript</span>
                                <img className="color" src="/tool-logo-typescript-color.png" alt="" />
                                <img className="white" src="/tool-logo-typescript-white.png" alt="" />
                            </li>
                            <li className="tool">
                                <span className="title">Sass</span>
                                <img className="color" src="/tool-logo-sass-color.png" alt="" />
                                <img className="white" src="/tool-logo-sass-white.png" alt="" />
                            </li>
                        </ul> */}
					</div>
				</div>

				<div
					className="links"
					style={{
						opacity: 1 - RelativeRemap(scrollPercent, 0, 0.2),
					}}
				>
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
			</div>
		</ScrollSectionComponent>
	);
}
