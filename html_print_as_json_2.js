const person = {
    "firstname": "Reinhard",
    "lastname": "Hoepner",
    "data_of_birth": "1969-08-21"
};

function printAsJson() {
    document.getElementById("demo").innerHTML = JSON.stringify(person);
}
