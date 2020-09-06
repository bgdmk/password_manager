import React from "react"
import Input from "./../Input/Input"

import useInput from "../../hooks/useInput"

const Form = () => {
  const [text, bindText, resetText] = useInput("")
  const [text1, bindText1, resetText1] = useInput("")

  const handleSubmit = e => {
    e.preventDefault()
    console.log("SUBMIT", text, text1)
    resetText()
    resetText1()
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input {...bindText} />
      <Input {...bindText1} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form
