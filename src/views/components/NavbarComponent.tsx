import { useContext, useEffect, useRef, useState } from 'react';
import { DisplayContext } from '../../contexts/DisplayContext';
import { NavigationContext } from '../../contexts/NavigationContext';
import '../../styles/Navbar.scss'
import HamburgerButtonComponent from './HamburgerButtonComponent';
import { Link } from './UtilityComponents';


function NavbarItem(props: any) {
    const { link, to, value, onClick } = props
    const { currentPath } = useContext(NavigationContext)

    return (
        <Link to={to} link={link} onClick={() => {if(onClick) onClick()}} className={currentPath === link ? "active":""}>
            <span>{value}</span>
        </Link>
    )
}

export default function NavbarComponent() {
    const { scrollPercent, scrollHeight } = useContext(DisplayContext)
    const [open, setOpen] = useState(false)
    const [visible, setVisible] = useState<boolean>(true)

    const headerRef = useRef<HTMLDivElement>(null)

    function Close() {
        setOpen(false)
    }

    useEffect(() => {
        if(!headerRef.current) return

        const height = headerRef.current.offsetHeight
        const portion = height / scrollHeight
        setVisible(scrollPercent <= portion)
    }, [scrollPercent, headerRef])

    return (
        <>
        <HamburgerButtonComponent value={open} onChange={(open: boolean) => setOpen(open)} />
        <div className={`navbar-header ${visible ? "visible":""}`} ref={headerRef}>
            <img src="/logo.png" alt="Website Logo" />
        </div>
        <nav className={`navbar ${visible ? "":"undocked"}`} id={open ? "open":""}>
            <NavbarItem link="/" value="Home" onClick={Close} />
            <NavbarItem link="/projects" value="Projects" onClick={Close} />
            <NavbarItem link="/articles" value="Articles" onClick={Close} />
        </nav>
        </>
    )
}