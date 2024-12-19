let students = [
    {
        Name: "S.Pavithra",
        EmailId: "pavithra@gmail.com",
        registernum: "131"
    },
    {
        Name: "K.Karthika",
        EmailId: "karthi@gmail.com",
        registernum: "132"
    },
    {
        Name: "Gv.Saranya ",
        EmailId: "saran@gmail.com",
        registernum: "133"
    },
    {
        Name: "B.Kanimozhi",
        EmailId: "kani@gmail.com",
        registernum: "134"
    }
];

let stu = document.querySelector("#buttons");
let red = document.createElement("div");
red.style.border = "2px solid red";
red.className = "redbox";
stu.appendChild(red);



let stuDetail = students.map((student) => {
    let blue = document.createElement("div");
    blue.style.border = "1px solid blue";
    blue.className = "blu";
    red.appendChild(blue);


    let h1 = document.createElement("h2");
    h1.innerHTML = `Name:${student.Name}`;
    blue.appendChild(h1);

    let email = document.createElement("h2");
    email.innerHTML = `Email:${student.EmailId}`;
    blue.appendChild(email);


    let reg = document.createElement("h2");
    reg.innerHTML = `RegNo:${student.registernum}`;
    blue.appendChild(reg);

    let button = document.createElement("button");
    blue.appendChild(button)
    button.innerHTML = "Delete";
    button.className = "green";
    button.addEventListener("click",
        function () {
            red.removeChild(blue);

        });

})


