import { generateTokenKey, generateTokenKey1 } from "../src/index"

test('basic', () => {
 expect(generateTokenKey("abc", 7)).toBe("SESS_abc_7");
});

test('basic1', () => {
  expect(generateTokenKey1("abc", 7)).toBe("SESS_abc_7");
});

