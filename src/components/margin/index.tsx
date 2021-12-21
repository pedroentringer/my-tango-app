import { DynamicMargin } from './styles'

interface IProps {
    top?: number
    right?: number
    bottom?: number
    left?: number
}

export default (props:IProps) => {
    return (
        <DynamicMargin  {...props}/>
    )
};