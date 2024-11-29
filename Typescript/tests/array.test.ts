describe('Array', function(){
    it('should must declare', function(){
        let nama: string[] = ['okta','ucup','otong']
        let values: number[] = [100,98,30]

        console.info(nama)
        console.info(values)  
    })

    it('should ReadonlyArray', function(){
        let nama: ReadonlyArray<string> = ["membaca", "melukis"] 
        // tidak dapat diubah nilainya dalam ts jika sudah dicompile ke js bisa untuk diubah
        console.info(nama)

        
    })

    it('should support tuple', function(){
        const things: readonly [string, number, boolean] = ["membaca", 100, true]

        console.info(things[0])
        console.info(things[1])
        console.info(things[2])
    })
})