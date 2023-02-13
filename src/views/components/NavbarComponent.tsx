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
            <NavbarItem link="/" value="About" />
            <NavbarItem link="/" value="Projects" />
            <NavbarItem link="/" value="Articles" />
            <NavbarItem link="/" value="Contact" />
        </nav>
        </>
    )
}