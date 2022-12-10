import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { PQRProvider2 } from '../context';
import useFormPQR from '../hooks/useFormPQR'
import { PQRProvider, useNewPQR } from '../Provider';
import styles from '../styles/PQRStyles.module.css'


const FormPQR = () => {

    const [age, setAge] = React.useState('');


    useEffect(() => {


        return () => {

        }
    }, [])


    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [formValue, handleInputChange, rest] = useFormPQR({
        title_pqr: '',
        body_pqr: '',
        type_pqr: age
    })

    const { title_pqr, body_pqr, type_pqr } = formValue
    const handleSubmit = (e) => {
        // type_pqr = age
        e.preventDefault()
        console.log(formValue)
        rest()
        // createUser(formValue)
        PQRProvider2(formValue)
    }

    // useNewPQR(formValue)


    return (
        <div>
            <form className={styles.form_main_container} onSubmit={handleSubmit}>
                <div>
                    <TextField label="Título de su PQR" required name="title_pqr" value={title_pqr} onChange={handleInputChange} />
                </div>
                <div>
                    <TextField className={styles.textField} multiline label="Ingrese aquí el asunto de su PQR" name="body_pqr" value={body_pqr} required onChange={handleInputChange} />
                </div>
                <div>
                    <FormControl  sx={{ m: 1, minWidth: 80 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Tipo de solicitud</InputLabel>
                        <Select
                            label="Tipo de solicitud"
                            onChange={handleChange}
                            autowidth="true"
                            name="type_pqr"
                            required
                            value={age}
                            className={styles.select}
                        // onChange={handleInputChange}
                        >
                            {/* <MenuItem value="" default disabled="true">Seleccione</MenuItem> */}
                            <MenuItem default name="peticion" value={"Peticion"}>Petición</MenuItem>
                            <MenuItem name="Queja" value={"Queja"}>Queja</MenuItem>
                            <MenuItem name="Recurso" value={"Recurso"}>Recurso</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <button type="submit" className={styles.button_send}>
                        Enviar formulario
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormPQR