import { API_BASE_URL, ACCESS_TOKEN } from '../constants';

// Promise is an object that represents the eventual completion 
// (or failure) of an asynchronous operation and its resulting value.

// Promise is returned by the various functions that make HTTP requests using the fetch API

// When a function returns a Promise, it allows the caller to handle the result (or error) 
// of the asynchronous operation by chaining .then() and .catch() methods to the returned Promise. 
// This allows for more readable and maintainable asynchronous code, as the chain of .then() and 
// .catch() methods defines a clear flow of data and error handling.


// Define a function named 'request' that takes in an options object as a parameter
const request = (options) => {

    // Create a new Headers object with the 'Content-Type' header set to 'application/json'
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    
    // If an access token exists in local storage, add an 'Authorization' header to the headers object
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    // Set defaults to include the headers object
    const defaults = {headers: headers};

    // Merge the options object with the defaults object using Object.assign
    options = Object.assign({}, defaults, options);

    // Use the fetch API to make a request with the provided options object
    // If the response is not ok, reject with the json error object
    // Otherwise, return the json response object
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

// Define a function named 'getCurrentUser' that returns a Promise
// If no access token is found in local storage, reject the Promise with an error message
// Otherwise, make a GET request to the '/user/me' endpoint using the 'request' function and return the resulting Promise

export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    return request(
        {
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    }
    );
}

// Define a function named 'getAllUser' that makes a GET request to the '/user/all endpoint 
export function getAllUser() {

    return request({
        url: API_BASE_URL + "/user/all",
        method: 'GET'
    });
}


// Define a function named 'login' that takes in a loginRequest object and returns a Promise
// Make a POST request to the '/auth/login' endpoint using the 'request' 
// function and pass in the loginRequest object as the request body

export function login(loginRequest) {
    
    return request({
        url: API_BASE_URL + "/auth/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
        
    });
}


// Define a function named 'signup' that takes in a signupRequest object and returns a Promise
// Make a POST request to the '/auth/signup' endpoint using the 'request' function 
// and pass in the signupRequest object as the request body
export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}

// add values into report problem
export function createReport(reportRequest){
    return request({
        url: API_BASE_URL + "/reports",
        method : 'POST',
        body: JSON.stringify(reportRequest),

    });
}

// add values into contact us
export function createContact(contactRequest){
    return request({
        url: API_BASE_URL + "/contacts",
        method : 'POST',
        body: JSON.stringify(contactRequest),

    });
}


// 1. Short Question API calls to get text and file data

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

// 2. Mcqs API calls to get text and file data
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

// 3. True/False Question API calls to get text and file data

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

// 4. Fill-in-Blanks Question API calls to get text and file data

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

//5. Matching Question API calls to get text and file data

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



// 6. Notes API calls to get text and file data

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

