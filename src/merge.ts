export function merge(
    collection1: number[],
    collection2: number[],
    collection3: number[],
): number[] {

    const coll3 = collection3.slice().reverse();

    const sum_merge = mergeTwo(collection1, collection2);

    return mergeTwo(sum_merge,coll3);
}

function mergeTwo(arr1:number[],arr2:number[]):number[] {
    let i = 0,
        j= 0;
    const result:number[]= [];

    while (i < arr1.length && j < arr2.length){
        if (arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        }

        else{
            result.push(arr2[j]);
            j++
        }  
    }

    while (i < arr1.length){
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j])
        j++;
    }

    return result;
}