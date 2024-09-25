function vote(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    if(age>18){
        alert(name+"You are Eligible");
    }else{
        alert(name+"You are still a child😂");
    }
    }
    