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
    },
    {
        id: 4,
        name:"Anh",
        coin: 250
    },
    {
        id: 5,
        name:"Địa",
        coin: 250
    }
]
var i = 0;

// khai báo mảng và các tham số truyền vào 
function courseB(accumulator, currentValue, currentIndex, originArray) {
    i++;
    var total =accumulator + currentValue.coin;
    console.table({
        'Lượt chạy' : i,
        'Biến tích trữ' : accumulator,
        'Giá khóa học ' : currentValue.coin,
        'Tích trữ được': total,
        'Mảng làm việc' : originArray
    });

    return total;
}
var totalcoin = courses.reduce(courseB, 0);
 console.table(totalcoin);