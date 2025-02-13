import { Fragment, useState } from "react"

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['Baki', 'Dragon Ball Z'])

  const OnAddCategory = () => setCategories([...categories, 'One Piece'])

  return (
    <Fragment>
      <h1>GiftExpertApp</h1>
      <button onClick={ OnAddCategory }>Add new category</button>
      <ol>
        { categories.map((category, i) => <li key={`${category}-${i}`}>{ category }</li>)  }
      </ol>
    </Fragment>
  )
}
