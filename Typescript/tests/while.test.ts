describe('while loop',function(){
    it('should support while loop',function(){
        let counter = 0

        while(counter < 10){
            console.info(counter)
            counter++
        }
    })

    it('do while',function(){
        let hitung = 0

        do{
            console.info(hitung)
            hitung++
        }while(hitung < 10)
    })

    it('for loop with break',function(){
        let counter = 0

        do{
            counter++

            if(counter == 10){
                break;
            }

            if(counter % 2 == 0){
                continue;
            }
        }while(true)
    })
})