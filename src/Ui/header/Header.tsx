import React from 'react';
import {useState} from 'react';

import ReactTransiotionGroup from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';
export interface IHeaderProps {
    promoImg: string,
}

const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
    const sectionStyle = {
        backgroundImage: `url("${props.promoImg})`,
        height: "90vh"
    };
    const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <CSSTransition 
          in={showMessage} 
          timeout={1300} 
          onmountOnExit
          classNames="alert"
          >
            <div className="promo-header" style={sectionStyle}>
                <h1>Promo</h1>
            </div>
      </CSSTransition>
      <button onClick={() =>setShowMessage(true)}>Show Message</button>
      <button onClick={() =>setShowMessage(false)}>Hide Message</button>
    </div>
  );
}

export default Header;
