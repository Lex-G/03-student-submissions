const submissions = [
  {
    name: "Jane",
    score: 95,
    date: "test",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "test",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "test",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "test",
    passed: true,
  },
];

const addSubmission = (array, newName, newScore, newDate) => {
  const newObject = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: score >= 60,
  };
  array.push(newOject);
};

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

deleteSubmissionByIndex(submissions, 2);
console.log(submissions);

// const delteSubmissionByName = (array, name) => {
//   return array.find((name) => {
//     return array.splice(name);
//   });
// };

// delteSubmissionByName(submissions, "Joe");
// console.log(submissions);

const editSubmission = (array, index, score) => {
  if (score >= 60) {
    return passed === true;
  } else {
    passed === false;
  }
};
