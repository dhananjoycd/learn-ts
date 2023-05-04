

// Primitve types example
let valobasa:string = "What is valobasa";
valobasa= ' Jibone nije k nije time deyar name e valobasa'

// array in ts
let valobasaDey:Number[];
valobasaDey=[80,50,90,88,100];

// tuple in ts
type taderValobasa=[string, boolean, number];
let valobasaKmn:taderValobasa=['Raju',true,88];

// Object in ts
const valobasaeProkar:{
    name:string,
    ace:boolean,
    rangeOfYear:number,
    manuserNam?:string //Optional types --> it can be used or not
    // this section for set the type of data
}={
    ace: true,
    name: 'Rongila Valobasa',
    rangeOfYear: 5, 
    manuserNam: "Sokhina"
}

 console.log(`Haire Valobasa ${valobasaeProkar.name}`) ;