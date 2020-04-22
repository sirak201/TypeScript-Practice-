var Student = /** @class */ (function () {
    function Student(firstname, middleInitial, lastname) {
        this.firstname = firstname;
        this.middleInitial = middleInitial;
        this.lastname = lastname;
        this.fullName = firstname + " " + middleInitial + " " + lastname;
    }
    return Student;
}());
function greeter(user) {
    return "Hello, " + user.firstname;
}
var user = new Student("Jane", "M.", "User");
document.body.textContent = greeter(user);
