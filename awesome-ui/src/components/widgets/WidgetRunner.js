import axios from 'axios';
const vm = require('vm');

const callback = (asd) => {
    console.log(asd);
};

export default {
    runSnippet : (snippet, config = {}) => {
        try {
            vm.runInNewContext(
                `const data = (function (request, config) {
                    ${snippet}
                } (axios, config));
                callback(data);`,
                { axios, callback, config },
                { timeout: 1000 }
            );
        } catch (err) {
            console.log(err);
        }
    }
};
