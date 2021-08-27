import routes from './routes';
import axios from 'axios'

export const Add_Task = async (data) => {
    let res
    try {
        res = await axios.post(`${routes.TASKS.url}/details`, data)
        if (res.status === 200 || res.status === 201 || res.status === 304) {
            return { success: true, data: res.data }
        }
        else {
            return { success: false, data: [] }
        }
    } catch (error) {
        return { message: error?.response?.data, success: false }
    }
}