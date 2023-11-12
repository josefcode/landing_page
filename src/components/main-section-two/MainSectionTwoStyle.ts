import { styled } from "@mui/material"

export const SectionSubRoot = styled('div')(({ theme: { breakpoints, palette } }) => ({
    backgroundColor: '#e8fbfb',
    color: palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    height: '600px',
    '& .sectionTwo__title': {
        fontSize: '3rem',
        width: '600px',
        paddingBlockStart: '6rem'
    },

    '& .sectionTwo__disc': {
        paddingBlock: '3rem',
        width: '600px',
    },

    [breakpoints.down('sm')]: {
      '& .sectionTwo__title': {
        width: '100%'
      },

      '& .sectionTwo__disc': {
        width: '100%',
    },
    }
}))

export const Video = styled('figure')(({ theme: { breakpoints } }) => ({
    marginBlockStart: '-16rem',
    '& .sectionTwo__video': {
        width: '100%',
        height: '700px'
    },
    [breakpoints.down('md')]: {
      paddingInline: '1rem',
      marginBlockStart: '-20rem',
      marginBlockEnd: '5rem',
    },

    [breakpoints.down('sm')]: {
      paddingInline: '1rem',
      marginBlockStart: '-23rem',
    }
}))
