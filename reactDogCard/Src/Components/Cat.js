import Image from "./Image";
const CatBox = (props) => {
    console.log(props);
    return (
        <>
            <h1>{props.name}</h1>
            <Image src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg"></Image>
            <h2>Hello this is heading 2</h2>
        </>
    );
};
export default CatBox;