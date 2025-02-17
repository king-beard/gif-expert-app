import { Fragment, useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([])

  const getImages = async( category ) =>{
    const newImages = await getGifs( category );
    setImages( newImages )
  }
  
  useEffect(() => {
    getImages()
  }, [category])
  

  return (
    <Fragment>
      <h3>{ category }</h3>

      <ol>
        { images.map((img) => {
          <li key={ img.id }>{ img.Title } </li>
        }) }
      </ol>
    </Fragment>
  )
}
