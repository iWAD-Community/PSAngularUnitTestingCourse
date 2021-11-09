describe('my first test', ()=> {
    let sut;

    beforeEach(() => {
        sut = {}
    })

    it('should be true if true', () => {
        // arrange
        // arrange is giving a value to the class or function 
        sut.a = false;

        // act
        // in unit testing we get our initial state ,then we change that state and then we assert that the new state is what we expect it to be
        //change the state 
        sut.a = true;

        // assert
        expect(sut.a).toBe(true);
    })
}) 