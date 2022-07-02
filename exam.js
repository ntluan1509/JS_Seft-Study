 function kiemtra() {
    var hoTen = document.getElementById("hoTen").value;
    if(hoTen == "" || hoTen.length > 50 ) {
       document.getElementById("hienLoi").innerHTML ="Họ tên không được để trống và phải nhỏ hơn 50 ký tự";
       return false
    }

    var sodienthoai = document.getElementById("sdt").value;
    if(sodienthoai =="") {
        document.getElementById("hienLoi").innerHTML ="Số điện thoại không được để trống"
        return false;
    } else if(isNaN(sodienthoai) == true) {
        document.getElementById("hienLoi").innerHTML ="Số điện thoại phải là số"
        return false;
    } else if(sodienthoai.length != 10){
        document.getElementById("hienLoi").innerHTML ="Số điện thoại phải đủ 10 chữ số"
        return false;
    }
 }
 function reset(){
     document.getElementsByTagName("form")[0].reset();
 }