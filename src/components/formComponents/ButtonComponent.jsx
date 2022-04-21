import React from "react";
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

export const ButtonComponent = ({disabled}) =>{
    ButtonComponent.propTypes = {
        disabled: PropTypes.bool.isRequired
    }
    
    return (
        <Button variant="contained" type='submit' disabled={disabled}>click me</Button>
    )
  
}