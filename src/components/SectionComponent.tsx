export default function SectionComponent(props: any) {
    return (
        <section id={props.id}>
            <div className="content">
                {props.children}
            </div>
        </section>
    )
}