import {TextField, Typography} from '@mui/material'
import {Controller} from 'react-hook-form'

export const BaseInput = ({
                              control,
                              name,
                              label = '',
                              required = false,
                              multiline = false,
                              errorType = '',
                              mask = '',
                              type = 'text'
                          }) => {

    return (
        <>
            <Controller
                name={name}
                control={control}
                rules={{required: required}}
                render={({
                             field: {onChange, value},
                             fieldState: {error},
                             formState,
                         }) => (
                    <TextField
                        // InputLabelProps={{ shrink: true }}
                        type={type}
                        value={value}
                        placeholder={mask}
                        error={!!errorType}
                        onChange={onChange}
                        multiline={multiline}
                        rows={multiline ? 2 : 1}
                        size="small"
                        id="outlined-basic"
                        label={`${label}${required ? '*' : ''}`}
                        variant="outlined"
                        sx={{backgroundColor: 'var(--white)', borderRadius: '5px'}}
                    />
                )}
            />

            {errorType === 'required' &&
                <Typography sx={{fontSize: '10px', color: 'var(--red)'}}>Обязательное поле</Typography>}

        </>
    )
}
