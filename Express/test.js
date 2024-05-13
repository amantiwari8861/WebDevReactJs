let data ={
    "id": 22,
    "name": "vinita",
    "mob": 1234444
}
let updatedData ={
    "name": "muskan",
}
console.log({ ...data, ...updatedData });