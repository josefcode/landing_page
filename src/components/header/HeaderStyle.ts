import { styled } from "@mui/material"
import bannerImage from '../../assets/background.png'

export const Root = styled('header')({
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',

})

export const HeaderRoot = styled('div')(({ theme: { breakpoints, palette } }) => ({
    backgroundImage: `url(${bannerImage})`,
    width: '1920px',
    height: '750px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '1920px',
    backgroundPositionY: 'center',
    paddingInline: '10rem',
    paddingBlock: '9rem',
  

    '& .header__Title': {
        color: palette.primary.main,
        fontSize: '5rem',
        width: '700px',
        marginBlock: '2rem'
    },
    '& .header__desc': {
        color: palette.primary.main,
        lineHeight: '1.5',
        width: '700px'
    },

    [breakpoints.down('md')]: {
        paddingInline: '1rem',
        paddingBlock: '4rem',
        height: '600px',
        textAlign: 'center',
        '& .header__Title': {
            fontSize: '3rem',
            width: '100%',
        },
        '& .header__desc': {
            width: '100%',
        },
    },

    [breakpoints.down('sm')]: {
        paddingInline: '1rem',
        paddingBlock: '4rem',
        height: '650px',
        '& .header__Title': {
            fontSize: '3rem',
            width: '100%',
        },
        '& .header__desc': {
            width: '100%',
        },
    }
}))
