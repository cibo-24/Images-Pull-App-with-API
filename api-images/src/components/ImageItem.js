import './styles.css';

function ImageItem({imageItemsProps}) {
    console.log(imageItemsProps);
    // bu componentte api üzeriden çekilen image'ları basma işlemini yapıyoruz.
    return ( 
    // img olarak ekrana çıktı alacağımız için <img src içerisine props ile çekilen verinin uzantısını yazıyoruz. Bu uzantı neyi çıktı olarak almak istiyorsak onu yazmamız gerekmektedir.
    <div className='header'>
        <p className="items-name">About The Photo: {imageItemsProps.description}</p>
        <p className="user-name">About Artist: {imageItemsProps.user[3]} {imageItemsProps.user.bio}</p>
        <p className="portfolio">Artist Portfolio: {imageItemsProps.user.portfolio_url}</p>
        <p className='bio'>Artist Bio: {imageItemsProps.user.bio}</p>
        
        <img className='images' src={imageItemsProps.urls.small} alt={imageItemsProps.alt_description} />
        <p className="like">Likes 👍🏽:  {imageItemsProps.likes}</p> 
    </div> 
    );
}

export default ImageItem;