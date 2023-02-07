import { useState } from 'react';
import '../styles/Navbar.scss'
import { Link } from './UtilityComponents';


function NavbarItem(props: any) {
    const { link, value, onClick } = props

    return (
        <Link to={link} onClick={() => {if(onClick) onClick()}}>
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
            <NavbarItem onClick={() => setOpen(false)} link="about" value="About" />
            <NavbarItem onClick={() => setOpen(false)} link="projects" value="Projects" />
            <NavbarItem onClick={() => setOpen(false)} link="" value="Articles" />
            <NavbarItem onClick={() => setOpen(false)} link="" value="Contact" />
        </nav>
        </>
    )
}