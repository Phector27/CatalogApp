import axios from 'axios'

export default class FilesService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/api/files`,
            withCredentials: true
        })
    }

    
    uploadFile = fileForm => this.apiHandler.post('/upload', fileForm)
}