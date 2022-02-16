import axios from "axios";

const fetchPerson = () => {
    return axios.get('https://randomuser.me/api')
        .then(res => res.data.results[0])
    // return fetch("https://randomuser.me/api")
    //     .then(x => x.json())
    //     .then(x => x.results[0]);
};

const wrapPromise = (promise: any) => {
    let status = "pending";
    let result = "";
    let suspender = promise.then(
        (r: any) => {
            status = "success";
            result = r;
        },
        (e: any) => {
            status = "error";
            result = e;
        }
    );

    return {
        read() {
            if (status === "pending") {
                throw suspender;
            } else if (status === "error") {
                throw result;
            }

            return result;
        }
    };
};

export const randomNumber = () => {
    return new Promise(res => setTimeout(() => res(Math.random()), 3000));
};

export const createResource = () => {
    return {
        person: wrapPromise(fetchPerson()),
        num: wrapPromise(randomNumber())
    };
};