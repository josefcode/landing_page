import { AboutRoot } from './cardAboutStyle'

export const CardAbout = () => {
  return (
    <AboutRoot>
        <figure>
        <img className='aboutCard__image' src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="woman siting on chair" />
        </figure>
        <div className='aboutCard__infoWrapper'>
        <h4 className='aboutCard__title'>ABOUT</h4>
        <h3 className='aboutCard__subTitle'>Some more information about your business</h3>
        <p className='aboutCard__desc'>Share a little about yourself as a business owner, or maybe describe what makes your service unique. Give visitors one more reason to care about your offer and want to work with you</p>
        </div>
    </AboutRoot>
  )
}
