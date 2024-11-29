import {Rank, Customer} from '../src/enum'

describe('Enum',function(){
    it('should work on typescript',function(){
        const customer: Customer = {
            id: 2,
            name: "ucup",
            class: Rank.GOLD // output: number 1 = yaitu seperti index, tidak disarankan default karena returnnya number, outputnya jadi tidak konsisten
        }
        console.info(customer)
    })
})