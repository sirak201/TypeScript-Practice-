class Student {
  fullName: String;

  constructor(
    public firstname: string,
    public middleInitial: string,
    public lastname: string
  ) {
    this.fullName = firstname + " " + middleInitial + " " + lastname;
  }
}

interface Person {
  firstname: String;
  lastname: String;
}

function greeter(user: Person) {
  return "Hello, " + user.firstname;
}

let user = new Student("Jane", "M.", "User");

document.body.textContent = greeter(user);
