import { assert } from 'chai';

// A simple function to test
function sayHello() {
  return 'Hello, world!';
}

// Test cases
describe('HelloWorld', function() {
  it('should return "Hello, world!"', function() {
    assert.equal(sayHello(), 'Hello, world!');
  });

  it('should fail intentionally', function() {
    assert.equal(sayHello(), 'Hello, OpenAI!');
  });
});