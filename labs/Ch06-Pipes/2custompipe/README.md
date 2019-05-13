# Chapter 6: Custom Pipes

## Objectives

- Practice creating a custom pipe

## Steps

1. Continue working in your **my-angular-albums** project. If you haven't completed previous exercises, you can copy the solution files from the last exercise.

1. From the integrated terminal execute the command

   ```bash
        ng g pipe reverse-str
   ```

   Examine the output. What did this command do? Look at the files. Use git if you need to compare the module file.

   This creates the correct structure of the Pipe class, and adds it to the module.

1. Modify the class so that the transform function looks like the following:

   - note that the decorator is used to assign the name to be used in templates

   ```typescript
   import { Pipe, PipeTransform } from "@angular/core";

   @Pipe({ name: "reverseStr" })
   export class ReverseStrPipe implements PipeTransform {
     transform(value: string): string {
       let newStr: string = "";
       for (var i = value.length - 1; i >= 0; i--) {
         newStr += value.charAt(i);
       }
       return newStr;
     }
   }
   ```

1. Examine the code above. Try to understand what it accomplishes and how it does it.

1. Now in the **app.component.html** add the use of | **reverseStr** after the title.

1. Verify on the browser that the pipe is working as intented

1. Mark your work as complete.