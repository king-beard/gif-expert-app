import { Fragment, useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['Baki', 'Dragon Ball Z'])

  const onAddCategory = (value) => {
    if(categories.includes(value)) return
    setCategories([ ...categories, value ])
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
