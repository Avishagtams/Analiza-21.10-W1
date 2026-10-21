const mixedArray = [42, "hello", true, null, { name: "Ali" }, "world", false, null, 100, [1, 2]];

let counter_number= 0;
let counter_string= 0;
let counter_object= 0;
let counter_boolean= 0;
let counter_null= 0;

for(let i=0; i<mixedArray.length;i++){
    if (mixedArray[i] === null) {
        counter_null++;
        continue; 
    }
    
      switch (typeof mixedArray[i]) {
        case "number":
          counter_number++;
          break;
    
        case "string":
          counter_string++;
          break;
    
        case "boolean":
          counter_boolean++;
          break;
    
        case "object":
          counter_object++;
          break;
    
        default:
          break;
      }
}


console.log(`count of numbers: ${counter_number}
count of strings: ${counter_string} 
count of objects: ${counter_object} 
count of booleans: ${counter_boolean} 
count of nulls: ${counter_null} 
   `)