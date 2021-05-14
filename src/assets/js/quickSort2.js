// /**
//  * 快速排序-好方法
//  */
const arr = [6, 1, 2, 7, 9, 3, 4, 5, 2, 8];
function quickSort(left, right){
    let i = left;
    let j = right;
    let pivot = arr[left];
    let temp;

    if(i > j) return;
    while(i !== j){
        while(i < j && arr[j] >= pivot){
            j--;
        }
        while(i < j && arr[i] <= pivot){
            i++;
        }
        // 置换,此处必须加条件判断
        if(i < j) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    // 中心点归位
    arr[left] = arr[i];
    arr[i] = pivot;

    quickSort(left, i-1);
    quickSort(i+1, right);
}
quickSort(0, arr.length - 1);
console.log(arr);