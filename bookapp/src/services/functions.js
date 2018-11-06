import axios from 'axios';

const makeQuery = (query, newStartIndex, maxResults, type, filter, printType, language) => {
    /** 
     * Create query url based on the query input and the filter parameters.
     * @param {string} query - The user input query.
     * @param {string} newStartIndex - The new start index for paging.
     * @return {string} full query URL.
     */
    var fullUrl = `https://www.googleapis.com/books/v1/volumes?q=` +
        query +
        `&maxResults=` + maxResults +
        `&startIndex=` + newStartIndex +
        `&orderBy=` + type;
    if (filter !== 'all') {
        fullUrl = fullUrl + `&filter=` + filter;
    }
    if (printType !== 'all') {
        fullUrl = fullUrl + `&printType=` + printType;
    }
    if (language !== 'all') {
        fullUrl = fullUrl + `&langRestrict=` + language;
    }
    return fullUrl
}

const sendRequest = (query, newStartIndex, maxResults, type, filter, printType, language, displayDisabledValue, previousButtonDisabledValue) => {
    /**
     * Send the AJAX request using Google API, and update the state.
     * @param {string} query - The user input query.
     * @param {string} buttonType - Selector to distinguish if the user use the search, previous or next button.
     */
    return axios.get(makeQuery(query, newStartIndex, maxResults, type, filter, printType, language))
        .then((res) => {
            return {
                res: res,
                displayDisabledValue: displayDisabledValue,
                previousButtonDisabledValue: previousButtonDisabledValue
            }
        })
        .catch((err) => {
            console.log(err)
        })
}

export function getBooks(query, startIndex, maxResults, type, filter, printType, language, buttonType) {
    /**
     * Redirect the API call depending the buttonType, and call the sendRequest function.
     * @param {string} query - The user input query.
     * @param {string} buttonType - Selector to distinguish if the user use the search, previous or next button.
     */
    if (buttonType === "next") {
        return sendRequest(query, startIndex, maxResults, type, filter, printType, language, true, false);
    } else if (buttonType === "prev") {
        var newPreviousButtonDisabledValue = false
        if (startIndex === 0) {
            newPreviousButtonDisabledValue = true
        }

        return sendRequest(query, startIndex, maxResults, type, filter, printType, language, true, newPreviousButtonDisabledValue);
    } else {
        let newStartIndex = 0;
        return sendRequest(query, newStartIndex, maxResults, type, filter, printType, language, true, true);
    }
}