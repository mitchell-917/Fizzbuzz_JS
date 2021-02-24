  describe('JS-JavaBuzz', function()
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

    describe('Knows when a number is', function()
    {
      it('Divisible by Five', function(){
        expect(javabuzz._isDivisibleBy(10,5)).toBe(true);
      });
    });

    describe('Knows when a number is NOT', function()
    {
      it('Divisible by Five', function(){
        expect(javabuzz._isDivisibleBy(12,5)).toBe(false);
      });
    });

    describe('Knows when a number is', function()
    {
      it('Divisible by Fifteen', function(){
        expect(javabuzz._isDivisibleBy(30,15)).toBe(true);
      });
    });

    describe('Knows when a number is NOT', function()
    {
      it('Divisible by Fifteen', function(){
        expect(javabuzz._isDivisibleBy(32,15)).toBe(false);
      });
    });
 });


