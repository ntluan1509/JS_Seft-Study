// object basic
var infor = {
    a : 10 ,
    name : 'luân' ,
    age : 18 ,
    b : function () {
        return this.name ;
    }
}
console.log(infor.b())

// object constructor
function NgoiNha( ho , ten , tuoi) {
    this.ho = ho ;
    this.ten = ten ;
    this.tuoi = tuoi ;
}

var Ong = new NgoiNha( "Nguyen" , "A" , 80 );
var chau = new NgoiNha( "Nguyen" , "B" , 15 );

Ong.HonNhan = ' Có bà chung sống nhiều năm ' ;
chau.HonNhan = 'Cháu có bạn gái nhỏ tuổi '

console.log(Ong)
console.log(chau)

//  date
 var date =new  Date() ;
  console.log(date) ;
  console.log(date.getMonth() +1 )
 
// if else
const a = 11 ;
if( a % 2 == 0 ){
    alert("Đây là số chẵn")
}else {
    alert("Đây là số lẻ ")
}