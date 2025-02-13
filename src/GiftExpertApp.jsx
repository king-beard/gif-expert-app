import { Fragment, useState } from "react"

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['Baki', 'Dragon Ball Z'])

  return (
    <Fragment>
      <h1>GiftExpertApp</h1>
      <ol>
        { categories.map((category, i) => <li key={category}>{ category }</li>)  }
      </ol>
    </Fragment>
  )
}
