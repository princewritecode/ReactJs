function Image(props) {
    console.log(props);
    return (
        <>
            <img src={props.src}></img>
        </>
    );
}
export default Image;