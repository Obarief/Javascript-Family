describe('Optional Parameter',function(){
    it('should support null and undefined',function(){
        function sayHello(name?: string | null){
            if(name){
                console.info(`hello ${name}`)
            }else{
                console.info('hello')
            }

        }
        sayHello('okta')

        const name: string | undefined = undefined
        sayHello(name)

        sayHello(null)
        
    })

    
})