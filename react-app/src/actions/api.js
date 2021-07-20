import axios from "axios"

const baseUrl = "http://localhost:5000/"

export default {
    dCandidate(url = baseUrl + 'DCandidate') {
        return {
            fetchAll: () => {
                return axios.get(`${url}/GetAllCandidates`)
            },
            fetchById: (id) => axios.get(`${url}/GetCandidateById?candidateId=` + id),
            create: (newRecord) => axios.put(`${url}/AddCandidate`, newRecord),
            update: (updateRecord) => axios.put(`${url}/UpdateCandidate`, updateRecord),
            delete: (id) => axios.delete(`${url}/DeleteCandidateById` + id)
        }
    }
}