const { exportAllDeclaration } = require('@babel/types');
const lengthOfLongestSubstring = require('./longestSubstring');


test('Testing substring', () => {
  
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
})