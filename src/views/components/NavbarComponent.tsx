import { useState } from 'react';
import '../../styles/Navbar.scss'
import { Link } from './UtilityComponents';


function NavbarItem(props: any) {
    const { link, to, value, onClick } = props

    return (
        <Link to={to} link={link} onClick={() => {if(onClick) onClick()}}>
            <span>{value}</span>
            <div className="background" />
        </Link>
    )
}

export default function NavbarComponent() {
    const [open, setOpen] = useState(false)

    return (
        <>
        <div onClick={() => setOpen(!open)} className="menuButton" id={open ? "open":""}>
            <div id="bar"/>
            <div id="bar"/>
            <div id="bar"/>
        </div>

        <nav className="navbar" id={open ? "open":""}>
            <img src="/logo.png" alt="Website Logo" />
            <NavbarItem onClick={() => setOpen(false)} to="about" link="/" value="About" />
            <NavbarItem onClick={() => setOpen(false)} to="projects" link="/" value="Projects" />
            <NavbarItem onClick={() => setOpen(false)} to="articles" link="/" value="Articles" />
            <NavbarItem onClick={() => setOpen(false)} to="contact" link="/" value="Contact" />
        </nav>
        </>
    )
}