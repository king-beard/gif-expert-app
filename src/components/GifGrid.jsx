import { Fragment, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'

export const GifGrid = ({ category }) => {
  
  useEffect(() => {
    getGifs( category )
  }, [category])
  

  return (
    <Fragment>
      <h3>{ category }</h3>
    </Fragment>
  )
}
