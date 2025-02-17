export const getGifs = async( category ) =>{
  const apiKey = 'wmTOxy7L04iD1a1xlnS7YCtEzi532F2o';
  const url = `https://api.giphy.com/v1/stickers/search?api_key=${ apiKey }&q=${ category }&limit=10`; 
  const res = await fetch( url )
  const { data } = await res.json()

  const gifs = data.map((img) => ({
    id : img.id,
    title : img.title,
    url : img.images.downsized_medium.url
  }))

  return gifs
}
