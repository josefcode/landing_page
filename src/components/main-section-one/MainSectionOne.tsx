
import { Form } from '../form/Form'
import { MonitorPlay,Heart, Trophy  } from "@phosphor-icons/react"
import { ListRoot, SectionOneRoot } from './MainSectionOneStyle'

export const MainSectionOne = () => {
  return (
    <SectionOneRoot>
        <ListRoot>
            <li className='list__item'>
            <MonitorPlay size={60} weight="regular" color = "#00c2c5"/>
            <div>
                <h2 className='list__title' >Benefit 1</h2>
                <p className='list__desc'>Highlight the benefits of signing up for an appointment, online class, or video consultation.</p>
            </div>
            </li>
            <li className='list__item'>
            <Heart size={60} weight="regular" color = "#00c2c5"/>
            <div>
                <h2 className='list__title'>Benefit 2</h2>
                <p className='list__desc'>For example, fitness instructors might describe how their routines make people healthier *and* happier.</p>
            </div>
            </li>
            <li className='list__item'>
            <Trophy  size={60} weight="regular" color = "#00c2c5"/>
            <div>
                <h2 className='list__title'>Benefit 3</h2>
                <p className='list__desc'>Remind visitors how easy it is to claim your offer and start enjoying the benefits.</p>
            </div>
            </li>
        </ListRoot>
        <Form />
    </SectionOneRoot>
  )
}
