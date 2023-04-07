import { API_BASE_URL, ACCESS_TOKEN } from '../constants';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};

export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}

export function getAllUser() {

    return request({
        url: API_BASE_URL + "/user/all",
        method: 'GET'
    });
}



export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}

// add into report problem

export function createReport(reportRequest){
    return request({
        url: API_BASE_URL + "/reports",
        method : 'POST',
        body: JSON.stringify(reportRequest),

    });
}

// add into contact us

export function createContact(contactRequest){
    return request({
        url: API_BASE_URL + "/contacts",
        method : 'POST',
        body: JSON.stringify(contactRequest),

    });
}


// 1. Short Question API calls

export function getAllShortText() {

    return request({
        url: API_BASE_URL + "/shorttexts",
        method: 'GET'
    });
}

export function getShortTextbyId(id) {

    return request({
        url: API_BASE_URL + "/shorttexts" + '/' + id,
        method: 'GET'
    });
}

export function getAllShortFile() {
    return request({
        url: API_BASE_URL + "/shortfiles",
        method: 'GET'
    });
}


export function getShortFilebyId(id) {

    return request({
        url: API_BASE_URL + "/shortfiles" + '/' + id,
        method: 'GET'
    });
}

// 2. Mcqs API calls

export function getAllMcqsText() {

    return request({
        url: API_BASE_URL + "/mcqstexts",
        method: 'GET'
    });
}

export function getMcqsTextbyId(id) {

    return request({
        url: API_BASE_URL + "/mcqstexts" + '/' + id,
        method: 'GET'
    });
}

export function getAllMcqsFile() {
    return request({
        url: API_BASE_URL + "/mcqsfiles",
        method: 'GET'
    });
}


export function getMcqsFilebyId(id) {

    return request({
        url: API_BASE_URL + "/mcqsfiles" + '/' + id,
        method: 'GET'
    });
}

// 3. True/False Question API calls

export function getAllTrueText() {

    return request({
        url: API_BASE_URL + "/truetexts",
        method: 'GET'
    });
}

export function getTrueTextbyId(id) {

    return request({
        url: API_BASE_URL + "/truetexts" + '/' + id,
        method: 'GET'
    });
}

export function getAllTrueFile() {
    return request({
        url: API_BASE_URL + "/truefiles",
        method: 'GET'
    });
}


export function getTrueFilebyId(id) {

    return request({
        url: API_BASE_URL + "/truefiles" + '/' + id,
        method: 'GET'
    });
}

// 4. Fill-in-Blanks Question API calls

export function getAllFillText() {

    return request({
        url: API_BASE_URL + "/filltexts",
        method: 'GET'
    });
}

export function getFillTextbyId(id) {

    return request({
        url: API_BASE_URL + "/filltexts" + '/' + id,
        method: 'GET'
    });
}

export function getAllFillFile() {
    return request({
        url: API_BASE_URL + "/fillfiles",
        method: 'GET'
    });
}

export function getFillFilebyId(id) {

    return request({
        url: API_BASE_URL + "/fillfiles" + '/' + id,
        method: 'GET'
    });
}

//5. Matching Question API calls

export function getAllMatchText() {

    return request({
        url: API_BASE_URL + "/matchtexts",
        method: 'GET'
    });
}

export function getMatchTextbyId(id) {

    return request({
        url: API_BASE_URL + "/matchtexts" + '/' + id,
        method: 'GET'
    });
}

export function getAllMatchFile() {
    return request({
        url: API_BASE_URL + "/matchfiles",
        method: 'GET'
    });
}


export function getMatchFilebyId(id) {

    return request({
        url: API_BASE_URL + "/matchfiles" + '/' + id,
        method: 'GET'
    });
}



// 6. Notes API calls

export function getAllNotesText() {

    return request({
        url: API_BASE_URL + "/notestexts",
        method: 'GET'
    });
}

export function getNotesTextbyId(id) {

    return request({
        url: API_BASE_URL + "/notestexts" + '/' + id,
        method: 'GET'
    });
}

export function getAllNotesFile() {
    return request({
        url: API_BASE_URL + "/notesfiles",
        method: 'GET'
    });
}


export function getNotesFilebyId(id) {

    return request({
        url: API_BASE_URL + "/notesfiles" + '/' + id,
        method: 'GET'
    });
}

