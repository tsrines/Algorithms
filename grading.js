
// https://www.hackerrank.com/challenges/grading/problem
const grades = [84,23,58,35,100,99,98,88,98,48]
function gradingStudents(grades) {
    // Write your code here
    const newGrades = grades.map(grade => {
        if (grade > 37 && (grade % 5) > 2) return grade += 5 - grade%5
          else return grade
    })
    console.log(newGrades)
    return newGrades

}

gradingStudents(grades)

