# Chapter 10 Forms: Template Driven - Add Album

## Objectives

- Use template form to add album

## Steps

1. Continue working in your **my-angular-albums** project. If you haven't completed previous exercises, you can copy the solution files from the last exercise.

2. In **app.module.ts** in the @NgModule decorator of core to import **FormsModule** to be able to create a template driven form. Make sure to import the module.

3. Create a component for adding albums.

   ```console
   $ ng g component albums/add-album
   ```

4. Add a route to Routes in **app-routing.module.ts** ensuring import is added correctly.

   ```typescript
     { path: "add-album", component: AddAlbumComponent }
   ```

5. Modify the navbar to add a link to the Add Page.

   ```html
   <a
     class="nav-item nav-link"
     routerLink="/add-album"
     routerLinkActive="active"
     >Add Album</a
   >
   ```

6. Test that the page loads.

7. In the same folder as this file, open the file **add-album.component.html** and copy its content over the content in your project's **add-album.component.html**. Do the same with **add-album.component.ts**

8. Notice how the use of [ngModel] sets up two way data binding

9. Update **album.service.ts** to include a method to add an album.

  ```typescript
    addAlbum(album: Album): Observable<Album> {
      return this.http.post<Album>(this.url, album);
    }

  ```

10. Notice the button cannot be submitted until the form is valid.

11. Test your changes in the browser

## Bonus

1.  Add a remove button on the details page that when clicked calls a method you create which uses a service to delete the item.
