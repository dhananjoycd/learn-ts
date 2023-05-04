# **Module - 02 = Basic Types of TypeScript _[ Hand note  by [DHANANJOY](https://www.facebook.com/DhananjoyChandraDas.Official) ]_**

1. Environment Setup for TS → Node, NVM, TSC

2. In TypeScript, primitive types are the most basic types that represent simple values. Here is a list of primitive types in TypeScript:

   - number: represents numeric values, including integers and floating-point numbers.
   - string: represents text values enclosed in single or double quotes.
   - boolean: represents a logical value, either true or false.
   - null: represents a null or empty value.
   - undefined: represents a value that has not been assigned.
   - symbol: represents a unique identifier that can be used as a key for object properties.
   - bigint: represents integers with arbitrary precision.

   ```typescript
   // Primitve types example
   let valobasa: string = "What is valobasa";
   valobasa = " Jibone nije k nije time deyar name e valobasa";

   // array in ts
   let valobasaDey: Number[];
   valobasaDey = [80, 50, 90, 88, 100];

   // tuple in ts
   type taderValobasa = [string, boolean, number];
   let valobasaKmn: taderValobasa = ["Raju", true, 88];

   // Object in ts
   const valobasaeProkar: {
     name: string;
     ace: boolean;
     rangeOfYear: number;
     manuserNam?: string; //Optional types --> it can be used or not
     // this section for set the type of data
   } = {
     ace: true,
     name: "Rongila Valobasa",
     rangeOfYear: 5,
     manuserNam: "Sokhina",
   };

   console.log(`Haire Valobasa ${valobasaeProkar.name}`);
   ```

3. Array VS Tupple →

   - Array and Tuple Types: TypeScript supports defining and using named array and tuple types, which can be useful for defining function signatures or interfaces.

     ```typescript
     type MyArray = number[];
     let arr: MyArray = [1, 2, 3];
     // Declaring an array using a named array type
     type MyTuple = [number, string];
     let tup: MyTuple = [1, "hello"];
     // Declaring a tuple using a named tuple type
     ```

   - Length: Arrays have a length property that reflects the number of elements in the array. Tuples do not have a length property, but you can use the length property of the array destructuring syntax to get the length of a tuple.

   Arrays and Tuples in TypeScript are both used to store a sequence of elements of different types, but they have some differences. Arrays are more flexible than tuples because they can be resized

4. Kinds of Function →

   ```typescript
   // Normal Function
   function add(num1: number, num2: number): number {
     return num1 + num2 - 2;
   }

   let sum = add(5, 8);

   // Arrow function
   const addArrow = (num1: number, num2: number): number => num1 + num2 - 2;
   ```

5. Kinds of Type → The type keyword in TypeScript can be used to simplify and clarify our code by defining new types or type aliases. By using type effectively, we can create more readable and maintainable code.

   ```typescript
   // 1.Union Type
   type pcParts = {
     name: string;
     price: number;
   };

   type expensivePcParts = {
     cpu: string;
     typeOfCpu: string;
     cpuPrice: number;
   };

   //2.Intersection Type

   type pcPackage = (pcParts | expensivePcParts) & {
     extraElement: string;
     others: string;
     isNedd: boolean;
   };

   //3.Example of Type Alias -->T using a type alias to avoid repetition
   type User = {
     name: string;
     age: number;
   };

   type Admin = User & {
     role: string;
   };

   type UserRole = "user" | "admin";

   type UserOrAdmin = User | Admin;

   // example of this type for using in object

   const amrComputerLagbe: pcPackage = {
     name: "DELL",
     price: 1000000,
     extraElement: "Mouse",
     others: " JANI NA KI LAGBE",
     isNedd: true,
     cpu: "intel",
     cpuPrice: 25000,
   };
   ```

6. Null , Uknnown , Never types →

   ```typescript
   // 1.null -->  user can assign null to any of the data types like string, number, etc.
   const findMe = (valu: string | null) => {
     if (valu === null) {
       console.log("paici re mamur betare");
     }
   };
   findMe(null);

   // 2.unknown --> suppose 1 taka = 80 dollar
   const taka2Dollar = (taka: unknown) => {
     if (typeof taka === "number") {
       let dollar: number = taka * 80;
       console.log(dollar);
     }
     if (typeof taka === "string") {
       let [amount, text] = taka.split(" ");
       let dollar = parseFloat(amount) * 80;
       console.log(dollar);
     } else {
       console.log("This type of data does not exist with us");
     }
   };

   // 3.never --> kon kicu return kore na

   const showEror = (message: string): never => {
     throw new Error(message);
   };

   // showEror("asle janar ecca error dey ki na")

   taka2Dollar(20);
   taka2Dollar("20 taka");
   taka2Dollar(true);
   console.log(`sotti bolte ${amrComputerLagbe.others} kom dame`);
   ```

7. KINDS OF TERNARY OPERATORS →
    ```typescript
    // General Ternary Operator --> it's called alternative of 'if..else'
    const future:boolean=true;
    let isfuture:string=future?"Keep on Your process":"Be concious about you";
    let isfuture1:number=future?100:30;
    console.log(isfuture,isfuture1);

    // Nulish Coeslancing Operator --> When Any value will be 'null' or 'udefined' then the nulish coeslancing Operatoe will be work  

    const isVarsityOpen=null;
    let aboutVarsity= isVarsityOpen??'Varsity is closed now';
    console.log(aboutVarsity)

## Now It's time to complete the module-03
let's explore...

<div style="color:yellow; background-color:black; border: 2px white solid; padding: 10px; text-align: center;"> 

<img src="./dhananjoy.jpg" alt="Dhananjoy's Photo">
 Happy Coding 😊 <br>
 Dhananjoy Chandra Das <br>
 - <i>Study at the Department of Mathematics in University of Rajshahi</i>

</div>