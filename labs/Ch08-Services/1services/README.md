# Chapter 8 Services: 1 Use a service to return data for use in component

## Objectives

- Define a service, which returns hard-coded data
- Use dependency injection to inject service to component
- Call the service to get the data

## Steps

1. Continue working in your **my-angular-albums** project. If you haven't completed previous exercises, you can copy the solution files from the last exercise.

1. Use the integrated terminal to generate a service which returns an array of albums.

   ```
   ng g s albums/shared/album
   ```

1. Update the content of the service to

   ```typescript
   import { Injectable } from "@angular/core";

   import { ALBUMS } from "../albums.data";

   @Injectable({
     providedIn: "root"
   })
   export class AlbumService {
     constructor() {}

     getAlbums() {
       return ALBUMS;
     }
   }
   ```

   Notice the use of providedIn - this is new since Angular 6. With it - you do not need to add the service within the module.

1. Update the **album list component** to be dependency injected via the constructor.

   1. import the service
   2. Add it as an argument to the constructor

   ```typescript
   constructor(private albumService: AlbumService) { };
   ```

1. Add these functions to call the service's getAlbums() and set it to your albumsArray property

   ```typescript
    getAlbums() {
      this.albumsArray = this.albumService.getAlbums();
    }

    ngOnInit() {
      this.getAlbums();
    }
   ```

1. Check that your code works, and mark your work as complete.
