const testArr = [
    {
      name: "홍길동",
      age: 21,
    },
    {
      name: "홍길순",
      age: 23,
    },
    {
      name: "김르탄",
      age: 40,
    },

    
  ];

  testArr.forEach(function (obj){
    if (obj.age >= 30) {
    console.log(obj.name);
  }
});