let marks = prompt("input your marks")
if (marks>= 79) {
    console.log("A")
}

else if (marks >=60 && marks < 79) {
    console.log("B")
}

else if (marks >=59 && marks < 60) {
    console.log("C")
}

else if (marks >=49 && marks <59 ) {
    console.log("D")
}

else{
    console.log("E")
}

console.log(marks)