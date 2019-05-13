# Chapter 9 Routing: Work with Route parameters

## Objectives

- Start a server, use HttpClient and routing to dynamically create a page of details for each album

## Steps

1. Continue working in your **my-angular-albums** project. If you haven't completed previous exercises, you can copy the solution files from the last exercise.

    ### Create Album Details Component

1. Create a component for album details

   ```console
   $ ng g component albums/album-details
   ```

1. Update the **Route[]** to add an entry that will reach the placeholder details page saying it works. Use **albums/:id** which accepts an id parameter. Ensure the Component is imported.

   ```typescript
   { path: "albums/:id", component: AlbumDetailsComponent }
   ```

   NOTE: Make sure to put this above the wildcard path.

1. Test in the browser that if you use a URL similar to **localhost:xxxx/albums/2** that the page loads correctly

1. Update the button in **album-card.component.html** - instead of a (click) - use **routerLink** which builds the url using the id value from album.

   ```html
   <button
     class="btn btn-primary float-right"
     [routerLink]="['/albums', album.id]">
     See Details
   </button>
   ```

1. Test in the browser that clicking the album button loads the details page.

   ### Add a new method to the service to get one album

1. Let's create a function in **album.service.ts** which will get an album's details by adding the id value to the url.

   ```typescript
    getAlbumById(id: number): Observable<Album> {
      return this.http.get<Album>(this.url + "/" + id);
    }
   ```

   ### Update AlbumDetailsComponent to receive the parameter

1. Update **album details component** to have a property **album** of type **Album**, and to be dependency injected wih ActivatedRoute and the AlbumService.

   ```typescript
    album: Album;

    constructor(
      private route: ActivatedRoute,
      private albumService: AlbumService
    ) {}
   ```

   - Ensure the proper classes are imported. A quick way to do this is to mouse over one of the red wavy lines, click **Quick Fix**, and then hit **Add all missing imports**. Always ensure these shortcuts work as you intended and remember that the convention is to have all @angular imports first, then a blank line, then all of the files we create and modify.

1. In **ngOnInit()** use the passed in route to get the album id, and call the new AlbumService method.

   ```typescript
    ngOnInit() {
      const id = +this.route.snapshot.paramMap.get("id");
      this.albumService.getAlbumById(id).subscribe(
        album => {
          this.album = album;
        },
        error => console.log("Error: ", error)
      );
    }
   ```

   - Notice how the id is received using **route.snapshot.paramMap**

1. Update the **album.details.ts** to display album details on the page using the following code

    ```html
    <div class="container">
      <div class="row">
        <img
          *ngIf="album"
          class="float-right img-fluid"
          src="assets/img/{{ album.id }}.jpg"
          alt="{{ album?.album_name }}"
        />

        <ul style="list-style: none;">
          <li>
            <h2>{{ album?.album_name }}</h2>
          </li>
          <li>{{ album?.artist }}</li>
          <li>Year Released: {{ album?.year }}</li>
        </ul>
      </div>

      <div class="row">
        <h4>Tracks</h4>
        <table class="table">
          <thead class="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Duration</th>
            </tr>
          </thead>
          <tbody *ngIf="album">
            <tr *ngFor="let track of album.tracks">
              <th scope="row">{{ track.track_number }}</th>
              <td>{{ track.title }}</td>
              <td>{{ track.length }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    ```

1. Ensure your code is working in the browser.

1. Answer these questions by experimenting with changing the code.

    - Why are the question marks needed, if you remove what errors do you get in the console.

    - What happens if you remove the *ngIf from around the *ngFor?

1. Mark your work as complete.
