import React from 'react';
import UiLink from '../ui-link/UiLink';

const Menu: React.FC= () => {

  return (
    <nav className="mma-menu">
        <ul>
            <li>
                <UiLink url={'/'} title={'Home'} />
            </li>
            <li>
                <UiLink url={'/events/'} title={'UFC events'} />
            </li>
            <li>
                <UiLink url={'/fighters/'} title={'Fighters'} />
            </li>
        </ul>
  </nav>
  );
}

export default Menu;
