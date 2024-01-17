import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React, { Fragment, useState } from 'react'

const UnitPreference = () => {

    const [selectedUnit, setSelectedUnit] = useState('');

    const [currencySymbols, setCurrencySymbols] = useState('')

    const handleSymbolChange = (event) => {
        setCurrencySymbols(event.target.value)
    }

    const handleChange = (event) => {
        setSelectedUnit(event.target.value);
    };

    return (
        <Fragment>

            <Box sx={{ width: '500px', paddingTop:'10px', paddingBottom:'30px' }}>
                <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center', width: '100%' }}>
                    <Typography sx={{ textWrap: 'nowrap', width:'35%' }}>Default Unit for Length</Typography>
                    <FormControl fullWidth size="small" sx={{width:'65%'}}>
                        <InputLabel id="length-unit-label">Select Length Unit</InputLabel>
                        <Select
                            labelId="length-unit-label"
                            id="length-unit-select"
                            value={selectedUnit}
                            label="Select Length Unit"
                            onChange={handleChange}
                        >
                            <MenuItem value="cm">Centimeters (cm)</MenuItem>
                            <MenuItem value="m">Meters (m)</MenuItem>
                            <MenuItem value="km">Kilometers (km)</MenuItem>
                            <MenuItem value="in">Inches (in)</MenuItem>
                            <MenuItem value="ft">Feet (ft)</MenuItem>
                            <MenuItem value="yd">Yards (yd)</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>

            <Box sx={{ width: '500px' }}>
                <Box sx={{ display: 'flex',justifyContent:'space-evenly' , gap: '20px' , alignItems: 'center', width: '100%' }}>
                    <Typography sx={{ textWrap: 'nowrap', width:'35%' }}>Currency Symbols</Typography>
                    <FormControl fullWidth size="small" sx={{width:'65%'}}>
                        <InputLabel id="length-unit-label">Select Symbol</InputLabel>
                        <Select
                            labelId="length-unit-label"
                            id="length-unit-select"
                            value={currencySymbols}
                            label="Select Length Unit"
                            onChange={handleSymbolChange}
                        >
                            <MenuItem value="$">$</MenuItem>
                            <MenuItem value="Rs">Rs</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>

        </Fragment>
    )
}

export default UnitPreference