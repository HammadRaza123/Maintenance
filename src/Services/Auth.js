import routes from './routes';
import axios from 'axios'

export const SignIn = async (data) => {
    let res
    try {
        res = await axios.post(`${routes.AUTH_USER.url}/login`, data)
        if (res.status === 200 || res.status === 201 || res.status === 304) {
            if (res.data.type === 'admin') {
                return { success: true, data: res.data }
            } else {
                return { success: false, data: [] }
            }
        }

        else {
            return { success: false, data: [] }
        }
    } catch (error) {
        return { message: error?.response?.data, success: false }
    }
}