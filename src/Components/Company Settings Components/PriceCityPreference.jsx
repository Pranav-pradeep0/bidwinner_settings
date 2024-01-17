import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React, { useState } from 'react'

const PriceCityPreference = () => {

    const [selectedUnit, setSelectedUnit] = useState('');

    const handleChange = (event) => {
        setSelectedUnit(event.target.value);
    };

    return (
        <Box>
            <Box sx={{ width: '500px', paddingTop: '10px', paddingBottom: '30px' }}>
                <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center', width: '100%' }}>
                    <Typography sx={{ textWrap: 'nowrap', width: '35%' }}>Default City</Typography>
                    <FormControl fullWidth size="small" sx={{ width: '65%' }}>
                        <InputLabel id="city-select-label">Select City</InputLabel>
                        <Select
                            labelId="city-select-label"
                            id="city-select-label"
                            value={selectedUnit}
                            label="Select City"
                            onChange={handleChange}
                        >
                            <MenuItem value="IN">India</MenuItem>
                            <MenuItem value="UK">UK</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
        </Box>
    )
}

export default PriceCityPreference