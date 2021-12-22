import { 
  Container,
  SafeArea
} from './styles'

import { PrimaryButton, IconButton } from '../../components/buttons'

const BottomMenu = () => {

  return (
    <>
      <Container>
        <PrimaryButton icon='bar-chart' title='Dashboard'/>
        <IconButton icon='lightbulb'/>
        <IconButton icon='language'/>
      </Container>
      <SafeArea />
    </>
  )

}

export default BottomMenu;
