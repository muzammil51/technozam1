import axios from 'axios'

const CONTACT_BASE_REST_API_URL = 'http://localhost:8081/api/v1/contacts';

class ContactService{

    getAllContacts(){
        return axios.get(CONTACT_BASE_REST_API_URL)
    }

    createContact(contact){
        return axios.post(CONTACT_BASE_REST_API_URL, contact)
    }

    getContactById(contactId){
        return axios.get(CONTACT_BASE_REST_API_URL + '/' + contactId);
    }

    updateContact(contactId, contact){
        return axios.put(CONTACT_BASE_REST_API_URL + '/' +contactId, contact);
    }

    deleteContact(contactId){
        return axios.delete(CONTACT_BASE_REST_API_URL + '/' + contactId);
    }
}

export default new ContactService();