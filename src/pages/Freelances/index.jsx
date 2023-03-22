import styled from 'styled-components'
import profileMan from '../../assets/profile-man.webp'
import profileWoMan from '../../assets/profile-woman.png'
import Card from '../../components/Card'
 
const freelanceProfiles = [
    {
        name: 'Jean Boy',
        jobTitle: 'Devops',
        picture: profileMan,
    },
    {
        name: 'Anja Raj',
        jobTitle: 'frontend Developer',
        picture: profileMan,
    },
    {
        name: 'Jeannie Andria',
        jobTitle: 'BackEnd Developer',
        picture: profileWoMan,
    },
    {
      name: 'Nant Raj',
      jobTitle: 'Fullstack Developer',
  },
]

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
    width: 50%;
    margin: auto;
`

export default function Freelances() {
  return (
      <div style={styles.main}>
          <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
          <CardsContainer>
          {freelanceProfiles.map((profile, index) => (
              <Card
                  key={`${profile.name}-${index}`}
                  label={profile.jobTitle}
                  picture={profile.picture}
                  title={profile.name}
              />
          ))}
          </CardsContainer>
      </div>
  )
}

const styles = {
    main: {
        textAlign: 'center',
    }
}