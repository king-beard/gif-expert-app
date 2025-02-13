import { useState } from "react"

export const AddCategory = () => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = (event) => {
    const { value } = event.target
    setInputValue(value)
  }

  const onSubmit = () => {
    event.preventDefault()
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
