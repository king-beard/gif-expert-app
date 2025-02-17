import { Fragment } from 'react'
import { getGifs } from '../helpers/getGifs'

export const GifGrid = ({ category }) => {
  
  getGifs( category )

  return (
    <Fragment>
      <h3>{ category }</h3>
    </Fragment>
  )
}
