export default function sortArray(arr, isDesc = false, stringCategory = false) {
    return arr.sort((a,b) => {
        const categoryA =  stringCategory ? a.name.toLowerCase() : a.id
        const categoryB = stringCategory ? b.name.toLowerCase() : b.id
        if(isDesc) return descending(categoryA, categoryB)
        else return ascending(categoryA, categoryB)
    })
}

function ascending(categoryA, categoryB) {
    if (categoryA < categoryB) return -1
    else if (categoryB < categoryA) return 1
    else return 0
}

function descending(categoryA, categoryB) {
    if (categoryA > categoryB) return -1
    else if (categoryB > categoryA) return 1
    else return 0
}
