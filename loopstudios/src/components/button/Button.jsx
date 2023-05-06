import React from 'react'
import {StylesButton} from './StyleButton';

const Button = ({display}) => {
  return (
    <StylesButton display={display}>
      <button className='boton__mobile'>see all</button>
    </StylesButton>
  )
}

export default Button
