# Chapter 10 Forms: Reactive form - login

## Objectives

- Add an authentication service
- Create a login form
- Update Display when user is logged in 

## Steps

1. Continue working in your **my-angular-albums** project. If you haven't completed previous exercises, you can copy the solution files from the last exercise.

1. Copy the files from the **/services** folder from the same folder of this README.me into your project folder **/app/services**.
   1. Examine the contents of the **auth.service.ts** file. Currently it is hard-coded to true to login and false for logout.
   2. As in comments, it could be used with an API to validate against the login info.

1. In **app.module.ts** in the @NgModule decorator of core, import **ReactiveFormsModule** to be able to create a reactive form. Make sure the import of the module as an ES6 import is at the top of the file.

1. Copy the file from the **/shared** folder from the same folder of this README.me into your project folder **/app/shared**.   This defines an interface for login information.

1. Create a component for logging in, and have it added to **app.module.ts** by using the CLI

    ```command
      ng g c LoginComponent -it -is
    ```

1. View the files in the **/login** folder from the same folder of this README.me. Update your login files to match. 
    1. In the **login.component.html** notice the use of formGroup and how the error messages, and submit are worked with conditionally.
    2. In the **login.component.ts** file, notice the work with FormBuilder, and setting up of email and password along with Validators. Validators.required is built in, and ValidationService.emailValidator and ValidationService.passwordValidator are custom. 

1. Update the app-routing.module.ts file to add an entry for the path /login  

      ```javascript
          { path: "login", component: LoginComponent },
      ```

1. Update the **navbar.component.ts** and **navbar.component.html** to make the navbar dynamic so that the text displayed is either Login or Logout depending on the status. Refer to the **navbar** folder in this README document.

1. With these changes in place your code should now work. Clicking on login should bring up the login page. Once logged in, the navbar, which is subscribed to the service, should be updated to say Logout.