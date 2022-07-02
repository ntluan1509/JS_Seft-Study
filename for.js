// vòng lặp for
for ( var i = 1 ; i < 100 ; i++ ) {
    console.log("Lần"+i + "--Kết quả: " +(i+1));
}

// for..of (hiển thị value)
var HS = [
    "Thành" ,
    "Luân" ,
    18
]
for ( a of HS){
    console.log(a) ;
}
// 2
 var NN = 'JavaScript' ;
 for( var a of NN ){
     console.log(a) ;
 }

 //for .. in ( hiển thị key)
 var BD = {
        name : 'Luan',
        tuoi : 19 ,
 };
 for( a in BD ) {
     console.log(a) ;
 }
  