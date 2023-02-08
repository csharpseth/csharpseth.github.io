import { useEffect, useRef, useState } from "react";

export function useIntersect(ref: any, threshold: number = 0.6) {
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