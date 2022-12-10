import { useState } from 'react';

const useFormPQR = (initialState={}) => {

    const [formValue, setFormValue]=useState(initialState)
    
    const rest=()=>{
        setFormValue(initialState)
    }

    const handleInputChange=({target})=>{
            setFormValue({
                ...formValue,
                [target.name]: target.value
            })

    }
    return[formValue, handleInputChange, rest]
};

export default useFormPQR;