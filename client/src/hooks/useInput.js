import React, {useState} from 'react'


export const useInput = (key, initialValue) => {
    const [value, setValue] = useState()

    const handleChanges = e => {
        setValue(e.target.value)
    }
return [value, handleChanges, setValue]
}

export default useInput