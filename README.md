# facg6-basic-js-workshop
* Values & Types
    ```js
        //difference between 
        24;
        // and 
        "24";

        // explicit change of type (conversion)
        String(24);
        Number("24");
        // implicit change of type (coercion)
        24 + "";
    ```
* Variables 
    ```js
        //why this works?
        a = 24;
        var a;

        // though we prefer it like this
        // always declare variables before using them for less confusing code
        var a;
        a = 24;
        //or
        var a = 24;
    ```
* Truthy & Falsy values
    ```js
        // what are falsy values
        0 -0 NaN
        ""
        false
        null
        undefined
    ```
    ```js
        var a = 7;
        if (a) {
          console.log(a);
        }

        if (b) {
          console.log(b);
        }
    ```
    ```js
        let defaultName;
        // instead of:
        if (username) {
        defaultName = username;
        } else {
        defaultName = 'Stranger';
        }
        // we can just do this
        defaultName = username || 'Stranger';
    ```
* Difference between if-else & switch
    ```js
        // if-else are better for boolean values
        if (inputValue) {
          // do some action
        } else {
          // return empty value error
        }

        // switch are better for Multi way branching
        switch (tabValue) {
          case "welcome":
            // show welcome section
            break;
          case "main":
            // show main section
            break;
          case "about-us":
            // show about us section
            break;
          default:
            // show home section
        }
    ```
* Loops
    ```js
        // infinite loops
        // how to break the loop

        for (a = 0; a < 10; a = a + 1) {
          console.log(a);
        }

        // same thing we can do with while
        let a = 0;
        while (true) {
          console.log(a);
          a++;
          if (a >= 10) {
            break;
          }
        }
    ```
* Functions & scopes
    ```js
        // why we need function
        // ways to declare a function
        function foo () {}
        var foo = function () {}
        var foo = () => {}   // arrow function ES6
        
        // difference between declaring and calling
        // function returns a value
        // parameters vs arguments
        // scopes
        function foo (b) {
          var c = 7;
          a = a + 8;  //can access a from parent scope "global"
          return a/c;
        }
        var a = 5;
        console.log(b, c); // Reference Error
    ```
* Challenge: [source](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#practice)

  - Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
  - After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
  - Finally, check the amount against your bank account balance to see if you can afford it or not.
  - You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," as well as a variable for your "bank account balance.""
  - You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.
  - Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in "Input" earlier. You may prompt the user for their bank account balance, for example. Have fun and be creative!


