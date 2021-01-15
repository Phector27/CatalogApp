import axios from 'axios'

export default class PhoneService {
    constructor() {
        this.apiHandler = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/api/phones`,
            withCredentials: true
        })
    }

    getPhones = () => this.apiHandler.get('/phones')
    getPhone = phoneId => this.apiHandler.get(`/getOnePhone/${phoneId}`)
    newPhone = phoneInfo => this.apiHandler.post(`/newPhone`, phoneInfo)
    deletePhone = phoneIdDeleted => this.apiHandler.delete(`/delete/${phoneIdDeleted}`)
    editPhone = (phoneId, phoneInfo) => this.apiHandler.put(`/editPhone/${phoneId}`, phoneInfo)

}