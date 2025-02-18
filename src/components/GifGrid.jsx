import { Fragment, useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import { GifItem } from './GifItem'

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([])

  const getImages = async( ) =>{
    const newImages = await getGifs( category );
    setImages( newImages )
  }
  
  useEffect(() => {
    getImages()
  }, [category])
  

  return (
    <Fragment>
      <h3>{ category }</h3>

      <div className="card-grid">
        { images.map((img) => <GifItem key={ img.id } image={ img } /> )}
      </div>
    </Fragment>
  )
}
