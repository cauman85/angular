import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent} from './about/about.component';
import { AlbumListComponent } from './albums/album-list/album-list.component';
import { NotFoundComponent} from './not-found/not-found.component';
import { AlbumDetailsComponent } from './albums/album-details/album-details.component';


const routes: Routes = [
  { path: "", redirectTo: "/about", pathMatch: "full" },
  { path: "about", component: AboutComponent },
  { path: "albums", component: AlbumListComponent },
  { path: "albums/:id", component: AlbumDetailsComponent },
  { path: "**", component: NotFoundComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
