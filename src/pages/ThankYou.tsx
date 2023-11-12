import { styled } from '@mui/material'

const Root = styled('section')(({ theme: { palette } }) => ({
  backgroundColor: '#e8fbfb',
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  lineHeight: 1.6,
  justifyContent: 'center',
  color: palette.primary.main,
  
  '& .thankyou__wrapper': {
    border: '4px solid #152f2e',
    borderRadius: '8px',
    padding: '2rem'
  },
  
  '& .thankyou__title': {
    fontSize: '2rem'
  },
}))

export const ThankYou = () => {
  const user= localStorage.getItem('userInfor')
  let userInfo = ''

  try {
    if (typeof user === 'string') {
        userInfo = JSON.parse(user).name;
    }
    } catch (error) {
    console.error('Error parsing user information:', error);
    }
 
  return (
    <Root>
      <div className='thankyou__wrapper'>
        <h1 className='thankyou__title'>Thank you {userInfo} for contacting us. </h1>
        <p className='thankyou__desc'>We will contact you about your schedule time.</p>
      </div>
    </Root>
  )
}
