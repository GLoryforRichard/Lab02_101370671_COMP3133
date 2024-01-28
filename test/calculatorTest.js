import { assert } from 'chai';
import { add, sub, mul, div } from '../app/calculator.js';



describe('Calculator', () => {
  describe('Addition', () => {
    it('should add two numbers correctly', () => {
      let result = add(5, 2);
      assert.equal(result, 7);
    });

    it('should fail for incorrect addition results', () => {
      let result = add(5, 2);
      assert.notEqual(result, 8);
    });
  });

  describe('Multiplication', () => {
    it('should multiply two numbers correctly', () => {
      let result = mul(3, 4);
      assert.equal(result, 12);
    });

    it('should fail for incorrect multiplication results', () => {
      let result = mul(3, 4);
      assert.notEqual(result, 11);
    });
  });

  describe('Division', () => {
    it('should divide two numbers correctly', () => {
      let result = div(8, 4);
      assert.equal(result, 2);
    });

    it('should fail for incorrect division results', () => {
      let result = div(8, 4);
      assert.notEqual(result, 3);
    });
  });

  describe('Subtraction', () => {
    it('should subtract two numbers correctly', () => {
      let result = sub(10, 5);
      assert.equal(result, 5);
    });

    it('should fail for incorrect subtraction results', () => {
      let result = sub(10, 5);
      assert.notEqual(result, 4);
    });
  });
});
