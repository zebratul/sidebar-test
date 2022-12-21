import React from 'react';
import * as FaIcons from "react-icons/fa"


export const MyShops = (props) => {
  function addshop (params) {
    alert('this does nothing')
  };

  return(
  <div className='shops-container'>
    <button onClick={addshop} className='shops-container-button left'>  + Создать свой магазин</button>
    
    <div className='edit-shops'>
     <div className='grid-items'><h3>Магазин</h3></div>
     <div className='grid-items'><h3>Действие</h3></div>
     <div className='grid-items'>Магазин №1</div>
     <div className='grid-items'>
      <button onClick={addshop} className='shops-container-button'>   Редактировать</button>
      <button onClick={addshop} className='shops-container-button-del'>   X Редактировать</button>
     </div>
     <div className='grid-items'>Магазин №2</div>
     <div className='grid-items'>
      <button onClick={addshop} className='shops-container-button'>   Редактировать</button>
      <button onClick={addshop} className='shops-container-button-del'>   X Редактировать</button>
     </div>
    </div>
  </div>
)};
