# Chapter 11 Testing

## Objectives

- Practice testing various classes of Angular

## Steps

1. Switch to the ANGULAR100-DEMOS project branch ch11-Testing. You will examine and execute tests from this project.

2. From the integrated terminal execute the script **ng test --code-coverage**. This will run all of the tests and give you a report in a Chrome window due to the configuration in karma. As changes are made tests are re-run. Keep this process running.

3. We will examine different types of tests now.

4. Testing a Pipe.

   1. Open the file **src\app\shared\title-case.pipe.ts**
   2. Notice how the pipe works to transform the data. Pipes are easy to test because they are simply a pure function.
   3. Open the file **src\app\shared\title-case.pipe.spec.ts**
   4. Note the different tests being run - calling the pipe's transform function with different data.
   5. Change describe on line 3 to be **fdescribe**.
   6. This will give this describe block focus and only these tests will be run now.
   7. When you save the file only these 5tests will be run.
   8. Remove the f from describe, save and notice all tests are no re-run.

5. Testing a Non-Injected Service

   1. Open the file **src\app\value.service.ts**
   2. Notice its contents contain various types of items returned. 
   3. The **ValueService** has no dependencies injected. This makes it even easier to test.
   4. Open the file **src\app\value.service.spec.ts** Note the different tests being run.
   5. The beforeEach is used to create an instance of the service.

6. Testing a Dependency Injected Service

   1. Open the file **src\app\master.service.ts**
   2. Notice it is dependency injected by the ValueService. 
   3. Open the file **src\app\master.service.spec.ts** and note the different tests being run.
   4. Notice how the beforeEach is used to create a spy - for the ValueService getValue method.
   5. Notice how TestBed.configureTestingModule is used to provide MasterService and inject the spy. Because Angular uses dependency injection it makes it much easier for testing, by passing in what we need in this manner.

   6. Note the syntax used in **it('#getValue should return stubbed value from a spy'**
      1. It calls GetValue and checks that the stub returned a value, tha the method was only called once, and that it is possible to call mostRecent to get back to the returned value after checking on number of calls made.


5. Testing a Component

   1. Open the file **src\app\lightswitch.component.ts**
   2. Notice its contents contain a boolean, and two functions.
   3. Open the file **src\app\lightswitch.component.spec.ts**
   4. Note the two tests being run. In these tests the new operator is used and the functions are called to test their logic works correctly.

6. Test a component that needs TestBed configuration.

   1. Open the file **src\app\banner.component.ts**
   2. Notice its contents contain a title and the template has an h1 
   3. Open the file **src\app\banner.component.spec.ts**
   4. Note the use of **beforeEach** to configure the Testing Module. The desired Component is declared in the declarations property similarly to how it would be used in AppModule. 
   5. Then a ComponentFixture is created by calling **TestBed.createComponent(BannerComponent)**
   6. The fixture contains functions for us to query for elements such as the shown h1.
   7. The content of the h1 is not known until **detectChanges** is run as it would be in the Angular app.
   8. At that point, the content will be set.

## Bonus

The Angular documentation is very feature rich with many examples of testing. Check it out if you are done before others, and definitely after class. https://angular.io/guide/testing
