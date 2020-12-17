import React , {useState} from 'react';

export function useForm(initialValues){
    const [values,setValues] = useState(initialValues)
    const [errors, setErrors] =useState({})

    const handelInputChange= e =>{
        const {name, value}= e.target
        setValues({
            ...values,
            [name]: value
        })
        setErrors({

        })
        
    }
    return {
        values,
        setValues,
        handelInputChange,
        errors,
        setErrors
    }
}

export function Form(props) {

    const { children, ...other } = props;
    return (
        <form autoComplete="off" {...other}>
            {props.children}
        </form>
    )
}