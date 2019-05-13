# Chapter 2: Add Bootstrap to the project

## Objectives

- Install Bootstrap as a dependency
- Reference bootstrap in angular-cli.json
- Test that bootstrap is available

## Steps

1. If you were unable to complete previous exercises, copy from the angular100-albums branch for the last exercise. Otherwise, keep working in your project.

1. From the VSCode terminal in your project use this command to install bootstrap

   ```bash
   npm install bootstrap -S
   ```

1. Modify **angular.json** to add bootstrap to the project by finding the section for styles and have these two entries:

   ```JSON
     "styles": [
     "./node_modules/bootstrap/dist/css/bootstrap.min.css",
     "src/styles.css"
     ]
   ```

1. Replace the current contents of **app.component.html** with this which displays a jumbotron:

   ```html
   <div style="text-align:center;">
     <h1 class="jumbotron my-5 mx-5">
       Welcome to {{ title }}!
     </h1>
   </div>
   ```

1. When you revisit the browser it should be updated with this content.

1. Mark your work as complete. (Name tent card, electronic status, etc.)
