var ar1 = [1,2,3,4,5,6,7] //sorted
var ar2 = [7,6,5,4,3,2,1] //sorted
var ar3 = [9,2,3,1,5,8,6,7] //not sorted
var ar4 = [9,1,2,3,4,5]

function isSorted(arr){
    if(arr.length <= 1) return 0; 
    const direction = arr[1] - arr[0]; //gives me whether the array is decreasing or increasing if its sorted
    for(let g=2;g<arr.length;g++){
        if((arr[g] - arr[g-1]) * direction < 0) return 0
    }
    return Math.sign(direction)
}
//recursive algorithm
function BubbleSort(array){
    if(isSorted(array) !== 0){
        console.log(`Sorted!! ---> ${array}`)
        return;
    }else{
        console.log(array)
        console.log("now bubbling")
        for(let i=1;i<array.length;i++){
            if(array[i] < array[i-1]){
                var h = array[i]
                array[i] = array[i-1]
                array[i-1] = h
            }
        }
        BubbleSort(array)
    }
}

BubbleSort(ar3)
