import React from 'react';
export interface IHeaderProps {
    promoImg: string,
}

const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
    const sectionStyle = {
        backgroundImage: `url("${props.promoImg})`,
        height: "87vh"
    };

  return (
    <div>
            <div className="promo-header" style={sectionStyle}>
                <h1>Promo</h1>
            </div>
    </div>
  );
}

export default Header;
