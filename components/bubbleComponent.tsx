interface BubbleComponentProps {
    className?: string;
}

function bubbleComponent(props: BubbleComponentProps) {
    return (
        <div className={`bubble ${props.className}`}></div>
    );
}

export default bubbleComponent;