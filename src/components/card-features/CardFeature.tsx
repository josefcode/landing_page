import { CardFeatureRoot } from './CardFeatureStyle'

interface CardFeatureProps {
    image: string
    title: string
    desc: string
}

export const CardFeature = ({ image, title, desc} : CardFeatureProps) => {
  return (
    <CardFeatureRoot>
        <figure>
        <img className='cardFeature__image' src={image} alt="" />
        </figure>
        <h3 className='cardFeature__title'>{title}</h3>
        <p className='cardFeature__desc'>{desc}</p>
    </CardFeatureRoot>
  )
}
