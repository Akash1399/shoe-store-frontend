import { API_URL, STRAPI_API_TOKEN } from './urls'

export const fetchDataFromApi = async (endPoint) => {
    const option = {
        method: "GET",
        headers: {
            Authorization: 'Bearer ' + STRAPI_API_TOKEN
        }
    }

    const res = await fetch(`${API_URL}${endPoint}`, option)
    const data = await res.json()


    return data
}