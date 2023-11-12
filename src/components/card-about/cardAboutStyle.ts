import { styled } from "@mui/material";

export const AboutRoot = styled('div')(({ theme: { breakpoints, palette } }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& .aboutCard__image': {
      width: '460px',
      height: '400px',
      objectFit: 'cover'
    },

    '& .aboutCard__infoWrapper': {
       width: '400px'
    },

    '& .aboutCard__desc': {
        color: palette.primary.main,
      lineHeight: '1.4'
    },
    
    '& .aboutCard__title': {
        color: palette.primary.light,
        fontSize: '0.7rem',
        fontWeight: 900,
     },

     '& .aboutCard__subTitle': {
        color: palette.primary.main,
        fontSize: '2.5rem',
        paddingBlock: '2rem'
     }, 

     [breakpoints.down('md')]: {
        flexDirection: 'column',
        textAlign: 'center',

        '& .aboutCard__title': {
        paddingBlockStart: '1rem',
        
        },
        '& .aboutCard__image': {
        width: '100%',
        },
    },

     [breakpoints.down('sm')]: {
        flexDirection: 'column',
        textAlign: 'center',

        '& .aboutCard__title': {
        paddingBlockStart: '1rem',
        
        },
        '& .aboutCard__image': {
        width: '100%',
        },
    }
}))