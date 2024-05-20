// Create a promise which should consume and create a scnenario to get data of user and also a promise to reuturn error.

const getUserData = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation to get user data
    setTimeout(() => {
        const userData = {
            name: 'John Doe',
            age: 25,
            email: 'johndoe@example.com'
        };
        const error = null; // Set to an error object if there is an error

        if (error) {
            reject(error); // Reject the promise with the error
        } else {
            resolve(userData); // Resolve the promise with the user data
        }
    }, 2000); // Simulating a delay of 2 seconds
});

getUserData
    .then(data => {
        console.log('User data:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });