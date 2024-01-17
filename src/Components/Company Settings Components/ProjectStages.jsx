import { Box, MenuItem, Paper, Select, Typography } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';

const ColorDisplay = styled(Paper)`
  height: 36px;
  width: 300px;
  border-radius: 47px;
`;

const ColorPickerContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

const ColorPickerSelect = styled(Select)`
  width: 100%;
`;

const colorOptions = [
    'rgba(0, 0, 0, 1)',
    'rgba(224, 230, 255, 1)',
    'rgba(3, 138, 0, 1)',
    'rgba(255, 221, 221, 1)',
    'rgba(251, 240, 208, 1)',
    'rgba(204, 51, 179, 1)',
    'rgba(239, 251, 249, 1)',
    'rgba(255, 81, 0, 1)',
];

const ColorMenuItem = styled(MenuItem)`
  display: flex;
  align-items: center;
`;

const ColorBlock = styled.div`
  width: 60px;
  height: 20px;
  border-radius: 4px;
  margin-right: 8px;
  background-color: ${(props) => props.color};
`;

const ProjectStages = () => {
    const [selectedColor, setSelectedColor] = useState(colorOptions[0]);

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
    };

    return (
        <Box>
            <ColorPickerContainer>
                <ColorDisplay style={{ borderColor: selectedColor, border: '2px solid', textAlign: 'center', color: 'black',display:'flex' ,alignItems:'center', justifyContent:'center' }}>
                    <Typography>Stage 1</Typography>
                </ColorDisplay>

                <ColorPickerSelect
                    sx={{ m: 1, maxWidth: 120, }}
                    size="small"
                    value={selectedColor}
                    onChange={handleColorChange}
                    renderValue={(selected) => (
                        <ColorBlock color={selected} />
                    )}
                >
                    <MenuItem disabled>Select Color</MenuItem>
                    {colorOptions.map((color, index) => (
                        <ColorMenuItem key={index} value={color}>
                            <ColorBlock color={color} />
                        </ColorMenuItem>
                    ))}
                </ColorPickerSelect>
                
            </ColorPickerContainer>
        </Box>
    );
};

export default ProjectStages;
