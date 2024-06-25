const Text = ({ text, ...rest }) => {
    return (
        <p {...rest}>{text}</p>
    )
}

export default Text