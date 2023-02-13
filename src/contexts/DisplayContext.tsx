import React, { createContext, useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Clamp01 } from '../MyMath';

export const DisplayContext = createContext({} as any)

export function DisplayProvider(props: any) {

    const [darkMode, setDarkMode] = useState<boolean>(false)


	const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
    const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight)

    const [mouseX, setMouseX] = useState<number>(0)
    const [mouseY, setMouseY] = useState<number>(0)

	const [isMobile, setIsMobile] = useState<boolean>(windowWidth <= 768)
    const [scrollPercent, setScrollPercent] = useState<number>(1)

    const container = useRef<Element | null>()

    function CalculateScrollPercent():number {
        if(!container) return 0
        let scroll = container?.current?.scrollTop
        let scrollHeight = container?.current?.scrollHeight

        scroll = !scroll ? 1 : scroll
        scrollHeight = !scrollHeight ? 1 : scrollHeight

        let percent = scroll/scrollHeight
        if(percent > 0.5) {
            percent = scroll/(scrollHeight - windowHeight)
        }

        percent = Clamp01(percent)
        percent = percent < 0.001 ? 0.0 : percent
        percent = percent > 0.999 ? 1.0 : percent

        return percent
    }

    function ToggleDarkMode(active: boolean) {
        setDarkMode(active)
    }

    useEffect(() => {
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

    useEffect(() => {
        container.current = ReactDOM.findDOMNode(document.querySelector('.container')) as Element
        
        function HandleScrollEvent() {
            setScrollPercent(CalculateScrollPercent())
        }   

        container.current.addEventListener("scroll", HandleScrollEvent)
        setScrollPercent(CalculateScrollPercent())


        return () => {
            container.current?.removeEventListener("scroll", HandleScrollEvent)
        }
    
    }, [document.querySelector('.container')])

    return (
        <DisplayContext.Provider value={{ darkMode, isMobile, windowWidth, windowHeight, mouseX, mouseY, container, scrollPercent, ToggleDarkMode }}>
            {props.children}
        </DisplayContext.Provider>
    );
}