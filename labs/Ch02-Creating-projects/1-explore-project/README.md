# Chapter 2: Explore Project

## Objectives

- Navigate and explore your current project
- Start and notice how Angular projects run

## Part 1 - start project and view output

1. Open your my-angular-albums project in VSCode. If you already had the project open and running, view the terminal and stop the server.

2. Open the file \src\index.html. Notice it is quite empty.

3. Look at the src directory - can you find polyfills.ts and styles.css?

4. Open the package.json file and look at the scripts being defined.

5. What does **npm start** do?

6. Open the VSCode terminal with control ` or View | Terminal and start the project using **npm start**

7. Notice the output in the terminal and look for:

   1. What port does the app start on? Where did you set that previously?
   2. How many chunks are created? Note the size of the polyfills.js and polyfills.map.
   3. How big are these files?

8. In the browser view the running project. Right click in the browser and choose View Source. (not the dev tools). Notice how the original source in the browser includes javascript files that were not in the original index.html.

9. Go back to your running project in the browser, right click and choose Inspect. Notice the message in the console. Which mode is the default mode that started? Notice under elements, a lot of DOM manipulation has happened to create the view.

10. In the Chrome debugger tools, click the Network tab. Right click on the browser reload button and choose hard reload. Notice the output in the network tab. It shows the request being made to the server and the JavaScript files being loaded which are used to display the components. The total size and number of milliseconds to load is also shown.

## Part 2 - start in production mode

1. Keep the first server running. We will run the project again now on a different port, and in production mode. Open a second terminal by clicking on the plus sign in the terminal window. Now issue this command:

   ```
   ng serve --port 4777 --prod=true -o
   ```

2. Examine the output in VSCode as the server loads. Compare to the other running server. You can switch back and forth by using the VSCode terminal dropdown and choosing the desired one.

3. Notice the way the files are similar but named differently.

4. Open the url http://localhost:4777/ in the browser. Look at the chrome dev tools console tab. How is this different? We are running in prod mode.

5. In the Chrome debugger tools, click the Network tab. Right click on the browser reload button and choose hard reload. Notice the output in the network tab. It shows the request being made to the server and the JavaScript files being loaded which are used to display the components. The total size and number of milliseconds to load is also shown.

During the production type build more work is done up front to do tree-shaking and pruning to make files smaller.
