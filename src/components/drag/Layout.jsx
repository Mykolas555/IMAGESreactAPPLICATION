import React from 'react';
import Draggable from 'react-draggable';
import style1 from '../../images/ks.png';
import style2 from '../../images/rutulys.png';
import style3 from '../../images/kvadratai.png';
import style4 from '../../images/kvadratas.png';
import style5 from '../../images/kvadratasRutulys.png';
import style6 from '../../images/sk.png';
import style7 from '../../images/skersaiKvadratai.png';
import style8 from '../../images/staciakampiai.png';
import './layout.scss';

const Layout = ({  onStyleClick }) => {
   
  const handleDrag = (e, ui) => {
  };

  const handleClick = (style) => {
    onStyleClick(style);
  };

  return (
    <Draggable handle=".draggable-handle" onDrag={handleDrag}
      defaultPosition={{ x: 20, y: 0 }} bounds="parent">
      <div className="draggable-container">
        <div className="draggable-handle">
          <h2>Išdėstymas</h2>
        </div>
        <div className="draggable-content">
          <div>
            <img className='styleIMG' src={style1} alt="Style 1" onClick={() => handleClick('')}/>
            <img className='styleIMG' src={style2} alt="Style 2" onClick={() => handleClick('stylea')} />
            <img className='styleIMG' src={style3} alt="Style 1" onClick={() => handleClick('styleb')}/>
            <img className='styleIMG' src={style4} alt="Style 2" onClick={() => handleClick('stylec')}/>
            <img className='styleIMG' src={style5} alt="Style 1" onClick={() => handleClick('styled')}/>
            <img className='styleIMG' src={style6} alt="Style 2" onClick={() => handleClick('stylee')}/>
            <img className='styleIMG' src={style7} alt="Style 1" onClick={() => handleClick('stylef')}/>
            <img className='styleIMG' src={style8} alt="Style 2" onClick={() => handleClick('styleg')}/>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Layout;
