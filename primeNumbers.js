// 1'e ve kendisine bölünecek, 1 den büyük pozitif tamsayı olacak

function showPrimeNumbers(lowNumber, highNumber){
    for (let i =lowNumber; i <= highNumber; i++ ){
        let isPrime = true;
        for (let j = 2; j <= i; j ++){
            if( i % j ===0 && j !==i ){
                isPrime = false
            }
        }

        if(isPrime){
            console.log(i);
        }
    }
}

showPrimeNumbers(7,22)