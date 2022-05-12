const wordSearch = (letters, word) => {
    let bword = word.split("").reverse().join("");
    const allArraysJoin = letters.map(ls => ls.join('')) // joining all rows into an array
    for (let i = 0; i < letters[0].length; i++) { // loops through each column
        let tempArr = []; // creates a temporary array that's going to be used in the next loop below
        for (let j = 0; j < letters.length; j++) { // loops through each row
            tempArr.push(letters[j][i]); //push every letter of specific column into the temapArr
        }
        allArraysJoin.push(tempArr.join("")); // push the new arrays into the existing allArraysJoin
    }
    console.log(allArraysJoin);
    for (line of allArraysJoin) {
        if (line.includes(word)) {
            return true;
        }
        if (line.includes(bword)) {
            return true;
        }
    }
    return false;
}

module.exports = wordSearch