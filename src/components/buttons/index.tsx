import { 
  Text,
  TextPrimary,
  Default,
  Primary,
  IconPrimary,
  Transparent,
  TextBlack
} from './styles'

import Margin from '../../components/margin';

interface IProps {
  title: string
  onPress?: () => void 
}

export const DefaultButton = (props:IProps) => {
  const { title, onPress } = props

  return (
    <Default onPress={onPress}>
      <Text>{title}</Text>
    </Default>
  )
};

export const PrimaryButton = (props:IProps) => {
  const { title, onPress } = props

  return (
    <Primary onPress={onPress}>
      <TextPrimary>{title}</TextPrimary>
    </Primary>
  )
};

export const IconPlusButton = (props:IProps) => {
  const { title, onPress } = props

  return (
    <Transparent onPress={onPress}>
      <IconPrimary name='add-circle' />
      <Margin left={5} />
      <TextBlack>{title}</TextBlack>
    </Transparent>
  )
};
