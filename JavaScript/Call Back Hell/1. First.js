function arithmeticOperation() {
    let num1 = 10;
    function add(){
        num1 += 5;
        function sub(){
            num1 -= 3;
        }
        sub();
    }
    add();
}

console.log(arithmeticOperation());
