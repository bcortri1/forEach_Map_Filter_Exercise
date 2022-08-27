function doubleValuesWithMap(arr){

    return arr.map(function(value){
        return value*2;
    });
};

function valTimesIndex(arr){
    return arr.map(function(value,index){
        return value*index;
    });
};

function extractKey(objArr, key){
    return objArr.map(function(value){
        return value[key];
    });
};

function extractFullName(objArr){
    return objArr.map(function(value){
        return value['first'] + ' ' +value['last'];
    });
};