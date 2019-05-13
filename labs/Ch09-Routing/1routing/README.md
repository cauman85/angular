# Chapter 9 Routing: Work with Routing

## Objectives

- Use Routing in your application
- Add the use of the bootstrap javascript file for navbar functionality

## Steps

1. Continue working in your **my-angular-albums** project. If you haven't completed previous exercises, you can copy the solution files from the last exercise.

1. We are going to use Bootstrap to style the navbar and make it be responsive, which requires **bootstrap.min.js**, **jquery** and **popper**. We have already installed Bootstrap, so **bootstrap.min.js** is available, but we need to install jquery and popper. 

   ```console
   $ npm i popper jquery -S
   ```

1. Update **angular.json** in order to refer to the .js files. Find the **scripts** property and add these items to the array:

   ```javascript
    "scripts": [
        "node_modules/jquery/dist/jquery.min.js",
        "node_modules/popper.js/dist/umd/popper.min.js",
        "node_modules/bootstrap/dist/js/bootstrap.min.js"
      ],
   ```

1. Because **angular.json** was updated you need to restart the server for changes to be picked up. Do that now.

1. Let's create an **About** "page" for our application. Make the component have an inline template and inline styling.

   ```console
    $ ng g c about -it -is
   ```

1. Modify the **about.component.ts** template to display the following:

   ```html
   <div style="text-align:center;">
     <h1 class="jumbotron my-5 mx-5">
       Welcome to {{ title }}!
     </h1>
   </div>
   ```

1. Create the title property within **about.component.ts** and set it equal to **My Angular Albums**. We cannot reach this component yet.

1. Update **app.component.html** to simply be:

   ```html
   <app-navbar></app-navbar> 
   
   <router-outlet></router-outlet>
   ```

1. Now we will add paths to be loaded beneath the `<router-outlet>` element.

   Add 3 object elements to the Routes array in **app-routing.module.ts**:

   ```typescript
   const routes: Routes = [
     { path: "", redirectTo: "/about", pathMatch: "full" },
     { path: "about", component: AboutComponent },
     { path: "albums", component: AlbumListComponent }
   ];
   ```

1. Import the **AboutComponent** and **AlbumListComponent**.

   Remember that the convention is to have all @angular imports first, then a blank line, then all of the files we create and modify.

1. Open the browser for testing. If you load the URL of **http://localhost:xxxx/** you should see the about page. If you manually change the URL and add **http://localhost:xxxx/albums**, you should see the albums. If not fix your errors.

1. Let's create a navbar component to click links to change page views.

    ```console
    $ ng g c navbar -is
    ```

1. In **navbar.component.ts** create this title property

    ```typescript
    title: string = "My Albums Project";
    ```

1. Use this content for the new **navbar.component.html**. Note the use of **routerLink**

    ```html
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" routerLink="/">
        <img
          src="assets/album.gif"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt=""
        />
        {{ title }}
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="navbar-nav">
          <a 
            class="nav-item nav-link" 
            routerLink="/about" 
            routerLinkActive="active"
            >Home</a
          >
          <a
            class="nav-item nav-link"
            routerLink="/albums"
            routerLinkActive="active"
            >View Albums</a
          >
        </div>
      </div>
    </nav>
    ```

1. Copy the image **album.gif** from this README's folder into your projects assets folder.

1. Test your changes in the browser and ensure you have no errors. You should see the navbar with image. If you click the links they should work. Clicking the nav brand "My Albums Project" should bring back the album page.

1. Modify the **About** template to use a button to routerLink to albums.

    ```html
    <div class="jumbotron text-center">
      <h1 class="display-4">Welcome to {{ title }}!</h1>
      <button
        type="button"
        routerLink="/albums"
        class="btn btn-primary text-center mt-3 mx-auto"
      >
        View Albums
      </button>
    </div>
    ```

1. Try adding a non-existing URL in the browser bar such as **http://localhost:xxxx/abc**. View the console to see the error generated.

1. Generate a new component to be used for any bad urls.

    ```console
    ng g c Notfound -it -is
    ```

1. Update the **Notfound** template to have this content

    ```html
    <h1>Error 404</h1>
    <p>Page not found</p>
    ```

1. Update routes to add a wildcard path with asterix. This must go at the end of your path objects. It will be the match if no other url matches.

    ```typescript
    const routes: Routes = [
      { path: "", redirectTo: "/about", pathMatch: "full" },
      { path: "about", component: AboutComponent },
      { path: "albums", component: AlbumListComponent },
      { path: "**", component: NotfoundComponent, pathMatch: "full" }
    ];
    ```

    Make sure to import **NotfoundComponent**

1. Try adding a non-existing URL in the browser bar such as **http://localhost:xxxx/abc**.

1. This should now load the 404 Error page and still include the nav bar.

1. Mark your work as complete. 