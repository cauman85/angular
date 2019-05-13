# Chapter 5 Directives: styling methods

## Objectives

- Use ngStyle to conditional set a style on albums

## Steps

1. Open the **album-card.component.html** file and find the div with class="card"

    ```html
    <div class="card"></div>
    ```

1. Modify the element with card-body, to have a style applied if the album is on sale.

   ```html
   <div class="card-body" [ngStyle]="{ 'background-color': album.onSale ? '#93df93' : '' }">
   >
     
   </div>
   ```

1. Mark your work as complete.
