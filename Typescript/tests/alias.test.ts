import { Category, Product, ID } from "../src/alias"


describe('Alias',function(){
    it('should be alias work on typescript',function(){
        const category: Category = {
            id: "1",
            name: "Elektronik"
        }
        const product: Product = {
            id: 22,
            name: "LGTV+",
            price: 2000,
            category
        }

        console.info(category)
        console.info(product)
    })
    
    it('should be alias work on typescript', function(){
        // object type
            // alias yg digunakan bila projeknya kecil bila besar pakai type dahulu

        // option properties = digunakan untuk tidak wajib diisi
        const person: {class: string, terminal: number, chocolate?: boolean} = { 
            
            class: "A",
            terminal: 2
        }

        console.info(person)

        person.class = "B"
        person.terminal = 3

        console.info(person)

        person.chocolate = true

        console.info(person)
    })
})