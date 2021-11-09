import { StrengthPipe } from "./strength.pipe"

describe('StrengthPipe', () => {
    it('should display weak if strength is 5', () => {
        // Arrange
        let pipe = new StrengthPipe();

        // Act (pipe.transform(5)
        // Assert is the expect statement
        expect(pipe.transform(5)).toEqual('5 (weak)');
    })

    it('should display strong if strength is 10', () => {
        // Arrange
        let pipe = new StrengthPipe();

        // Act (pipe.transform(5)
        // Assert is the expect statement
        expect(pipe.transform(10)).toEqual('10 (strong)');
    })

    it('should display equal if strength is 21', () => {
        // Arrange
        let pipe = new StrengthPipe();

        // Act (pipe.transform(5)
        // Assert is the expect statement
        expect(pipe.transform(21)).toEqual('21 (equal)');
    })
})