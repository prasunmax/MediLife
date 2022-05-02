import axios from 'axios';

const signup_API_BASE_URL = "http://localhost:9090/registerNewUser";

const login_API_BASE_URL = "http://localhost:9090/authenticate";

class AddressService {



    createSignup(registerNewUser){
        return axios.post(signup_API_BASE_URL, registerNewUser);
    }

    createLogin(loginData){
        return axios.post(login_API_BASE_URL, loginData);
    }


}
export default new AddressService();