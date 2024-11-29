import {sayHello} from "../src/hello"


describe('sayHello', function(): void {
    it('should return hello okta', function(): void {
        expect(sayHello('okta')).toBe("Hello okta")
    })
})
