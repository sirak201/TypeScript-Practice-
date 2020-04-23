// Fuction with parameters label in TS

let add = (x: number, y: number): number => {
  return x + y;
};

add(4, 4);

// Optional paramters in TS
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + " " + lastName;
  } else {
    return firstName;
  }
}

// Default Paramets

function buldDefaultName(firstName: string, lastName = "smith") {
  return firstName + " " + lastName;
}

// REST Parameters

function buldRestNames(firstname: string, ...restOfName: string[]) {
  return firstname + " " + restOfName.join(" ");
}

let employeeName = buldRestNames("John", "dd", "kk");

console.log(employeeName);
