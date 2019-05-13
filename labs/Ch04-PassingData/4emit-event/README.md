# Chapter 4 Passing Data: Emit Event

## Objectives

- Respond to a click event of a button by raising an alert to PARENT component

## Steps

1. Continue working in your **my-angular-albums** project. If you haven't completed previous exercises, you can copy the solution files from the last exercise.

1. In **album-card.component.ts** create a member variable which is an EventEmitter. You will need to make sure you have all of the needed imports. (Output, EventEmitter)

   ```javascript
    @Output()
    albumClicked: EventEmitter<Album> = new EventEmitter<Album>();
   ```

1. Modify the **showAlbum** function to be:

   ```javascript
    showAlbum() {
        this.albumClicked.emit(this.album);
    }
   ```

1. In **album-list.component.html**, modify the child components to look like this - which indicate the parent wants to listen for albumClicked events, and when they occur to call parentFunctionHandler

   ```html
   <app-album-card
     [album]="albumsArray[0]"
     (albumClicked)="parentFunctionHandler($event)"
   ></app-album-card>
   <app-album-card
     [album]="albumsArray[1]"
     (albumClicked)="parentFunctionHandler($event)"
   ></app-album-card>
   <app-album-card
     [album]="albumsArray[2]"
     (albumClicked)="parentFunctionHandler($event)"
   ></app-album-card>
   ```

1. In **album-list.component.ts**, add the parentFunctionHandler function **after** the ngOnInit() function.

   ```javascript
   parentFunctionHandler(album) {
       alert('Album ' + album.albumName + ' was sent from the album card component');
   }
   ```

1. Now in the browser when you click - an alert should be raised with the message from the parent.

1. Once this is working, mark your work as complete.

## Bonus

1. After the jumbotron, display on the screen the id and name of the last clicked album.
