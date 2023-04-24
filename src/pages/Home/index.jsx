import styled from 'styled-components'
import colors from '../../utils/style/colors'
// import { StyledLink } from '../../utils/style/Atoms'
import HomeIllustration from '../../assets/home-illustration.svg'

const HomeContainer = styled.div`
  margin: 30px;
  background-color: ${colors.background};
  padding: 60px 90px;
  display: flex;
  flex-direction: row;
  max-width: 1200px;
`


export default function Index() {
  return (
    <HomeContainer>
      
    </HomeContainer>
  );
}
