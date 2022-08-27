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

function addKeyAndValue(arr, key, value){
    arr.forEach(function(item,index){
        arr[index][key] = value;
    });
    return arr;
};

function vowCount(str){
    let vowels = ['a','e','i','o','u']
    let vObject = {};
    str = str.toLowerCase();
    Array.from(str).forEach(function(sItem){
        vowels.forEach(function(vItem){
            if(sItem==vItem){
                if(vObject[vItem] == undefined){
                    vObject[vItem] = 0
                };
                vObject[vItem] = Number(vObject[vItem]) + 1;
            }
        });
    });
    return vObject;
};