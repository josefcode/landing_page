import { styled } from "@mui/material";

export const CardFeatureRoot = styled("div")(({ theme: { breakpoints, palette } }) => ({
    width: '300px',
    color: palette.primary.main,

  '& .cardFeature__image': {
     height: '169px',
     width: '100%',
     objectFit: 'cover',
     marginBlockEnd: '1.5rem'
  },

  '& .cardFeature__title': {
    textTransform: 'uppercase',
    paddingBlockEnd: '1rem'
  }, 
  '& .cardFeature__desc': {
    lineHeight: '1.4'
  }, 
  [breakpoints.down('md')]: {
    width: '230px',
  },

  [breakpoints.down('sm')]: {
    width: '100%',
  }
}))