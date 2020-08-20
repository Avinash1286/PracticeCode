// console.log("Regular Expression");
let reg=/number(?!the)/;
let str="the i $$#war number the 999"
let result=reg.exec(str);
console.log("Result from exec():",result);
if(reg.test(str)){
   console.log(`The String ${str} Match the expression ${reg.source}`)
}
else{
    console.log(`The String ${str} does not Match the expression ${reg.source}`)
}