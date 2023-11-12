import { styled } from "@mui/material";

export const Root = styled('footer')(({ theme: { breakpoints,palette } }) => ({
    color: palette.primary.light,
    display : 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingInline: '10rem',
    paddingBlock: '3rem',
    backgroundColor: '#152f2e',
    marginBlockStart: '5rem',

    [breakpoints.down('sm')]: {
      flexDirection: 'column',
      paddingInline: '1rem',
      gap: '2rem'
    }
}))