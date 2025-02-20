function getComputerChoice(){
    const values = ['rock','paper','scissors'];
    let num = Math.floor(Math.random() * values.length)
    return values[num];
}