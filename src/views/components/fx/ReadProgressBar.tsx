import { useContext } from 'react'
import { DisplayContext } from '../../../contexts/DisplayContext';
import { Clamp, Clamp01, EaseInOutFunction, RelativeRemap } from '../../../MyMath';

import '../../../styles/ReadProgressBar.scss'

export default function ReadProgressBar() {
    const { windowWidth, windowHeight, scrollPercent } = useContext(DisplayContext)

    const padding: number = 10

    function TopY():number {
        return padding
    }
    function BottomY():number {
        return windowHeight - padding
    }
    function ClampToAxis(value: number):number {
        return Clamp(value, TopY(), BottomY())
    }

    //ClampToAxis(TopY() + (BottomY() * scrollPercent) + 20)

    function ScrollBar() {
        return (
            <line className='line'
                x1={(windowWidth - 5)}
                x2={(windowWidth - 5)}
                y1={
                    Clamp(TopY() + (BottomY() * scrollPercent), padding, BottomY() - 30)
                }
                y2={
                    Clamp(TopY() + (BottomY() * scrollPercent) + 10, TopY() + 30, BottomY())
                }
            ></line>
        )
    }

    function VerticalSquishToCenter() {
        return (
            <line className='line shadow'
                x1={5}
                x2={5}
                y1={ClampToAxis(TopY() + (BottomY() * (scrollPercent/2)))}
                y2={ClampToAxis(BottomY() - (BottomY() * (scrollPercent/2)))}
            ></line>
        )
    }

    function VerticalSquishToTop() {
        return (
            <line className='line shadow'
                x1={5}
                x2={5}
                y1={TopY()}
                y2={ClampToAxis((BottomY() - (windowHeight * scrollPercent)))}
            ></line>
        )
    }

    function VerticalSquishToBottom() {
        return (
            <line className='line shadow'
                x1={5}
                x2={5}
                y1={ClampToAxis(TopY()+(scrollPercent * windowHeight))}
                y2={BottomY()}
            ></line>
        )
    }

    return (
        <svg className='page-read' viewBox={`0 0 ${windowWidth} ${windowHeight}`}>
            <ScrollBar />
        </svg>
    )
}