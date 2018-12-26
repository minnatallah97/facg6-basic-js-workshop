# Arrays and Objects

Differente between an array and an object in javascript
```js
console.log(typeof []); // how javascript sees an array
console.log(typeof {}); // how javascript sees an object
console.log(typeof {} === typeof []); // does it really think they're the same?
```
In JavaScript, almost everything is an object. Arrays are just special types of objects. (functions are essentially objects too);
```js
// how do we check if an array is actually an array?
console.log(Array.isArray([]));
```
Arrays are iterable objects. 
```js
// I want to show two results for one array.
// Let's say we have an hotel. Each room is larger than the one before it.
// We want 
const firstArray = [1,2,3,4,5,6];

for (let i = 0; i < firstArray.length; i++) {
  firstArray[i] += 1
}

console.log(firstArray);

// can I do another operation on the original array?
for (let i = 0; i < firstArray.length; i++) {
  firstArray[i] *= 2
}
console.log(firstArray);

// How do I solve this?
```

I want to filter a list of people from FACG.
```js
const facgMembers = ['ahmad','mohammed','abd','abd','ahmad','noureldean','ramy','ibraheem','ali','ahmad','ishak','ahmed','lubna'];

// I want to know how many people are named ahmad.
let counter = 0;
for (let i = 0; i < facgMembers.length; i++) {
  if (facgMembers[i] === 'ahmad' || facgMembers[i] === 'ahmed') {
    counter += 1;
  }
}

console.log(counter);

// I want to return a list of people named ahmad/ahmed.
let newArray = [];
for (let i = 0; i < facgMembers.length; i++) {
  if (facgMembers[i] === 'ahmad' || facgMembers[i] === 'ahmed') {
    newArray.push (facgMembers[i]);
  }
}

console.log(newArray);
```


```js

let shouldIndecesSwap;
    let n = arrayOfNumbers.length-1; // number of elements in the array
    let newArray=arrayOfNumbers;
    do {
        shouldIndecesSwap = false;
        for (let i=0; i < arrayOfNumbers.length; i++)
        {
            if (newArray[i] < newArray[i+1])
            {
               let elementToSwap = newArray[i];
               newArray[i] = newArray[i+1];
               newArray[i+1] = elementToSwap;
               shouldIndecesSwap = true;
            }
        }
        n--;
    } while (shouldIndecesSwap);
 return newArray; 
```
I want to sort an array of numbers.
```js
const arrayOfNumbers = [4,6,8,1,8,2,18,91,61,8,5,18,65,18,1,561,8,561,0];

const sortAscending = (myArray) => {
  let shouldIndecesSwap; // decides if we should swap the two elements.
  let numberOfElements = myArray.length-1; // number of elements in the array
  let newArray = myArray;
  do {
    shouldIndecesSwap = false; // default is that array elements should stay the same.
      for (let i = 0; i < numberOfElements; i++)
      {
        if (newArray[i] > newArray[i+1]) // if current element is greater than the next
          {
            let elementToSwap = newArray[i]; // store current element in the temporary variable.
              newArray[i] = newArray[i+1]; // change the value of current element.
              newArray[i+1] = elementToSwap; // set the next element to be the value stored in temporary variable.
              shouldIndecesSwap = true; // tell the function to swap the array.
          }
      }
      numberOfElements--; // tell the function that we have finished processing one element.
  } while (shouldIndecesSwap); // end of the do/while block.
 return newArray; // after the loop is over, we return the result.
}

//let's see how it works
console.log(sortAscending(arrayOfNumbers));
// to sort descending we only have to change one symbol.
```

## Enter Array Methods:
For loops are very fast ways to change arrays, but they require a lot of coding, and will take a lot of your time.
There are built-in methods that help you do the same things very easily and very quickly.

## Important:
- It it really good to get into the habit of understanding how something works before using it. It is not necessary, but it will make you a much better programmer.

Let's look at the first example about arrays.
```js
const firstArray = [1,2,3,4,5,6];

for (let i = 0; i < firstArray.length; i++) {
  firstArray[i] += 1
}

console.log(firstArray);

// can I do another operation on the original array?
for (let i = 0; i < firstArray.length; i++) {
  firstArray[i] *= 2
}
console.log(firstArray);

// How do I solve this?
```
To solve this, we had to create another array and do a different loop on it. It looks unclean.

### 1- Take a minute to read about [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

Array.map takes a function as parameter, and executes it on each element.
The most important thing to note about the ```map``` method, is that it creates a new array, and can be stored in a variable.
```js
const firstArray = [1,2,3,4,5,6];

firstArray.map(function(element) {
  element += 1
})

```
What do you think the firstArray will look like now? How do we get the changes to show?

