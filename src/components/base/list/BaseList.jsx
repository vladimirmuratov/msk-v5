import {List} from '@mui/material'
import {BaseListItem} from '@/components/base/list/BaseListItem'

export const BaseList = ({info = []}) => {
    return(
        <List>
            {info.map((item) => <BaseListItem key={item.id} {...item}/>)}
        </List>
    )
}
