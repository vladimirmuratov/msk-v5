import {Alert, Snackbar, Typography} from '@mui/material'

export const Toast = ({isSuccess, isFailed, handleClose}) => {
    const bgColor = isSuccess
        ? 'var(--green)'
        : isFailed
            ? 'var(--red)'
            : 'var(--white)'

    return (
        <Snackbar open={isSuccess || isFailed} autoHideDuration={3000} onClose={handleClose}>
            <Alert
                onClose={handleClose}
                // severity="success"
                variant="filled"
                sx={{width: '100%', backgroundColor: bgColor}}
            >
                {isSuccess && <Typography>Сообщение отправлено!</Typography>}
                {isFailed && <Typography>Ошибка сервера. Попробуйте позже</Typography>}
            </Alert>
        </Snackbar>
    )
}
