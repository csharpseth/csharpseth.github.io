import { useEffect, useRef, useState } from "react";

export function useIntersect(ref: any):number {
    const [amount, setAmount] = useState<number>(0)
    const container = useRef<Element>()

    useEffect(() => {
        const element = document.querySelector('.container')
        if(element) {
            container.current = element
        }
    }, [])

    useEffect(() => {
        

        function OnScrollContainer() {
            if(!container.current) return
            
            const distance = container.current.scrollTop + window.innerHeight - ref.current.offsetTop
            const percentage = Math.min(1, Math.max(0, distance / window.innerHeight))

            setAmount(percentage)
        }

        function OnScrollWindow() {
            
        }

        if(container) {
            container.current?.addEventListener("scroll", OnScrollContainer)
        } else {
            window.addEventListener("scroll", OnScrollWindow)
        }

        return () => {
            container.current?.removeEventListener("scroll", OnScrollContainer)
            window.removeEventListener("scroll", OnScrollWindow)
        }
    }, [container, ref])

    return amount
}

export function useInView(ref: any, threshold: number = 0.6):boolean {
    const [onScreen, setOnScreen] = useState(false)
    const observerRef = useRef<IntersectionObserver>()

    useEffect(() => {
        observerRef.current = new IntersectionObserver(([entry]) => {
            setOnScreen(entry.isIntersecting)
        }, { threshold })
    }, [threshold])

    useEffect(() => {
        observerRef.current?.observe(ref.current)
        
        return () => {
            observerRef.current?.disconnect()
        }
    }, [ref])

    return onScreen
}