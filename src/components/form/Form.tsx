import { FormEvent } from 'react'
import { FormRoot} from './formStyle'
import { FormState } from './type';
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { setFormInput, setResetForm } from '../../redux/reducers'
import { useNavigate } from "react-router-dom"
// import emailjs from '@emailjs/browser';

export const Form = () => {
  const navigate = useNavigate()
  const { firstName, lastName, email, phoneNumber, appointmentType } = useAppSelector(state => state.formReducer)
  const dispatch = useAppDispatch()

  const handleSubmit = (e : FormEvent) => {
    e.preventDefault();
    const templateParams = {
      name: `${firstName} ${lastName}`,
  };

  localStorage.setItem('userInfor', JSON.stringify(templateParams))
    
  // emailjs.send('<service id>','template_id', templateParams , 'publickey')
	// .then((response) => {
	//    console.log('SUCCESS!', response.status, response.text);
	// }, (err) => {
	//    console.log('FAILED...', err);
	// });
    dispatch(setResetForm())
    navigate('/thanks')
  };

  const handleChange = ( field: keyof FormState, value: string) => {
      dispatch(setFormInput({field, value}));
  };

  return (
    <FormRoot onSubmit={handleSubmit}>
        <h2 className="form__title">Schedule an Appointment</h2>
        <p className="form__desc">
        Here, let visitors know what will happen when they complete your form.
        </p>
        <input 
        type="text" 
        placeholder="First Name*" 
        className="form__input" 
        value={firstName}
        onChange={(e) => handleChange('firstName', e.target.value)}
        required
        />

        <input 
        type="text" 
        placeholder="Last Name*" 
        className="form__input"
        value={lastName}
        onChange={(e) => handleChange('lastName', e.target.value)}
        required
        />
        <input 
        type="email" 
        placeholder="Email*" 
        className="form__input"
        value={email}
        onChange={(e) => handleChange('email', e.target.value)}
        required
        />
        <input 
        type="number" 
        placeholder="Phone number*" 
        className="form__input" 
        value={phoneNumber}
        onChange={(e) => handleChange('phoneNumber', e.target.value)}
        required
        />
        <select 
        className="form__input"
        value={appointmentType}
        onChange={(e) => handleChange('appointmentType', e.target.value)}
        required
        >
            <option value="">--Type of Appointment--</option>
            <option value="type one">type one</option>
            <option value="type two">type two</option>
            <option value="type three">type three</option>
        </select>
        <button 
        type = 'submit' 
        className="form__button"
        > Schedule now</button>
    </FormRoot>
  )
}
