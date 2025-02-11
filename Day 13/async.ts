// console.log(1);
// setTimeout(() => console.log("task 2"), 3000);
// console.log(3);

const tryPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        const success = true
        if (success) {
            resolve("success")
        }else {
            reject("error")
        }
    }, 3000);
})

tryPromise 
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(()=> console.log("finally done")) //optional

const asyncAwait = async () => {
    console.log("Task 1");
    await tryPromise 
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(()=> console.log("finally done")) //optional

    console.log("Task 3");
    
}
// asyncAwait()

// try catch
const tryCatch = async () => {
try {
    console.log("Task 1");
    const res = await tryPromise;
    console.log(res);
    console.log("Task 3");
    
} catch (err) {
    console.log(err); 
    }
};

// tryCatch()

const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        if (!response.ok) throw "Failed to fetch data!"
        const users = await response.json()
        console.log(users);
        
    } catch (err) {
        console.log(err);
        
    }
}
fetchData()