import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import React from 'react';

function RatingStars(props){
    const [value, setValue] = React.useState(2);
    return(
        <div>
            <Box
                sx={{
            '   & > legend': { mt: 2 },
            }}
            />
            <Rating name="read-only" value={value} readOnly />
        </div>
    )
}

export default RatingStars;
