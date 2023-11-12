import { CardFeature } from '../card-features/CardFeature'
import { CardAbout } from '../card-about/CardAbout'
import { MainSectionFourRoot } from './MainSectionFourStyle'

export const MainSectionFour = () => {
  const cardFeatureData = [
    {
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'FEATURE 1',
      desc: 'Talk about some of the details of your offer with a focus on the value people get back.'
    },
    {
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'FEATURE 2',
      desc: 'Is there a pain point that your service resolves? Tell visitors about it here.'
    },
    {
      image: 'https://images.pexels.com/photos/1084188/pexels-photo-1084188.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'FEATURE 3',
      desc: 'Alternatively, you could use this section to address some frequently asked questions.'
    },
  ]
  return (
    <MainSectionFourRoot>
      <ul className = "mainSectionFour__cardFeatureWrapper">
        {
          cardFeatureData.map(feature =>{
            const {image, title, desc} = feature
            return <li key = {title}><CardFeature
              image = {image}
              title = {title}
              desc = {desc}
            />
            </li>
          })
        }
      </ul>
      <CardAbout />
    </MainSectionFourRoot>
  )
}
