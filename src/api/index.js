

export const apiGet = (url) => () => (fetch(url).then(x => x.json()))