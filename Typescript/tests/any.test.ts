describe('Any', function(){ // jangan sering dipakai, karena untuk apa pakai typescript ?
    it('should support in typescript', function(){
        const person: any = {
            id: 1,
            name: "okta",
            age: 21,
            isMarriage: false
        }
        person.age = 22

        console.info(person)
    })
})