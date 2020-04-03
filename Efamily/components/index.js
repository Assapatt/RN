import queryString from "query-string"
const rootUrl = 'https://www.fastmock.site/mock/5d48f7c1e71aebf904c741789a08ac90/efamily';

let myFetch = {
    get(url, queryParams) {
        url = rootUrl + url;
        if (queryParams) {
            url += "?" + queryString.stringify(queryParams)
        }
        return fetch(rootUrl + url)
            .then(res => res.json())


    },
    post(url, body) {
        return fetch(rootUrl + url, {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
    }
}

export { myFetch };