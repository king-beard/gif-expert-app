import { Fragment, useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'One Piece', 'Dragon Ball' ])

  // const onAddCategory = () => setCategories([ 'Demon Slayer: Kimetsu no Yaiba', ...categories ])

  return (
    <Fragment>
      {/* title */}
      <h1>GifExpertApp</h1>
      {/* Input */}
      <AddCategory setCategories={ setCategories } />
      {/* Listado de Gifs */}
      {/* <button onClick={ onAddCategory }>Add Category</button> */}
      <ol>
        { categories.map( (category, index) => <li key={ index }>{ category }</li> ) }
      </ol>
    </Fragment>
  )
}
