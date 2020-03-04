const person = {
    "firstname": "Reinhard",
    "lastname": "Hoepner",
    "data_of_birth": "1969-08-21"
};

function asJson(any) {
    return JSON.stringify(any);
}

console.log(asJson(person));
