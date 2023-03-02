import { useEffect } from "react"

export default function ToolsIconComponent(props: any) {

    const {
        tools = []
    } = props

    useEffect(() => {
        console.log(tools)
    }, [tools])

    return (
        <ul className="tools">
            {tools.map((tool: string, index: number) => {
                return (
                <li className="tool">
                    <span className="title">{tool}</span>
                    <img className="color" src={`/tool-logo-${tool}-color.png`} alt="" />
                    <img className="white" src={`/tool-logo-${tool}-white.png`} alt="" />
                </li>
                )
            })}
        </ul>
    )
}
