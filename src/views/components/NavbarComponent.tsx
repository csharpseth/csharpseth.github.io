import { useState } from 'react';
import '../../styles/Navbar.scss'
import HamburgerButtonComponent from './HamburgerButtonComponent';
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
        <HamburgerButtonComponent value={open} onChange={(open: boolean) => setOpen(open)} />

        <nav className="navbar" id={open ? "open":""}>
            <img src="/logo.png" alt="Website Logo" />
            <NavbarItem to="about" link="/" value="About" />
            <NavbarItem to="projects" link="/" value="Projects" />
            <NavbarItem to="articles" link="/" value="Articles" />
            <NavbarItem to="contact" link="/" value="Contact" />
        </nav>
        </>
    )
}