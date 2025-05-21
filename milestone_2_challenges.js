//challenge 1 sum of positives
function sumOfPositives(arr){
    let sum = 0;
    for(let i=0; i < arr.length; i++){
        if(arr[i] > 0){
            sum += arr[i];
        }
    }
    return sum;
}
//console.log(sumOfPositives(1,-3,5,-2,9,-8));//15


//challenge 2 find maximum value
function findMax(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
//console.log(findMax([3,7,2,9,5]));//9

//challenge 3 election winner
function findWinner(arr){
    let winner = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i].votes > winner.votes){
            winner=arr[i];
        }

    }
    return winner
}

    const candidates=[
        {name: "Alice", votes: 50},
        { name: "Bob", votes:75},
        {name:"charlie", votes:65}
    ]

//console.log(findWinner(candidates));//{ name: 'Bob', votes: 75 }

//challenge 4 longest word
function findLongestWord(arr){
    let longest="";
    for(i=0; i<arr.length; i++){
        if(arr[i].length > longest.length ){
            longest = arr[i];
        }
    }
    return longest
}
//console.log(findLongestWord(["apple", "banana", "pear", "grapefruit"]));//grapefruit

//challenge 5 count propeties
function countProperties(obj){
    let count= Object.keys(obj).length
    return count
}
console.log(countProperties({ name :"alice", age:25 , city: "paris"}));//3


