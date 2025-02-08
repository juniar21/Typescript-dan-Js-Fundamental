function reverseProperty(arr: Array<{ [key: string]: any }>): Array<{ [key: string]: any }> {
    return arr.map(obj => {
        const reversedObj: { [key: string]: any } = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                reversedObj[obj[key]] = key;
            }
        }
        return reversedObj;
    });
}

// Example usage:
const input = [{ name: 'David', age: 20 }];
const output = reverseProperty(input);
console.log(output); // [{ David: 'name', 20: 'age' }]