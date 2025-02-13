import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = (event) => {
    const { value } = event.target
    setInputValue(value)
  }

  const onSubmit = () => {
    event.preventDefault()
    if(inputValue.trim().length < 1) return

    onNewCategory( inputValue )
    setInputValue('')
  }

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Search Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
