# Chapter 6: Pipes

## Objectives

- Apply a 10% discount to albums that are on sale and format them nicely for the screen.
- Previously, the decimal places after simple math did not look great.
- Use a Pipe to format the price using the decimal pipe and currency pipe

## Steps

1. Continue working in your **my-angular-albums** project. If you haven't completed previous exercises, you can copy the solution files from the last exercise.

1. Ensure some of the data has currency of USD and if need be, set something to have currency of GBP

1. In **album-card.component.ts** add a property called **newPrice** to be type number.

1. In **ngOnInit()** check if the album is on sale and if it is - set newPrice to be 10% less.

   ```typescript
   if (this.album.onSale) {
   // Apply 10% discount
   this.newPrice = this.album.price - (this.album.price * .10);
   }
   ```

1. Update the album card component template to use the new price if the album is on sale.

    HINT: Add to current interpolation {{album.price}}, can use ternary operator to define, if album on sale, show new price, else album.price

1. Open this in the browser, how do the prices of the albums on sale look? 

    Lets fix the decimals and add the use of currency.

1. Replace what you currently have in **album-card.component.ts** with the following:

   ```html
   <h6>
     <span *ngIf="album.onSale" style="text-decoration:line-through;">
       {{album.price | number:'1.1-2' | currency:album.currency}}
     </span>
     {{ (album.onSale ? newPrice : album.price) | number:'1.2-2' |
     currency:album.currency }}
   </h6>
   ```

1. Once it is displaying correctly mark your work as complete.
