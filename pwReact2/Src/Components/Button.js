function Button(props) {
    return (
        <>
            <button onClick={
                () => {
                    console.log("button CLicked");
                }
            }> {props.text} </button>
        </>
    );

}

export default Button;