import { useRef, useState } from 'react';
import { useInView } from '../../hooks/VisibilityHooks';
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

    const headerRef = useRef(null)
    const visible = useInView(headerRef, 0.2)

    return (
        <>
        <HamburgerButtonComponent value={open} onChange={(open: boolean) => setOpen(open)} />
        <div className={`navbar-header ${visible ? "visible":""}`} ref={headerRef}>
            <img src="/logo.png" alt="Website Logo" />
        </div>
        <nav className={`navbar ${visible ? "":"undocked"}`} id={open ? "open":""}>
            <NavbarItem link="/" value="Home" />
            <NavbarItem link="/" value="Projects" />
            <NavbarItem link="/" value="Articles" />
            <NavbarItem link="/" value="Contact" />
        </nav>
        </>
    )
}