import { 
  Text,
  TextPrimary,
  Default,
  Primary,
  IconPrimary,
  Icon,
  Transparent,
  TextBlack
} from './styles'

import Margin from '../../components/margin';

interface IDefaultProps {
  title: string
  icon?: string
  onPress?: () => void 
}

interface IDefaultWithIconProps {
  title?: string
  icon: string
  onPress?: () => void 
}

export const DefaultButton = (props:IDefaultProps) => {
  const { title, onPress, icon } = props

  return (
    <Default onPress={onPress} {...props}>
      {icon && (
        <>
          <Icon name={icon} />
          <Margin left={5} />
        </>
      )}
      <Text>{title}</Text>
    </Default>
  )
};

export const PrimaryButton = (props:IDefaultProps) => {
  const { title, onPress, icon } = props

  return (
    <Primary onPress={onPress} {...props}>
      {icon && (
        <>
          <IconPrimary name={icon} />
          <Margin left={5} />
        </>
      )}
      <TextPrimary>{title}</TextPrimary>
    </Primary>
  )
};

export const IconPrimaryButton = (props:IDefaultWithIconProps) => {
  const { title, onPress, icon } = props

  return (
    <Transparent onPress={onPress} {...props}>
      <IconPrimary name={icon} />
      {title && (
        <>
          <Margin left={5} />
          <TextBlack>{title}</TextBlack>
        </>
      )}
    </Transparent>
  )
};

export const IconButton = (props:IDefaultWithIconProps) => {
  const { title, onPress, icon } = props

  return (
    <Transparent onPress={onPress} {...props}>
      <Icon name={icon} />
      {title && (
        <>
          <Margin left={5} />
          <TextBlack>{title}</TextBlack>
        </>
      )}
    </Transparent>
  )
};
