  describe('JS-Fizz', function()
  {
    var javabuzz;
    beforeEach(function() 
    {
    javabuzz = new Javabuzz();
    });

    describe('It knows when a number is', function()
    {
      it('Divisible by three', function()
      {
        expect(javabuzz._isDivisibleBy(3,3)).toBe(true);
      });
    });
    
    describe('knows when a number is NOT', function() 
    {
      it('Divisible by three', function() 
      {
        expect(javabuzz._isDivisibleBy(1,3)).toBe(false);
      });
    });
 });

describe('JS-Buzz', function()
{
    var javabuzz;
    beforeEach(function() 
    {
    javabuzz = new Javabuzz();
    });

    describe('It Knows when a number is', function()
    {
      it('Divisible by Five'), function() 
      {
        expect(javabuzz._isDivisibleBy(5,5)).toBe(true);
      });
    });
});

