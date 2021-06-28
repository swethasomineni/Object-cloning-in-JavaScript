let arr = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let user = {
  name: "jayanth",
  age: 27,
  wife: "swetha",
  
};

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
