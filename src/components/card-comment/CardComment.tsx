import { CardCommentRoot } from './CardCommentStyle'

interface CardCommentProps {
    stars: JSX.Element[]
    comment: string
    image: string
    name: string
    location: string
}

export const CardComment = ({stars, comment, image, name, location} : CardCommentProps) => {
  return (
    <CardCommentRoot>
        <ul className='cardComment__stars'>
            {
                stars.map((star, index) =>{
                    return <li key = {index}>{star}</li>
                })
            }
        </ul>
        <p className='cardComment__comment'>{comment}</p>
        <div className='cardComment__user'>
            <figure>
            <img className = "cardComment__image" src= {image} alt="name" />
            </figure>
            <div>
            <h3>{name}</h3>
            <p>{location}</p>
            </div>
        </div>
    </CardCommentRoot>
  )
}
