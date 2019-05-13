# Chapter 3 DataBinding: Change Detection

## Objectives

- Overview in this lab, you will create an interval timer which makes changes to a property, which updates the screen.

## Steps

1. In the **app.component.ts** file, create a property inside of the export class block called **titleCounter** and set it equal to 1

1. In the template, **app.component.html**, after the Welcome h1 - add a paragraph that displays: **Albums Title # {{titleCounter }}**

1. In the top of the **ngOnInit** block, create an interval timer, where every 2 seconds, you update the **titleCounter** by one. After 6 seconds cancel the interval.

   ```javascript
   const interval = setInterval(() => this.titleCounter++, 2000);

   setTimeout(() => clearInterval(interval), 6000);
   ```

   Notice the use of the keyword **this**. It is to use this in front of class properties

2. You should see the screen get updated every second with the new value

1. Mark your work as complete. 
