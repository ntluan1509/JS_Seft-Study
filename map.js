var courses = [
    {
        id: 1 ,
        name : "Toán",
        coin : 200
    },
    {
        id: 2,
        name: "Lý",
        coin: 300
    },
    {
        id: 3,
        name:"Hóa",
        coin: 250
    }
]

function courseA (course, index) {
    return course.coin;
}
// khai báo biến và hàm map
var course = courses.map(courseA);

console.log(course);