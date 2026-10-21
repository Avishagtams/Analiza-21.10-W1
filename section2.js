const arr = [
    ["X", "o", "x", "o", "X"],
    ["o", "x", "o", "X", "o"],
    ["X", "o", "o", "o", "x"],
    ["o", "o", "X", "x", "o"],
    ["x", "X", "o", "o", "X"]
  ];
let counter=0;

for(let i=0; i<5;i++){
    for(let j=0; j<5;j++){
        if (arr[i][j]=="X"){
            counter++;
            console.log(`(${i},${j})`)

        }
    }
}
console.log(`counter: ${counter}`)