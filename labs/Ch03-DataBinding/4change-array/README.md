# Chapter 3 DataBinding: Changing an array

## Objectives

- Overview in this lab, you will practice changing an array

## Steps

1. In your **app.component.ts** file, add a variable called **numbers: number[]**;

1. Inside of **ngOnInit**, set numbers to [1,2,3]

1. Within app.component.html, after the jumbotron use interpolation to display the numbers using:

   ```html
   <p>Featured Albums: {{ numbers }}</p>
   ```

1. In the interval timer, add 4 to the to numbers using **this.numbers.push(4)** and then use a console.log to display numbers.

1. Run your code and open the console. You can refresh to see it start from the beginning. Notice the array of numbers is growing, but the screen is not updating them on the screen.

1. To address this, you can instead use the assignment operator to copy the current array to a new array. Add this line of code after the console.log - it uses the spread operator to copy values form the array to a new array - and assign it back to the original variable.

   ```javascript
   this.numbers = [...this.numbers];
   ```

1. Make sure to save the file, you should now see all the numbers showing on the screen. You can refresh to see it start from the beginning.

1. Now, inside of the interval function, change the albumsArray[0] price property to be increased by ten dollars.

   ```javascript
   this.albumsArray[0].price += 10;
   ```

1. Can you see your changes on the screen? How did this compare to adding/removing items from an array?

    You may notice that due to JavaScript floating point calculations the display is odd. We will fix this later using functionality built into Angular.

1. Mark your work as complete
