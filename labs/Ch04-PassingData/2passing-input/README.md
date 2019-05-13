# Chapter 4 Passing Data: Using @Input in child components

## Objectives

- Overview in this lab, you will practice passing data to child components

## Steps

1. Continue working in your **my-angular-albums** project. If you haven't completed previous exercises, you can copy the solution files from the last exercise.

1. Open the integrated terminal. Create an **AlbumCardComponent** by using this Angular CLI command. Note that g is short for generate, c is for component.

   ```
   ng g c albums/album-card
   ```

1. Find the first element (with all of its child elements) in **album-list.component.html** that has

   ```html
   <div class="card"></div>
   ```

1. Move this code (about 16 lines) to the newly created **album-card.component.html** file replacing its placeholder content.

1. Search and replace in **album-card.component.html** the **albumsArray[0]** references to instead be **album**.

1. In **album-card.component.ts**, declare a member variable in the top of the class decleration

   ```typescript
    @Input()
    album: Album;
   ```

1. You may have a red wavy line under **@Input** and **Album**; fix these if you do.

1. In **album-list.component.html** update it to look like this:

   ```html
   <div class="container-fluid">
     <div class="card-deck">
       <app-album-card [album]="albumsArray[0]"></app-album-card>
       <app-album-card [album]="albumsArray[1]"></app-album-card>
       <app-album-card [album]="albumsArray[2]"></app-album-card>
     </div>
   </div>
   ```

1. In **album-card.component.css** add a rule that the class for card should be:

    ```css
    .card {
    width: 18rem;
    height: 30rem;
    margin: 5px;
    max-width: 100%;
    }
    ```

1. Add a rule to make all the album images the same size

    ```css
    .card-img-top {
    height: 16rem; 
    }
    ```

1. Add these rules to contain the body of the card if there's too much content and to implement a scroll bar if it does.

    ```css
    .card-text {
      word-wrap: break-word;
    }

    .scrollable{
      overflow-y: auto;
      max-height: 6.42rem;
    }
    ```

    To apply this functionality, in the **album-card.component.html** file, wrap a div around the card details within the card-body except for the card-title with the class **scrollable** as shown below

    ```html
    <div class="card-body">
      <h5 class="card-title">{{ album.artist }}</h5>
      <div class="scrollable">
        <h6 class="card-title">{{ album.albumName }}</h6>
        <h6 class="card-text">Released: {{ album.releaseDate }}</h6>
        <h6>{{ album.price }} {{ album.currency }}</h6>
      </div>
    </div>
    ```

    We will see an example of this in future labs, but if you'd like to test it you can fill the body of the card with a long piece of text.

1. Add a rule to create a shadow behind the card and another rule to darken the card when it's moused over.

    ```css
    .card {
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.3s;
    }
    /* On mouse-over, add a deeper shadow */
    .card:hover {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.42);
    }
    ```

    Test the effect on the browser and make sure it's working.

1.  Add these two rules to round the corners of the card

    ```css
    .card {
      border-radius: 5px; /* 5px rounded corners */
    }
    .card img {
      border-radius: 5px 5px 0 0;
    }
    ```

1. Add these 3 rules to make album images zoon in when the cursor is moused over them.

    ```css
    .inner {
      overflow: hidden; /*this will hide overflow, so image doesnt show outside of the card as it grows */
    }

    .inner img{
      transition: all 1.42s ease;
    }

    .inner:hover img {
      transform: scale(1.11);
    }
    ```

    To apply this functionality, in the **album-card.component.html** file, wrap a div around the album image with the class **inner**

    ```html
    <div class="card">
      <div class="inner">
        <img
    ```

    Test the effect on the browser and make sure it's working.

1. In the browser you should see the 3 different albums.

1. Mark your work as complete
