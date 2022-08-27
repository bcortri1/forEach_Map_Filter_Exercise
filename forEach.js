function doubleValues(arr) {
    let newArr = Array.from(arr);
    newArr.forEach(function(item,index){
        newArr[index]= item*2;
    })
    return newArr;
};

function onlyEvenValues(arr) {
    let newArr=[];
    arr.forEach(function(item){
        if ((item % 2) == 0){
             newArr.push(item);
        };
    });
    return newArr;
};

function showFirstAndLast(arr){
    let newArr=[];
    arr.forEach(function(item){
        newArr.push(item.charAt(0) + item.charAt(item.length-1));
    });

    return newArr;
};