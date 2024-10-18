/**
 * respond if a string format is valid.
 * ex:
 * 1. ([) -> invalid
 * 2. []() -> valid
 * 3. ({}) -> valid
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  if ([')', '}', ']'].includes(s[0])) return false;
  if (['(', '{', '['].includes(s[s.length - 1])) return false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      if ([']', '}'].includes(s[i + 1])) return false;
    } else if (s[i] == '{') {
      if ([']', ')'].includes(s[i + 1])) return false;
    } else if (s[i] == '[') {
      if ([')', '}'].includes(s[i + 1])) return false;
    } else if (s[i] == ')') {
      let fallback = 1;
      let ignore = 0;
    } else if (s[i] == '}') {
    } else if (s[i] == ']') {
    }
  }

  if (s.match(/[(]/g)?.length !== s.match(/[)]/g)?.length) return false
  if (s.match(/[\[]/g)?.length !== s.match(/[\]]/g)?.length) return false
  if (s.match(/[\{]/g)?.length !== s.match(/[\}]/g)?.length) return false

  return true;
};

console.log(isValid("()"));

console.log(isValid("()[]{}"));

console.log(isValid("(]"));

console.log(isValid("([])"));

console.log(isValid("(){}}{"));

console.log(isValid("[([]])"));