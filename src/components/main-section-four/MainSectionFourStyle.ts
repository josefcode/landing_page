import { styled } from "@mui/material";

export const MainSectionFourRoot = styled('section')(({ theme: { breakpoints } }) => ({
    paddingInline: '10rem',
   '& .mainSectionFour__cardFeatureWrapper': {
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'space-between',
    paddingBlockEnd: '5rem'
   },

   [breakpoints.down('md')]: {
    paddingInline: '1rem',
    '& .mainSectionFour__cardFeatureWrapper': {
    }
   },

   [breakpoints.down('sm')]: {
    paddingInline: '1rem',
    '& .mainSectionFour__cardFeatureWrapper': {
      flexDirection: 'column'
    }
   }
}))