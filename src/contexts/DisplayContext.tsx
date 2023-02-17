import React, { createContext, useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Clamp01 } from '../MyMath';

export const DisplayContext = createContext({} as any)

export function DisplayProvider(props: any) {

    const [darkMode, setDarkMode] = useState<boolean>(false)


	const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
    const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight)
    const [scrollHeight, setScrollHeight] = useState<number>(0)

    const [mouseX, setMouseX] = useState<number>(0)
    const [mouseY, setMouseY] = useState<number>(0)

	const [isMobile, setIsMobile] = useState<boolean>(windowWidth <= 768)
    const [scrollPercent, setScrollPercent] = useState<number>(1)

    const [landingPlayed, setLandingPlayed] = useState<boolean>(false)

    const container = useRef<Element | null>()
    let wHeight = useRef<number>(windowHeight)
    wHeight.current = windowHeight

    function CalculateScrollPercent():number {
        if(!container.current) return 0
        let scrollTop = container?.current?.scrollTop
        let windowHeight = wHeight.current
        let scrollHeight = container?.current?.scrollHeight

        let percent = scrollTop / (scrollHeight - windowHeight);

        // scrollTop = !scrollTop ? 1 : scrollTop
        // scrollHeight = !scrollHeight ? 1 : scrollHeight

        // let percent = scrollTop/scrollHeight
        // if(percent > 0.5) {
        //     percent = scrollTop/(scrollHeight - windowHeight)
        // }

        // percent = Clamp01(percent)
        // percent = percent < 0.001 ? 0.0 : percent
        // percent = percent > 0.999 ? 1.0 : percent

        return percent
    }

    function ToggleDarkMode(active: boolean) {
        setDarkMode(active)
    }

    function SetLandingPlayed() {
        setLandingPlayed(true)
    }

    function ScrollToTop(smooth: boolean = false) {
        if(!container.current) return

        console.log(`Current Top: ${container.current.scrollTop}`)

        container.current.scrollTo({
            top: 0,
            behavior: smooth ? 'smooth':'auto'
        })
    }

    function UpdateContainer() {
        if(container.current) {
            container.current?.removeEventListener("scroll", HandleScrollEvent)
        }
        container.current = ReactDOM.findDOMNode(document.querySelector('.container')) as Element
        
        container.current.addEventListener("scroll", HandleScrollEvent)
        setScrollPercent(CalculateScrollPercent())

        setScrollHeight(container.current.scrollHeight)
    }

    useEffect(() => {
        UpdateContainer()
        function HandleWindowResize() {
            setWindowWidth(window.innerWidth)
            setWindowHeight(window.innerHeight)
            setIsMobile(windowWidth <= 768)
        }

        function HandleMouseEvent(event: any) {
            setMouseX(event.clientX)
            setMouseY(event.clientY)
        }

        window.addEventListener('resize', HandleWindowResize)
        window.addEventListener('mousemove', HandleMouseEvent)
        return () => {
			window.removeEventListener('resize', HandleWindowResize)
            window.removeEventListener('mousemove', HandleMouseEvent)
        }


    }, [])
    
    function HandleScrollEvent() {
        setScrollPercent(CalculateScrollPercent())
    }   

    return (
        <DisplayContext.Provider value={{
            darkMode,
            isMobile,
            windowWidth,
            windowHeight,
            mouseX,
            mouseY,
            container,
            scrollPercent,
            landingPlayed,
            scrollHeight,
            UpdateContainer,
            SetLandingPlayed,
            ScrollToTop,
            ToggleDarkMode
        }}>
            {props.children}
        </DisplayContext.Provider>
    );
}