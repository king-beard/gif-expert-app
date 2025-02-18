import { Fragment, useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['One Piece'])

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return
    setCategories([ newCategory, ...categories ])
  }

  return (
    <Fragment>
      <h1>GiftExpertApp</h1>
      <AddCategory onNewCategory={ value => onAddCategory(value) } />
      <ol>
        { categories.map((category, i) => <GifGrid key={`${category}-${i}`} category={ category } /> ) }
      </ol>
    </Fragment>
  )
}
