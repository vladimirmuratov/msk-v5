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
                              type = 'text',
                              regexp = ''
                          }) => {

    return (
        <>
            <Controller
                name={name}
                control={control}
                rules={{required: required, pattern: regexp}}
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
                <Typography sx={{fontSize: '14px', color: 'var(--red)'}}>Обязательное поле</Typography>}

            {errorType === 'pattern' &&
                <Typography sx={{fontSize: '14px', color: 'var(--red)'}}>Введите валидное значение</Typography>}

        </>
    )
}
