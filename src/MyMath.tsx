export function Clamp01(n: number):number {
    return Clamp(n, 0, 1)
}

export function Clamp(n: number, min: number, max: number):number {
    return Math.min(max, Math.max(min, n))
}

export function Lerp(a: number, b: number, time: number):number {
    const t = Clamp01(time)

    return (a + ((b-a) * t)) 
}

export function Flip(time: number):number {
    return 1-time
}

export function EaseInFunction(time: number, exp: number = 2):number {
    return time^exp
}

export function EaseOutFunction(time: number, exp: number = 2):number {
    return Flip(Flip(time)^2)
}

export function EaseInOutFunction(time: number, exp: number = 2):number {
    return Lerp(EaseInFunction(time, exp), EaseOutFunction(time, exp), time)
}

export function RootFunction(
    time: number,
    xOffset: number = 0,
    yOffset: number = 0,
    scale: number = 1
): number {
    return (Math.sqrt(time + xOffset) / scale) + yOffset
}

export function SineFunction(
    time: number,
    frequency: number = 1,
    amplitude: number = 1,
    xOffset: number = 0,
    yOffset: number = 0
): number {
    return  amplitude * (Math.sin(Math.PI * (time + xOffset) * frequency) + yOffset)
}