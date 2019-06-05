import React from 'react';
interface IErrorProps {
    genericError?: any;
}
const ErrorInfos: React.FC<IErrorProps> = (props: IErrorProps) => {

    return (
        <div className="promo page">
            {
                props.genericError ? <h2>Some error</h2> : null
            }
        </div>
    );
}
export default ErrorInfos;


