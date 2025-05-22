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
//console.log(countProperties({ name :"alice", age:25 , city: "paris"}));//3

//chalenge 6 filter by length
function filterBylength(arr,minlength){
    let items= arr.filter(i=> i.length>= minlength)
        return items

}
//console.log(filterBylength(["cat", "giraffe", "hippo", "dog", "elephant" ] ,5));//[ 'giraffe', 'hippo', 'elephant' ]

//challenge 7
function sumEvenNumbers(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 === 0){
            sum +=arr[i];
        }
    }
    return sum
}
//console.log(sumEvenNumbers([1 ,2 ,3 , 4, 5, 6]));//12

//challenge 8 difference between sum of even and odd numbers
function differenceOddEven(arr){
    let sumeven = 0;
    let sumodd = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 === 0){
            sumeven +=arr[i];
        }
        else{
            sumodd +=arr[i];
        }
    }
    return sumeven - sumodd;
}
//console.log(differenceOddEven([1, 2, 3, 4, 5, 6]));//3

//challenge 9 count truthy
function countTruthy(obj){
    let sum=0;
    for (key in obj){
        if(obj[key]){
            sum ++
        }
    }
    return sum
}
console.log(countTruthy({ a:0, b:"Hello", c:false, d:42, e:null}));//2


// challenge 10 average of numbers
function average(arr){
    let total=0;
    for(let i=0; i<arr.length; i++){
        total += arr[i];
    }
    return total/arr.length;
    
}
//console.log(average([2, 4, 6, 8]));//5

// challenge 11 linear search
function linearSearch(arr,val){
    for(i=0; i<arr.length; i++){
        if(arr[i] === val){
    
                return i;
            }
            
    }
    return -1
}
//console.log(linearSearch([5, 3, 7, 1, 4], 7));//2
//console.log(linearSearch([5, 3, 7, 1, 4], 10));//-1

//challenge 12 reverse linear search
function reverseLinearSearch(arr,val){
    let lastindex=-1;
    for(let i=0; i<arr.length; i++){
        if(arr[i] === val){
            lastindex = i;
        }
    }
    return lastindex
}
//console.log(reverseLinearSearch([5, 3, 7, 1, 4, 7], 7));//5
//console.log(reverseLinearSearch([5, 3, 7, 1,4],10));//-1

//challenge 13 linear search all indices
function linearSearchAll(arr,val){
    let allIndices=[];
    for(let i=0; i<arr.length; i++){
        if(arr[i] == val){
            allIndices.push(i)
        }
    }
    return allIndices
}
//console.log(linearSearchAll([5, 3, 7, 1, 4, 7],7));//[ 2, 5 ]
//console.log(linearSearchAll([5, 3, 7, 1, 4],10));//[]

//challenge 14 count occurences
function occurences(arr){
    let occurences= {};
    arr.forEach((element) =>{
        if (element in occurences) {
            occurences [element]+= 1;
            return
        }
        occurences [element] = 1;

    });
    return occurences;
}
//console.log(occurences(["apples", "bananas", "apples", "oranges", "apples"]));//{ apples: 3, bananas: 1, oranges: 1 }

//challenge 15 remove duplicates
function removeDuplicates(arr){
    let uniqueArray= [];
    for (let i=0; i<arr.length; i++){
        if(!uniqueArray.includes (arr[i])){
            uniqueArray.push (arr[i]);

        }
    }
    return uniqueArray;
}
//console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]));//[ 1, 2, 3, 4, 5 ]



