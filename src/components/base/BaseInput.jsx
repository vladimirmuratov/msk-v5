import {TextField, Typography} from '@mui/material'
import {useController} from 'react-hook-form'

export const BaseInput = ({control, name, label, required = false, multiline = false, errorType = '', mask = ''}) => {
    const {field,} = useController({name, control, rules: {required: required},})

    return (
        <>
            <TextField
                placeholder={mask}
                error={!!errorType}
                onChange={field.onChange}
                name={field.name}
                inputRef={field.ref}
                // required={required}
                multiline={multiline}
                rows={multiline ? 2 : 1}
                size="small"
                id="outlined-basic"
                label={`${label}${required ? '*' : ''}`}
                variant="outlined"
                sx={{backgroundColor: 'var(--white)', borderRadius: '5px'}}
            />
            {errorType === 'required' &&
                <Typography sx={{fontSize: '10px', color: 'var(--red)'}}>Обязательное поле</Typography>}
        </>
    )
}
