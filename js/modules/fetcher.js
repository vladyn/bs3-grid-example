'use strict';
export function addTextToBody(){
    const fetch = require('node-fetch');
    fetch('http://httpbin.org/get')
        .then(response => {console.log(`Response went ok with code %d ${response.status}`)}, error => {console.log(`Response went NOT ok with code %d ${error.message}`);
            return Promise.reject(error);})
        .catch(error => {console.error(`There is a problem with your request end with error: ${error.message}`)});
}




/** Does some stuff. */
export function baz(qux) {
    return qux.toLowerCase();
}

/** Does other stuff. */
export function foo(bar) {
    return bar.toUpperCase();
}