
import { CardComment } from '../card-comment/CardComment'
import { Star } from "@phosphor-icons/react"
import { SectionRoot } from './MainSectionThreeStyle'

export const MainSectionThree = () => {
    const cardCommentData = [
        {
        stars: [<Star size={15} weight="fill" color = "#00c2c5" />,<Star size={15} weight="fill" color = "#00c2c5"  />,<Star size={15} weight="fill" color = "#00c2c5"  />,<Star size={15} weight="fill" color = "#00c2c5"  /> ],
        comments: "Share a real testimonial that hits some of your benefits (but isn't too sales-y).", 
        image : 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600',
        name: 'Stefan Stefancik',
        location: 'Brazil'
      },
        {
        stars: [<Star size={15} weight="fill" color = "#00c2c5" />,<Star size={15} weight="fill" color = "#00c2c5"  />,<Star size={15} weight="fill" color = "#00c2c5"  />,<Star size={15} weight="fill" color = "#00c2c5"  />,<Star size={15} weight="fill" color = "#00c2c5"  /> ],
        comments: "Include someone talking about how easy it was to sign up and participate.", 
        image : 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600',
        name: 'Andrea Piacquadio',
        location: 'Germany'
      },

]
  return (
    <SectionRoot>
      <h4 className='sectionThree__title'>DON'T JUST TAKE OUR WORD FOR IT</h4>
      <div className='sectionThree__cardCommentWrapper'>
      {
        cardCommentData.map((comment) => {
             const {stars, comments, image, name, location } = comment
             return <CardComment 
                  key = {name}
                  stars = {stars}
                  comment = {comments}
                  image = {image}
                  name = {name}
                  location = {location}
             />
        })
      }
      </div>
    </SectionRoot>
  )
}