It is important to understand that the ```map``` method will store the processing into a new array. So we have to store it in a variable.
```js
const newArray = firstArray.map(function(element) {
  element +=1
});

console.log(newArray); // did you expect this result? What do you think is wrong?

```

### 2- Take a minute to read about [Array.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
```js
const firstArray = [1,2,3,4,5,6];

firstArray.forEach(function(element) {
  element ++;
  console.log(element);
});

console.log('did we change the array?', firstArray); 
```

How can we get an array with the changes using forEach?

### 3- Take a minute to read about [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

Let's look at the previous example: 
```js
const facgMembers = ['ahmad','mohammed','abd','abd','ahmad','noureldean','ramy','ibraheem','ali','ahmad','ishak','ahmed','lubna'];

// I want to know how many people are named ahmad.
let counter = 0;
for (let i = 0; i < facgMembers.length; i++) {
  if (facgMembers[i] === 'ahmad' || facgMembers[i] === 'ahmed') {
    counter += 1;
  }
}

console.log(counter);

// I want to return a list of people named ahmad/ahmed.
let newArray = [];
for (let i = 0; i < facgMembers.length; i++) {
  if (facgMembers[i] === 'ahmad' || facgMembers[i] === 'ahmed') {
    newArray.push (facgMembers[i]);
  }
}

console.log(newArray);
```

This is a lot of code. It takes a while to code, and even more to read and understand.
We can use the ```filter``` method instead.
```js
const facgMembers = ['ahmad','mohammed','abd','abd','ahmad','noureldean','ramy','ibraheem','ali','ahmad','ishak','ahmed','lubna'];

// I want to know how many people are named ahmad and I want to see a list of them.
const filteredArray = facgMembers.filter((element) => element === 'ahmad' || element === 'ahmed');
console.log('list of people', filteredArray)
console.log('number of people', filteredArray.length);
```

### 4- Take a minute to read about [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort);

Let's look at the previous sort example.
```js
const arrayOfNumbers = [4,6,8,1,8,2,18,91,61,8,5,18,65,18,1,561,8,561,0];

const sortAscending = (myArray) => {
  let shouldIndecesSwap; // decides if we should swap the two elements.
  let numberOfElements = myArray.length-1; // number of elements in the array
  let newArray = myArray;
  do {
    shouldIndecesSwap = false; // default is that array elements should stay the same.
      for (let i = 0; i < numberOfElements; i++)
      {
        if (newArray[i] > newArray[i+1]) // if current element is greater than the next
          {
            let elementToSwap = newArray[i]; // store current element in the temporary variable.
              newArray[i] = newArray[i+1]; // change the value of current element.
              newArray[i+1] = elementToSwap; // set the next element to be the value stored in temporary variable.
              shouldIndecesSwap = true; // tell the function to swap the array.
          }
      }
      numberOfElements--; // tell the function that we have finished processing one element.
  } while (shouldIndecesSwap); // end of the do/while block.
 return newArray; // after the loop is over, we return the result.
}
```

This code has three problems.
1- It's a lot of code, which means there's more chance I'll be making a mistake. One typo is all it takes to break this.
2- My team might find it difficult to understand this.
3- It's a very slow code. This is the slowest way to sort an array of numbers.

Instead, we can use the ```sort``` method, which will perform one of the quickest sorts available. It will also save time coding and reading.
We also know that the function will not have any errors.

```js
const arrayOfNumbers = [4,6,8,1,8,2,18,91,61,8,5,18,65,18,1,561,8,561,0];
const sortedAscending = arrayOfNumbers.sort((a, b) => a - b); // ascending array.
const sortedDescending = arrayOfNumbers.sort((a, b) => b - a); // descending array.
```

We took the sorting from 20 lines to 2 for ascending. And from about 30 to 3 for both ascending and descending.
If we want to include things like sorting strings, this will get infinitely more complex.
### Bonus: What do you think will happen if the array of number was an array of string numbers?

### 5- take a minute to read about [Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) 

Reduce is a little bit different from the other methods. It takes an array and returns one value only. So how does it work?
```js
const array = [1,2,3,4,5,77,9,1];
let total = 0;

// iterate over the array and return the sum
for (let i = 0; i < array.length; i++) {
  total += array[i];
}
console.log(total) // we have the total sum of the array numbers.
```
Let's see how we can use reduce to do it a little cleaner and quicker.
```js
const reducer = (accumulator, currentValue) => accumulator + currentValue; // function that takes 2 values and sums them.
console.log(array.reduce(reducer)); // loops over the array and summs current index with the value in the accumulator.
```
Note: ```Array.reduce``` is a lot more complex than this and will be useful to read about during the course.

## Useful Array methods (that I probably can't code on my own).
### - Array.slice vs Array.splice.
### - Array.reverse.

### We will talk about objects another day.