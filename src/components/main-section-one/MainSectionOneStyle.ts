import { styled } from "@mui/material"

export const SectionOneRoot = styled('section')(({ theme: { breakpoints } }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    paddingInline: '10rem',

    [breakpoints.down('md')]: {
        paddingInline: '1rem',
        flexDirection: 'column',

        ul : {
         order: 2,
        },

        form: {
            order: 1,
            width: '100%'
        }
    },

    [breakpoints.down('sm')]: {
        paddingInline: '1rem',
        flexDirection: 'column',

        ul : {
         order: 2,
        },

        form: {
            order: 1,
            width: '100%'
        }
    }
}))

export const ListRoot = styled('ul')(({ theme: { breakpoints, palette } }) => ({
    listStyle: 'none',
    paddingBlock: '5rem',

    '& .list__item': {
        display: 'flex',
        paddingBlock: '1rem',
        alignItems: 'start',
        gap: '1rem',
        
        
        '& .list__title': {
            paddingBlockEnd: '1rem',
            color: palette.primary.main,
        },

        '& .list__desc': {
            color: palette.primary.main,
           width: '400px'
        }
    },

    [breakpoints.down('md')]: {
        '& .list__item': {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',

            '& .list__desc': {
                width: '100%'
             }
        },
    },

    [breakpoints.down('sm')]: {
        '& .list__item': {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',

            '& .list__desc': {
                width: '100%'
             }
        },
    }
}))
