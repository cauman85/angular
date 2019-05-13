# Chapter 4 Passing Data: How to add and reference a new component

## Objectives

- Overview in this lab, you will practice creating a hierarchy of components, moving HTML template from AppComponent

## Steps

1. Continue working in your **my-angular-albums** project. If you haven't completed previous exercises, you can copy the solution files from the last exercise.

1. Open the integrated terminal. Create an **AlbumListComponent** by using this Angular CLI command. Note that g is short for generate, c is for component.

   ```
   ng g c albums/album-list
   ```

   Here we are specifying to create album-list inside of a directory called albums. Notice that a sub-directory is also created called album-list. If you wish to not have a subdirectory created you can use --flat.

1. Examine the updates made to the **app.module** class decorator. You can see the changes easily if you click on the Y shaped Source Control icon in VSCode and click the changed **app.module.ts** file.

1. From the **app.component.html** file, move the entire element that starts with `<div class="container">` to the new **album-list.component.html** file.

1. You may notice an error because of the need for albumsArray to be in the **album-list.component.ts** file. In that file, include the declaration of **albumsArray** in the class:

   ```typescript
   albumsArray: Album[];
   ```

1. To make this compile you must import Album into the AlbumListComponent file.

   ```javascript
   import { Album } from "../album.model";
   ```

    Remember that the convention is to have all @angular imports first, then a blank line, then all of the files we create and modify.

1. Move the **ngOnInit()** from **app.component.ts** into the **album-list.component.ts** file.

1. Remove the interval timer and setTimeout() functionality from **album-list.component.ts** file's **ngOnInit()**

1. Update the **app.component.ts** so that it only has this code:

    ```typescript
    import { Component } from "@angular/core";

    @Component({
      selector: "app-root",
      templateUrl: "./app.component.html",
      styleUrls: ["./app.component.css"]
    })
    export class AppComponent {
      title = "My Angular Albums";
    }
    ```

1. Update **app.component.html** so that it only has this code:

   ```html
   <div style="text-align:center;">
     <h1 class="jumbotron my-5 mx-5">Welcome to {{ title }}!</h1>
   </div>

   <app-album-list></app-album-list>

   <router-outlet></router-outlet>
   ```

   Note the reference to the selector of AlbumListComponent.

1. You should now see the albums in the browser, now being shown via the lst component.

1. Mark your work as complete. (Name tent card, electronic status, etc.)