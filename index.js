    function showMessage() {
        let name = prompt('Как Вас зовут?');
        alert(`Привет, ${name}!`);
    }

    function getSum() {
        let x = prompt('Первое число');
        let y = prompt('Второе число');
        alert(Number(x)+Number(y));
    }

    function getMinus() {
        let x = prompt('Первое число');
        let y = prompt('Второе число');
        alert(Number(x)-Number(y));
    }

    function getDivide() {
        let x = (prompt('Первое число'));
        let y = (prompt('Второе число'));
        
        if (y==0){
        alert('На ноль делить нельзя');
        }

        else
        (alert(Number(x)/Number(y))
        )
    }
    
    function getTimes() {
        let x = prompt('Первое число');
        let y = prompt('Второе число');
        alert(Number(x)*Number(y));
    }



