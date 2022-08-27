function doubleValues(arr){
    arr.array.forEach(function(item,index) {
        arr[index]= item*2;
    });
    return arr;
}