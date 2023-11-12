import { styled } from "@mui/material";

export const CardCommentRoot = styled('div')({
    width: '359px',
    '& .cardComment__user': {
        display: 'flex',
        marginBlockStart: '2rem',
        gap: '1rem'
    },

    '& .cardComment__image': {
        width: '50px',
        height: '50px',
        objectFit: 'cover'
    },
    '& .cardComment__comment': {
        fontSize: '1.5rem',
        
    },

    '& .cardComment__stars': {
     display: 'flex',
     gap: '0.5rem',
     listStyle: 'none'
    }
})