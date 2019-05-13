import { Component, OnInit } from "@angular/core";
import { Album } from "./albums/album.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  albumsArray: Album[];
  numbers: number[];
  titleCounter = 1;
  title = 'angular100-demos';

  ngOnInit(): void {
    const interval = setInterval(() => this.titleCounter++, 1000);
    const interval2 = setInterval(() => this.albumsArray[0].price += 10, 1000);
    setTimeout(() => clearInterval(interval), 10000);
    setTimeout(() => clearInterval(interval2), 10000);
    this.numbers = [1, 2, 3];
    this.numbers.push(4);

    this.albumsArray = [
      {
        id: 1,
        artist: "Tremonti",
        albumName: "Dust",
        onSale: true,
        price: 11.99,
        currency: "USD",
        year: 2016,
        releaseDate: "April 29, 2016",
        recordingLocation: "Studio Barbarosa, Orlando, FL",
        genre: "Pop/Rock",
        duration: "43:18:00",
        url: "https://www.allmusic.com/album/dust-mw0002918360"
      },
      {
        id: 2,
        artist: "Bon Jovi",
        albumName: "7800 Fahrerenheit",
        onSale: false,
        price: 7,
        year: 1985,
        currency: "USD",
        releaseDate: "April 20, 1985",
        recordingLocation: "Warehouse, Philadelphia, PA",
        genre: "Pop/Rock",
        duration: "47:15:00",
        url: "https://www.allmusic.com/album/7800%C2%B0-fahrenheit-mw0000189199"
      },
      {
        id: 3,
        artist: "The Beatles",
        albumName: "The White Album",
        onSale: true,
        currency: "GBP",
        price: 24,
        year: 1968,
        releaseDate: "November 22, 1968",
        recordingLocation: "",
        genre: "Pop/Rock",
        duration: "1:33:43",
        url: "https://www.allmusic.com/album/the-beatles-white-album-mw0000418113"
      }];
     }
}
