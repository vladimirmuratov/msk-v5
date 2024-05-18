import {Box} from '@mui/material'
import {BaseModal} from '@/components/base/BaseModal'
import {CallForm} from '@/components/CallForm'

export const CallModal = ({isOpen, onClose, onSuccess, onFailed, onCloseModal}) => {

    return (
        <Box>

            <BaseModal open={isOpen} handleClose={onClose} title="Заказать звонок">
                <CallForm onSuccess={onSuccess} onFailed={onFailed} onCloseModal={onCloseModal}/>
            </BaseModal>

        </Box>
    )
}
