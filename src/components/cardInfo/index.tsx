import { 
  Card,
  Gradient,
  Icon,
  IconGradient,
  Title,
  Value,
  ValueComplement,
  RowStyled,
  Button
} from './styles'

import { RowColumn } from '../../global/styles'

interface ICardInfoProps {
    gradient?: boolean;
    icon: any;
    title: string;
    value: string;
    valueComplement?: string;
    button: string;
}

const CardInfo = (props:ICardInfoProps) => {
  const gradient = props.gradient
  const IconSelected = gradient ? IconGradient : Icon

  const renderContent = () => {
    return (
      <>
        <IconSelected name={props.icon}/>

        <RowColumn>
          <Title gradient={gradient} >{props.title}</Title>

          <RowStyled>
            <Value gradient={gradient} >{props.value}</Value>
            {props.valueComplement && <ValueComplement>{props.valueComplement}</ValueComplement>}
          </RowStyled>

          <Button>
            <Title gradient={gradient} >{props.button}</Title>
            <IconSelected name="keyboard-arrow-right" size={12} />
          </Button>

        </RowColumn>
      </>
    )
  }

  if(gradient) {
    return (
      <Gradient>
        {renderContent()}
      </Gradient>
    )
  }

  return (
    <Card>
      {renderContent()}
    </Card>
  )
}


export default CardInfo; 
