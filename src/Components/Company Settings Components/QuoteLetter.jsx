import { AddCircle } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const QuoteLetter = () => {
    return (
        <Box>
            <Typography>Cover Page</Typography>

            <Button component="label" variant="contained" startIcon={<AddCircle />} sx={{marginTop:'10px'}}>
                Upload file
                <VisuallyHiddenInput type="file" />
            </Button>
        </Box>
    )
}

export default QuoteLetter