# Chapter 8 Services: 3 AsyncPipe

## Objectives

- Instead of async pipe now use subscribe to get the data

## Steps

1. Continue working in your **my-angular-albums** project. If you haven't completed previous exercises, you can copy the solution files from the last exercise.

1. Change the get method that calls the service to get the albums back to what it was before, by removing the subscribe

     ```typescript
     getAlbums() {
          this.albumsArray = this.albumService.getAlbums();
     }
     ```

1. In the **AlbumListComponent** change the data type of the albums from **Album[]** to an **Observable** of type Album[].

     ```typescript
     albumsArray: Observable<Album[]>;
     ```

     Notice, you will also need to import **Observable**.

1. In the **album-list.component.html** use the async pipe

     ```html
     <app-album-card 
          *ngFor="let album of albumsArray | async"
     ```

1. Check that your app is working, and mark your work as complete