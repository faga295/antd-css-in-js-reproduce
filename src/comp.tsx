import { StyleProvider } from '@ant-design/cssinjs'
import { message, notification, Button } from 'antd'

export default function Comp(props: any) {
    console.log(props.mountPoint) 
    notification.config({
        getContainer: () => props.mountPoint,
    })

    const handleClick = () => {
        notification.open({ message: 'Comp' })
    }
    return <StyleProvider container={props.mountPoint}><Button onClick={handleClick}>Comp</Button></StyleProvider>
}