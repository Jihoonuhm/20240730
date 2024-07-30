const tutors = [
    {
      name: "윤창식",
      job: "tutor",
    },
    {
      name: "최원장",
      job: "developer",
    },
    {
      name: "김병연",
      job: "tutor",
    },
    {
      name: "박가현",
      job: "tutor",
    },
  ];
 // const realTutors = tutors.filter(function (t) {
 //   if (t.job === "tutor") {
 //       return true;
  //  } else {
  //      return false; 
//   }
 // });

  return t.job === "tutor"; 

  ===================


  const realTutors = tutors.filter(function (t) {
    return t.job === "tutor";
  }).map(function (t))


