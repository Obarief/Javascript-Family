describe('Union',function(){ // praktiknya buruk, dilarang digunakan
    it('should support in typescript',function(){
        let id: string | number = 1 // penggunaan | sebagai atau, untuk mengisi variabel
        console.info(id)

        id = '1'
        console.info(id)

        // id = [];
    })
    // penggunaan typeof untuk mengecek tipe data sebelum memanggil methodnya
    it('should support in typescript',function(){
        function process(value: string | number | boolean){
            if(typeof value === 'string'){
                return value.toUpperCase()
            }else if(typeof value === 'number'){
                return value + 2
            }else{
                return !value
            }
        }
        
        expect(process(100)).toBe(102)
        expect(process("okta")).toBe("OKTA")
        expect(process(true)).toBe(false)

    })
})