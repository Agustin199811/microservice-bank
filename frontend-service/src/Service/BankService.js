import axios from 'axios'
const bank_service="http://localhost:8080/bank";

class BankService {
    getAllAccounts(){
        return axios.get(`${bank_service}/accounts`);
    }

    getAllCustomers(){
        return axios.get(`${bank_service}/customers`);
    }

}

const bankServiceInstance = new BankService();
export default bankServiceInstance;