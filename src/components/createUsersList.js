const names = [
  "dima",
  "oleg",
  "max",
  "vlad",
  "vitya",
  "nikita",
  "masha",
  "olya",
  "sasha",
  "lera",
];

const randomNumder = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomNames = (arr) => {
  return Math.floor(Math.random() * arr.length);
};

const createUsersList = (count) => {
  let arr = [];
  for (let i = 0; i < count; i++) {
    arr.push({
      id: Math.random(),
      index: i + 1,
      name: names[getRandomNames(names)],
      age: randomNumder(18, 70),
    });
  }
  return arr;
};

export { createUsersList };
