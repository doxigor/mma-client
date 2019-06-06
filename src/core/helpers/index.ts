import { useState, useEffect } from 'react';
import { IHttpResponse, httpGet } from '../http';
import { IUFCEvent } from '../../store/types';

function uid(): string {
    return Math.random().toString(36).substr(2, 9);
}

const useFetchEvent = (url: string) => {
    const [data, setData] = useState<IUFCEvent>();
    useEffect(() => {
        (async () => {
            let response: IHttpResponse<IUFCEvent>;
            let data;
            response = await httpGet<IUFCEvent>(url);
            data = response.parsedBody
            setData(data);
        })();
    }, [url]);
    return data;
};

export { uid, useFetchEvent }

