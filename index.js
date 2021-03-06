const users = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
    age: 23,
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
    age: 20,
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
    age: 40,
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
    age: 36,
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
    age: 70,
  },
  {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/12-image.jpg",
    age: 45,
  },
];

// 1.  Получить строку c именами и фамилиями всех пользователей через запятую.
const string = users
  .map((user) => `${user.first_name} ${user.last_name}`)
  .toString();

//  Получить объект, где были бы **a)** данные о среднем возрасте пользователей, **b)** количество пользователей старше **30, c)** количество пользователей старше 40**, d)** количество пользователей старше 18 \*\*\*\*
const averageAge = () => {
  return (
    users.reduce((acc, user) => {
      return user.age + acc;
    }, 0) / users.length
  );
};

const olderThen = (age) => {
  let current = 0;
  users.map((user) => (user.age > age ? current++ : null));
  return current;
};

const objectData = {
  averageAge: averageAge(),
  OlderThen_30: olderThen(30),
  OlderThen_40: olderThen(40),
  OlderThen_18: olderThen(18),
};

// 3.  Создать новый массив пользователей, где объект пользователя должен содержать только id и поле, отвечающее за имя пользователя, которое должно содержать имя и фамилию.
const newUsersArr = users.reduce((acc, user) => {
  const obj = {
    id: user.id,
    name: `${user.first_name} ${user.last_name}`,
  };
  acc.push(obj);
  return acc;
}, []);

//4.  Создать массив из emails по алфавиту.
//prettier-ignore
const filterEmails = users
                        .map((user) => user.email)
                        .sort()

//5.  Создать массив юзеров, где они отсортированы по возрасту по возрастанию и все пользователи младше 40 лет.

let sortUsers = users
  .filter((user) => user.age < 40)
  .sort((a, b) => a.age - b.age);

//6.  Создать объект, где ключ, это первая буква фамилии, а значение - массив из фамилий пользователей начинающихся на эту букву. Объект должен состоять только из ключей существующих фамилий в этом массиве. Например в этом массиве нет фамилии с букву **Y,** а значит и такого поля не должно быть в объекте.
// Пример того, что надо получить, когда пользователи имеют следующие фамилии `Yasenko`, `Felton` , `Ford`, `Ferdinand`:
// `{
//   y: ['Yasenko'],
//   f: ['Felton', 'Ford', 'Ferdinand'
// }`

// const count = fruitBasket.reduce((tally, fruit) => {
//   tally[fruit] = (tally[fruit] || 0) + 1;
//   return tally;
// }, {});

const arr = users.map((user) => user.last_name);
const a = users.reduce((acc, user) => {
  const value = arr.filter((u) => {
    return u[0] === user.last_name[0] && u;
  });
  acc[user.last_name[0]] = value;
  return acc;
}, {});
