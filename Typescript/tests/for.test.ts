describe('For Loop',function(){
    const names = ['budi','adi','joko']

    it('should support for loop',function(){
        
        // for i
        for(let i = 0; i < names.length; i++){
            console.info(names[i])
        }
    
        // for of
        for(let name of names){
            console.info(name)
        }

        //for in
        for(const index in names){
            console.info(names[index])
        }
    
    })

    
})

