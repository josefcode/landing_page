import {styled} from "@mui/material"

export const FormRoot = styled('form')(({ theme: { palette } }) => ({
    position: 'relative',
    marginBlockStart: '-10rem',
    backgroundColor: palette.primary.main,
    width: '400px',
    height: 'fit-content',
    paddingInline: '2rem',
    paddingBlock: '2rem',
    display: 'flex',
    flexDirection: 'column',

    '& .form__title': {
        color: 'white',
        fontSize: '2rem',
        textAlign: 'center',
   
    },
    '& .form__desc': {
        color: 'white',
        textAlign: 'center',
        paddingBlock: '2rem'
    },
    '& .form__input': {
        paddingInline: '1rem',
        paddingBlock: '1rem',
        borderRadius: '6px',
        border: 'unset',
        marginBlockEnd: '1rem'
    },
    '& .form__button': {
        color: 'white',
        backgroundColor: palette.primary.light,
        paddingInline: '0.5rem',
        paddingBlock: '1rem',
        borderRadius: '6px',
        border: 'unset',
        marginBlockEnd: '1rem',
        fontSize: '1.5rem',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        cursor: 'pointer',

        '&:hover': {
            backgroundColor: '#04b2b5'
        }
    }
}))