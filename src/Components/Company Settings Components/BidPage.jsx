import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

const BidPage = () => {

    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        const inputValue = event.target.value.replace(/[^0-9]/g, '');
        setValue(inputValue);
    };

    return (
        <Box>
            <Box sx={{ width: '500px', paddingTop: '10px', paddingBottom: '30px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly', gap: '20px', alignItems: 'center', width: '100%' }}>
                    <Typography sx={{ textWrap: 'wrap', width: '35%' }}>Default Overhead & Markup Rate</Typography>
                    <TextField
                        fullWidth size="small" sx={{ width: '65%' }}
                        label="Enter Rate in %"
                        variant="outlined"
                        type="text"
                        value={value}
                        onChange={handleChange}
                        InputProps={{
                            inputProps: {
                                pattern: '[0-9]*',
                            },
                        }}
                    />
                </Box>
            </Box>

        </Box>
    )
}

export default BidPage