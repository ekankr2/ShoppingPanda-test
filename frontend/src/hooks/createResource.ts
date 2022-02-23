const wrapPromise = (promise: Promise<any>) => {
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

export const createResource = (promise: Promise<any>) => {
    return wrapPromise(promise)
};