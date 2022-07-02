var A = [
    {
        id: 1 ,
        name : 'Nguyễn' ,
        coin : 0 ,
    },
    {
        id: 2 ,
        name : 'Thành' ,
        coin : 20 ,
    },
    {
        id: 3 ,
        name : 'Luân',
        coin : 100 ,
    },
    {
        id : 4 ,
        name : 'Thành' ,
        coin : 1909
    }
]
// // duyệt các phần tử trong mảng
// A.forEach(function( a , index) {
//        console.log ( index , a ) ;
// }) ;
// // kiểm tra các phần tử thỏa mãn đk trong mảng --> true
// var free = A.every( function ( a , index) {
//      return a.coin === 0 ;
// }) ;
// // console.log(free) ;
// // kiểm tra chỉ cần một phần tử thỏa mản đk --> true
// var isFree = A.some( function ( a , index ) {
//          return a.coin === 0 ;
// }) ;
// console.log(isFree) ;
// //tìm kiếm một phần tử trong mảng
// var find = A.find( function( a, index) {
//      return a.name === 'Luân' ;
// }) ;
// console.log(find) ;
// // tìm kiếm nhiều phần tử cùng tên
// var list = A.filter( function(a , index ) {
//        return a.name == 'Thành'
// }) ;
// console.log(list) ;

// map
function duyet( b, ){
    return {
        id : b.id,
        name : "Tên: "+ `${b.name}`,
        coin: b.coin ,
        coinText:"Giá: " + `${b.coin}`
    }
}
var a = A.map(duyet);
console.log(a)

