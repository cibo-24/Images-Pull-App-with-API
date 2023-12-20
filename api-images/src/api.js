import axios from "axios";

const searchImages = async(term) => {
    // istek atacağımız yer. Bu düzen API çekeceğimiz yerde sırasıyla yazmaktadır.
   const response = await axios.get('https://api.unsplash.com/search/photos',{
      headers: {
        Authorization: 'Client-ID oTWAS5zHDtFYwt96ZVj0smBKkcMuMggZeSPDA_mx4Ak',
      },
      params: {
        query: term,
      },
    });
    debugger;
    return response.data.results;
  }

  export default searchImages;