import ImageItem from "./ImageItem";
import './styles.css';

function ImageList ({imagesPlaceholder}) {
    // mapleyerek bütün datayı ImageItem'a props olarak aktarıyoruz.
    // key sorununu çözmek için index argümanı verilir.
    return (
    <div className="imageBody">
       { imagesPlaceholder.map((img, index)=> {
        return <ImageItem key={index} imageItemsProps = {img}/>
       })}
    </div>
    );
}

export default ImageList;