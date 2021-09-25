const topNStudentsAttendees = (students, attendees, N) => {
  let dict = new Object();
  attendees.forEach((lecture) => {
    lecture.filter(onlyUnique).forEach((student) => {
      if (students.includes(student)) {
        if (student in dict) dict[student]++;
        else dict[student] = 1;
      }
    });
  });
  let keysSorted = Object.keys(dict).sort( (a, b) => {
    return dict[b] - dict[a];
  });
  return keysSorted.slice(0, N);
};


const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index;
}
