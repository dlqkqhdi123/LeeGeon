function add(a,b){
    var sum = a + b;
}
    function sub(a,b){
        var res = a-b;
    }
    window.onload = function(){
        add(4.5);
        document.write("add="+sum);//오류, 반환값을 이용
        sub(10,4);
        document.write("sub="+res);//오류, 반환값을 이용
    }
