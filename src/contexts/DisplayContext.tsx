import React, { createContext, useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

export const DisplayContext = createContext({} as any)

export function DisplayProvider(props: any) {

    const [darkMode, setDarkMode] = useState<boolean>(false)
	const [width, setWidth] = useState<number>(window.innerWidth)
	const [isMobile, setIsMobile] = useState<boolean>(width <= 768)

    const container = useRef<Element | null>()

    function ToggleDarkMode(active: boolean) {
        setDarkMode(active)
    }

    useEffect(() => {
        function HandleWindowResize() {
            setWidth(window.innerWidth)
            setIsMobile(width <= 768)
        }

        window.addEventListener('resize', HandleWindowResize)
        return () => {
			window.removeEventListener('resize', HandleWindowResize)
        }


    }, [])

    useEffect(() => {
        container.current = ReactDOM.findDOMNode(document.querySelector('.container')) as Element
    }, [document.querySelector('.container')])

    return (
        <DisplayContext.Provider value={{ darkMode, isMobile, container, ToggleDarkMode }}>
            {props.children}
        </DisplayContext.Provider>
    );
}