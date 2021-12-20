import { ReactNode } from 'react'; 

import { 
  Card,
  Gradient,
  Icon,
  IconGradient,
  Title,
  Value
} from './styles'

interface ICardInfoProps {
    gradient?: boolean;
    icon: any;
    title: string;
    value: string;
    button: string;
}

const CardInfo = (props:ICardInfoProps) => {
  const gradient = props.gradient

  const Container = gradient ? Gradient : Card
  const IconSelected = gradient ? IconGradient : Icon

  return (
    <Container>
      <IconSelected name={props.icon}/>
      <Title gradient={gradient} >{props.title}</Title>
      <Value gradient={gradient} >{props.value}</Value>
      <Title gradient={gradient} >{props.button}</Title>
    </Container>
  )
}


export default CardInfo; 
