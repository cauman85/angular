# Chapter 8 Services: 2 Using subscribe

## Objectives

- Start a server and use HttpClient and subscribe to display it in the browser

## Steps

1. Continue working in your **my-angular-albums** project. If you haven't completed previous exercises, you can copy the solution files from the last exercise.

1. In this readme folder here is a folder called data with a file inside called **music-info.json**. Copy this directory to the root of your project folder - the same location as your **package.json**.

1. Install json server and npm-run-all packages.

   ```bash
   npm i json-server npm-run-all -S
   ```

1. Modify **package.json** scripts to start up json-server by pointing it at the music-info.json file.

   ```javascript
   "start": "run-p start-db start-app",
   "start-app": "ng serve --port 3333 -o",
   "start-db": "json-server --watch data/music-info.json --port 3334",
   ```

1. Start the project using **npm start**

1. The json-server and the angular server should both start. Test the url works for the resources, as listed in the console.

1. Inside the **app.module.ts** - add **HttpClientModule** to the **@NgModule** imports property. 

     ```typescript
     imports: [
          BrowserModule,
          AppRoutingModule,
          HttpClientModule
     ],
     ```

     Notice, you will also need to import **HttpClientModule**.

     Remember that the convention is to have all @angular imports first, then a blank line, then all of the files we create and modify.

1. Modify the **album.service** to be dependency injected with HttpClient, and use this to request the albums from the given URL.

     ```typescript
     import { Injectable } from '@angular/core';
     import { HttpClient } from '@angular/common/http';

     import { Observable } from 'rxjs';
     import { Album } from '../album.model';

     @Injectable({
     providedIn: 'root'
     })
     export class AlbumService {
          url = "http://localhost:3334/albums";

          constructor(private http: HttpClient) { }

          getAlbums(): Observable<Album[]> {
               return this.http.get<Album[]>(this.url);
          }
     }
     ```

   **NOTICE**: the return type is an Observable<Album[]>

1. In **album-list.component.ts**, change the method that calls the service to subscribe to the call. Notice the first argument of **.subscribe(** is to be called on success aka "happy path", and the second function will be called if there are any errors.

   ```typescript
   getAlbums() {
       this.albumService.getAlbums()
       .subscribe(
           albums => this.albumsArray = albums,
           error => console.log("Error: ", error));
   }
   ```

1. Check that your app is working, and mark your work as complete.
