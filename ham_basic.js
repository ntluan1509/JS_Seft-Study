// Truyền 1 tham số
function ham(message) {
      console.log(message)
}
ham('Thành Luân');

// truyền nhiều tham số
function ham2 (a1, a2 , a3) {
      console.log(a1)
      console.log(a2)
      console.log(a3)
}
ham2('thành', 2003 ,'luân')

//arguments
function ham3() {
    console.log(arguments)
}
ham3(3, 4, 5,6);

// vòng lặp for of
function ham4() {
    var ham4="" ;
    for ( var L of arguments){
        ham4 += `${L} - `
  }
  console.log(ham4)
}
ham4(2, 4 ,5 )

// return
function ham5( a , b, c) {
    console.log("Kết quả là :") ;
    return (a/b) *c ;
}
const kq  = ham5( 2 ,3 , 5) ;
console.log(kq) ;