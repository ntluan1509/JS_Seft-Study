var arr = [
    a = 10 ,
    'Javascipt',
    'rust',
];

console.log(arr)

// đổi tất cả phần tử của mảng sang chuỗi
console.log(arr.toString()) ;

// thêm kí tự giữa các phần tử
console.log(arr.join(' - ')) ;

// xóa phần tử cuối mảng và trả về phần tử đã xóa
console.log(arr.pop())

// thêm phần tử vào cuối mảng và trả về độ dài mảng
console.log(arr.push('hello'))

// xóa phần tử ở đầu mảng và trả về phần tử đã xóa
console.log(arr.shift())

// thêm phần tử ở đầu mảng và trả về độ dài
console.log(arr.unshift('what\'s your name ', ' hihi'))

// xóa phần tử từ vị trí x đến vị trí y và có thể thêm phẩn tử bắt đầu từ x
console.log(arr.splice(0, 2 , 'Luân'))

// nối các mảng với nhau 
var arr2 = [ 9 , 5]
var arr3 = [ 3 , 7]
console.log(arr.concat(arr2, arr3))

// cắt lấy element từ vị trí x đến vị trí y
console.log(arr.slice(1,2))
