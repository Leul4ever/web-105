let names = ["LEUL", "Ananiya", "deva "];

let filteredNames = names.filter(bros);

function bros(brother) {
    // Trim the name to remove leading and trailing spaces, then check the first character
    return brother.trim().charAt(0) === brother.trim().charAt(0).toUpperCase();
}

console.log(filteredNames); // ["  LEUL"]
