import { useRef, useState } from 'react'
import '../../styles/Carousel.scss'

export default function CarouselComponent(props: any) {

    const carouselRef = useRef<HTMLDivElement>(null)
    const elementsRef = useRef<HTMLDivElement[]>(new Array<HTMLDivElement>(props.children?.length))

    let currentPosition = 0
    const [activeIndex, setActiveIndex] = useState<number>(0)

    function onScroll() {
        currentPosition = carouselRef.current ? carouselRef.current.scrollLeft : 0
        for(let i = 0; i < elementsRef.current.length; i++) {
            if(Math.abs(elementsRef.current[i].offsetLeft - currentPosition) <= (elementsRef.current[i].offsetWidth / 4))
            {
                setActiveIndex(i)
                break
            }
        }
    }

    function AdjustActiveIndex(amount: number) {
        let newVal = activeIndex + amount
        if(newVal < 0) newVal = 0
        if(newVal >= elementsRef.current.length) newVal=elementsRef.current.length - 1

        setActiveIndex(newVal)
    }
    
    function Left() {
        if(!carouselRef.current || !elementsRef.current) return

        const scrollWidth = Math.max(carouselRef.current?.scrollWidth, carouselRef.current?.offsetWidth)
        
        let position = elementsRef.current[activeIndex].offsetLeft - 24
        if(position >= scrollWidth)
            return

        AdjustActiveIndex(-1)
        setActiveIndex(val => {
            if(!carouselRef.current) return val
            position = elementsRef.current[val].offsetLeft - 24
            if(val === 0) {
                position = 0
            }

            carouselRef.current.scrollTo({
                behavior: 'smooth',
                left: position
            })
            return val
        })
    }

    function Right() {
        if(!carouselRef.current || !elementsRef.current) return
        
        const scrollWidth = Math.max(carouselRef.current?.scrollWidth, carouselRef.current?.offsetWidth)
        
        let position = elementsRef.current[activeIndex].offsetLeft - 24
        if(position >= scrollWidth)
            return

        AdjustActiveIndex(1)
        setActiveIndex(val => {
            if(!carouselRef.current) return val
            position = elementsRef.current[val].offsetLeft - 24
            if(val === (elementsRef.current.length - 1)) {
                position = carouselRef.current.scrollWidth
            }

            carouselRef.current.scrollTo({
                behavior: 'smooth',
                left: position
            })
            return val
        })
    }

    return (
        <div className="carousel" ref={carouselRef} onScroll={onScroll}>
            <button id="left" onClick={() => Left()}><img src='/left-arrow.png' alt='left arrow' width="485" height="926" /></button>
            <button id="right" onClick={() => Right()}><img src='/left-arrow.png' alt='right arrow' width="485" height="926" /></button>
            {props.children?.map((child: any, index: number) => {
                return (
                    <div
                        className="element"
                        id={activeIndex === index ? "active":""}
                        key={index}
                        ref={ref => {
                            if(ref) elementsRef.current[index] = ref
                        }}
                    >
                        {child}
                    </div>
                )
            })}
        </div>
    )
}