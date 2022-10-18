import DefaultPicture from '../../assets/profile.jpg'
import Card from '../../components/Card'
 
const freelanceProfiles = [
    {
        name: 'Nant Raj',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'Anja Raj',
        jobTitle: 'frontend Developer',
        picture: DefaultPicture,
    },
    {
        name: 'Jeannie Andria',
        jobTitle: 'Fullstack Developer ',
        picture: DefaultPicture,
    },
]

export default function Freelances() {
  return (
      <div>
          <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
          {freelanceProfiles.map((profile, index) => (
              <Card
                  key={`${profile.name}-${index}`}
                  label={profile.jobTitle}
                  picture={profile.picture}
              />
          ))}
      </div>
  )
}