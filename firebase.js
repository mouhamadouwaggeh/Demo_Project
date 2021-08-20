let Button = document.querySelector("#Button");
let Reviews = document.querySelector(".Reviews");
let Input = document.querySelector("#Input");
let Name = document.querySelector("#Name");

let database = firebase.database().ref();

Button.onclick = function updateDB(event){
    event.preventDefault();
    let name = Name.value;
    let input = Input.value;
    Input.value = "";
    Name.value = "";

    console.log(name + " : " + input);

    let value = {
        user: name,
        message: input
    }
    database.push(value);
}

database.on("child_added", function (child) {
    let reviewer = child.val();

    let user = reviewer.user
    let message = reviewer.message

    let review = document.createElement("h1");
    review.innerHTML = user + " : " + message;
    Reviews.appendChild(review);
});