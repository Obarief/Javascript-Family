import {Seller} from '../src/seller'
import { Domain } from '../src/intersection'

describe('Seller', function () {
    it('should works on typescript', function () {
        const seller: Seller = {
            id: '1',
            name: 'okta',
            age: 21,
            NIK: '4235153615115'
        }

        console.info(seller)
    })

    it('should support function interface',function(){
        interface addFunction{
            (value1: number, value2: number): number
        }
        const add: addFunction = (value1, value2) => value1 + value2

        console.info(add(2,3))
    })

    it('should support indexable interface',function(){
        interface StringArray{
            [index: number]: string
        }
        const array: StringArray = ['okta', 'ucup', 'otong']

        console.info(array)
    })

    it('should support indexable interface non number index',function(){
        interface StringObject{
            [key: string]: string
        }

        const object: StringObject = {

            'satu': 'okta',
            'dua': 'ucup'
        }

        console.info(object)
        
    })

    it('should support function in interface',function(){
        interface Person{
            name: string,
            sayHello(name : string): string
        }

        const person: Person = {
            name: 'icik bos',
            sayHello: function(name: string): string{
                return `hello ${name}, my name is ${this.name}`
            }
        }

        console.info(person.sayHello('okta'));
    })
    it('should support intersection interface',function(){
        const data: Domain = {
            id: 3,
            name: 'subur'
        }

        console.info(data)
    })

    it('should support type assertions', function(){
        
        interface Data {
            id: number
            name: string

        }
        
        const data: any = {
            id: 3,
            name: 'jihan',
            isMarried: true
        }

        const data2: Data = data as Data

        // console.info(data2.isMarried) // error karena tidak sesuai isinya dengan Data
        console.info(data2.id)
    })

})