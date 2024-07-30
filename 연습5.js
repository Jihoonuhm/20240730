const people = [
    {
      id: 1,
      name: "홍길동",
      age: 30,
    },
    {
      id: 2,
      name: "홍길순",
      age: 15,
    },
    {
      id: 3,
      name: "김르탄",
      age: 16,
    },
  ];
  
  // 배열 복사
  const newPeople = people.map(function (person) {
    const newPerson = {
      id: person.id,
      name: person.name,
      age: person.age,
      isAdult: person.age >= 20,
    };
    return newPeople;

  });
  console.log(newPeople);