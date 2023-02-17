import { useContext } from 'react';
import { DisplayContext } from '../../contexts/DisplayContext';
import { Clamp01, RelativeRemap } from '../../MyMath';

import '../../styles/Footer.scss'

export default function FooterComponent() {
    
    const { scrollPercent, windowWidth } = useContext(DisplayContext)

    return (
        <footer
            className={scrollPercent >= 0.96 ? "visible":""}
            style={{
                bottom: ((1 - Clamp01(RelativeRemap(scrollPercent, 0.95, 1))) * -200),
                width: (windowWidth),
                height: 80
            }}
        >
            <div className="socials">
                <a className="link" href="#">
                    <img className="icon" src="/linkedin.png" alt="" />
                </a>
                <a className="link" href="#">
                    <img className="icon" src="/github.png" alt="" />
                </a>
                <a className="link" href="#">
                    <img className="icon" src="/twitter.png" alt="" />
                </a>
                <a className="link" href="#">
                    <img className="icon" src="/youtube.png" alt="" />
                </a>
            </div>
            <span>&copy; Seth Hamm 2023</span>
        </footer>
    )
}