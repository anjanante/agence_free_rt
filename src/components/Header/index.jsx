import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import logo from '../../assets/logo-for-light-text.png'

const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background: linear-gradient(to left, ${colors.primary}, rgba(45, 117, 188, 0.7));`}
`

const HeaderContainer = styled.div`
    padding: 0 15px 0 15px;
`

const LogoImage = styled.img`
    width: 200px;
`
const HeaderLink = styled.nav`
    float: right;
    margin-top: 30px;
`

export default function Header() {
    return (
        <HeaderContainer>
            <LogoImage src={logo} alt="logo"/>
            <HeaderLink>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/freelances">Freelances</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>Do the Test</StyledLink>
            </HeaderLink>
        </HeaderContainer>
    )
}