type MimeType = keyof typeof mimeType;
type Method = 'POST' | 'GET';

const domain = location.origin + '/';
const mimeType = {
    json: 'application/json',
};

const fetchOption = (method: Method, mime: MimeType, body?: any): RequestInit => {
    return {
        method: method,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: { 'Content-Type': mimeType[mime] },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: method === 'POST' ? body : undefined,
    };
};

const fetchResponse = (response: Response) => {
    if (!response.ok)
        new Error('Communication error!');
    // Parse content if JSON
    const isJSON = response.headers.get('Content-Type') === mimeType.json;
    if (isJSON) return response.json();
    return response;
};

export default class Resource {

    static async get(url: string, mime: MimeType): Promise<Response> {
        url = domain + url;
        return await fetch(url, fetchOption('GET', mime)).then(fetchResponse);
    }

    static async post(url: string, mime: MimeType, body?: any): Promise<Response> {
        url = domain + url;
        return await fetch(url, fetchOption('POST', mime, body)).then(fetchResponse);
    }
};
