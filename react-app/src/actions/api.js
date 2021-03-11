import axios from "axios"

const baseUrl = "http://somebaseurl.com/"

export default {
    dCandidate(url = baseUrl + 'candidate') {
        return {
            fetchAll : () => {
                return axios.get(url)
            },
            fetchById : (id) => axios.get(url+id),
            create : (newRecord) => axios.post(url, newRecord),
            update : (updateRecord) => axios.put(url, updateRecord),
            delete : (id) => axios.delete(url + id)
        }
    }
}