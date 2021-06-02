import test from 'ava';
import noindent from '.';

test('with preceding line, depth 2, with end line', t => {
  const input = `
  Test1
    Test2
  `.replace(/\r/g, '');
  const output = `Test1\n  Test2`;
  t.is(noindent(input), output);
});

test('no preceding line, depth 2, with end line', t => {
  const input = `Test1
  Test2
    Test3
  `.replace(/\r/g, '');
  const output = `Test1\nTest2\n  Test3`;
  t.is(noindent(input), output);
});

test('with preceding line, depth 2, no end line', t => {
  const input = `
  Test1
    Test2`.replace(/\r/g, '');
  const output = `Test1\n  Test2`;
  t.is(noindent(input), output);
});

test('no preceding line, depth 2, no end line', t => {
  const input = `Test1
  Test2
    Test3`.replace(/\r/g, '');
  const output = `Test1\nTest2\n  Test3`;
  t.is(noindent(input), output);
});

test('complex example', t => {
  const input = `
    Test1
    
    Test2
    
      Test3
    Test4
          Test5
  `.replace(/\r/g, '');
  const output = `Test1\n\nTest2\n\n  Test3\nTest4\n      Test5`;
  t.is(noindent(input), output);
});