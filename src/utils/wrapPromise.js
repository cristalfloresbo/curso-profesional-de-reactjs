const wrapPromise = (promise) => {
    let status = "pending";
    let response;

    let suspender = promise
        .then(
            (res) => {
                status = "success";
                response = res;
            },
            (err) => {
                status = "error";
                response = err;
            }
        )
        .catch((err) => {
            status = "error";
            response = err;
        });
    
    return {
        read() {
            if (status === "pending") {
                throw suspender;
            } else if (status === "error") {
                throw response;
            } else if (status === "success") {
                return response;
            }
        },
    };
};

export default wrapPromise;
