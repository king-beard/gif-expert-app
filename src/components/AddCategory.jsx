import { useState } from "react"

export const AddCategory = ( { setCategories } ) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = (event) => {
    const { value } = event.target
    setInputValue(value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if( inputValue.trim().length <= 1 ) return
    setCategories( categories => [ inputValue, ...categories ] )
    setInputValue('')
  }

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Search gifs"
        value={ inputValue }
        onChange={ onInputChange } />
    </form>
  )
}
