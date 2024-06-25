const Heading = ({ text, ...rest }) => {
    return (
        <h1 {...rest}>{text}</h1>
    )
}

export default Heading