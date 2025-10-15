import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonComponent = ({ text, onClick }) => {
    return (
        <Button className='btn-info' onClick={onClick}>{text}</Button>    
    );
};

export default ButtonComponent;