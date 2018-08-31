

export const apiGet = (url) => () => (fetch(url).then(x => x.json()))
export const apiPut = (url, id, obj) => () => (
    fetch(
        `${url}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(obj),
            headers: new Headers({ 'Content-type': 'application/json' })
        }).then(x => x.json()))