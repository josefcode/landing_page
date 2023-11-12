import { styled } from "@mui/system";

export const SectionRoot = styled('section')(({ theme: { breakpoints } }) => ({
    '& .sectionThree__title': {
      color: "#00c2c5",
      fontSize: '0.7rem',
      fontWeight: 900,
      paddingBlock: '8rem',
      textAlign: 'center',
    },

   '& .sectionThree__cardCommentWrapper': {
    display: 'flex',
    justifyContent: 'space-evenly',
    paddingInline: '10rem',
    alignItems: 'start',
    paddingBlockEnd: '5rem'
   },
   [breakpoints.down('md')]: {
    '& .sectionThree__title': {
      marginBlockStart: '-20rem',
      paddingBlockStart: '8rem',
      paddingBlockEnd: '3rem',
      textAlign: 'center',
    },

    '& .sectionThree__cardCommentWrapper': {
      gap: '4rem',
      paddingInline: '1rem',
      alignItems: 'start',
     },

   },

   [breakpoints.down('sm')]: {
    '& .sectionThree__title': {
      marginBlockStart: '-20rem',
      paddingBlockStart: '4rem',
      paddingBlockEnd: '3rem',
      textAlign: 'center',
    },

    '& .sectionThree__cardCommentWrapper': {
      flexDirection: 'column',
      gap: '3rem',
      paddingInline: '1rem',
      alignItems: 'start',
     },

   }
}))
