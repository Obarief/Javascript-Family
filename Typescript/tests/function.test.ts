describe('Function', function(){
    it('should support function with data type string',function(){
        function sayHello(name: string): string{
            return `hello ${name}`
        }

        expect(sayHello('okti')).toBe('hello okti')

    })

    it('should support function with data type void',function(){
        function printHello(name: string): void{
            console.info(`hello ${name}`)
        }

        printHello('okta')
    })

    it('should support function default value parameter',function(){
        function salam(nama: string = 'guest'): string{
            return`halo ${nama}`
        }

        expect(salam('okta')).toBe('halo okta')
        expect(salam()).toBe('halo guest')
    })

    it('should support function overloading',function(){
        function callMe(nama: string): string
        function callMe(nama: number): number
        function callMe(nama: any){
            if(typeof nama === 'string'){
                return nama
            }else if(typeof nama === 'number'){
                return nama
            }
            }

            expect(callMe('okta')).toBe('okta')
            expect(callMe(100)).toBe(100)
    })

    it('should support function for parameter',function(){
        function cakap(nama: string, fungsi: (nama: string)=> string){

            return `halo ${fungsi(nama)}`
        }

        function besak(nama: string): string{
            return nama.toUpperCase()
        }

        console.info(cakap('okta',besak))
    })
})