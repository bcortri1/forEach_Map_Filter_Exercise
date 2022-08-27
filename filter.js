function filterByValue(objArr, key){
    newArr = objArr.filter(function(value){
        return value[key] == true;
    });
    return newArr;
};

function find(arr, value){
    return arr.filter(function(aVal){
        return aVal == value;
    })[0];
};

function findInObj(objArr, key, searchVal){
    return objArr.filter(function(value){
        return value[key] == searchVal;
    })[0];
};

function removeVowels(str){
    let vowels = ['a','e','i','o','u']
    let newStr = '';
    str = str.toLowerCase();
    str = Array.from(str);
    str.filter(function(value){
        for(char of vowels){
            if(value == char){
                return false;
            }
        }
        newStr+=value;
        return true;
    });
    return newStr;
};
//Could use map
function doubleOddNumbers(arr){
    newArr = arr.filter(function(value){
        return (value % 2) !== 0;
    });
    newArr.forEach(function(value,index){
        newArr[index]= value*2;
    });
    return newArr;
};