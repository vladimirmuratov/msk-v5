import {Box, Button, Checkbox, Typography} from '@mui/material'
import {useForm} from 'react-hook-form'
import {BaseInput} from '@/components/base/BaseInput'
import {useState} from 'react'
import {sendEmail} from '@/lib/sendEmail'

export const CallForm = ({onSuccess, onFailed, onCloseModal}) => {
    const regExpPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
    const [checked, setChecked] = useState(false)
    const {control, handleSubmit, formState: {errors, isSubmitting}, reset,} = useForm({defaultValues: {
            person: '',
            phone: '',
        }})

    const onSubmit = async (data) => {
        const resStatus = await sendEmail(data)

        if (resStatus === 250) {
            reset()
            setChecked(false)
            onSuccess(true)
            onCloseModal()
        } else if (resStatus === 404) {
            onFailed(true)
            onCloseModal()
        }
    }

    const handleChange = (event) => {
        setChecked(event.target.checked)
    }

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                backgroundColor: 'var(--green)',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                padding: '20px',
                borderRadius: '10px'
            }}
        >

            <BaseInput control={control} label="Ваше имя" name="person" required={true} errorType={errors?.person?.type}
                       mask="Смирнов Иван"/>
            <BaseInput control={control} label="Телефон" name="phone" required={true} errorType={errors?.phone?.type}
                       mask="+7 (000) 000 00 00" regexp={regExpPhone}/>

            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Checkbox checked={checked} onChange={handleChange} sx={{alignSelf: 'start'}}/>
                <Typography sx={{fontSize: 11, lineHeight: '11px'}}>
                    Нажимая кнопку «Отправить», я даю свое согласие на обработку моих персональных данных.
                </Typography>
            </Box>

            <Box sx={{border: '1px solid green', display: 'flex', gap: '10px'}}>
                <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={!checked || isSubmitting}
                    sx={{backgroundColor: 'var(--red)', width: '100%'}}
                >Отправить</Button>
            </Box>
        </Box>
    )
}
