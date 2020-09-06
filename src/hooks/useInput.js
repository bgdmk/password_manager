import {useState} from "react"

const useInput = initState => {
  const [value, setValue] = useState(initState)

  const onReset = () => setValue(initState)

  const onBind = {
    value,
    onChange: e => setValue(e.target.value),
  }
  return [value, onBind, onReset]
}

export default useInput
