/**
 * 3. Longest Substring Without Repeating Characters
 * @link https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 */

/**
 * Sliding Window Optimized
 * Runtime: 96 ms
 */
const lengthOfLongestSubstring = (s) => {
  const length = s.length
  const indexMap = {}
  let start = 0
  let end = 0
  let maxSubStringLength = 0

  while (end < length){
    const char = s[end]
    const indexFound = indexMap[char]

    if (indexFound !== undefined) {
      maxSubStringLength = Math.max(end - start, maxSubStringLength)
      for (let i = start; i <= indexFound; i++) {
        delete indexMap[s[i]]
      }
      start = indexFound + 1
    }
    indexMap[char] = end++
  }
  maxSubStringLength = Math.max(end - start, maxSubStringLength)

  return maxSubStringLength
}

/**
 * Brute Force (It's failure solution)
 * Runtime: Time Limit Exceeded
 */
const lengthOfLongestSubstring = (s) => {
  const length = s.length
  let maxSubStringLength = 0

  const allUnique = (str, start, end) => {
    const strs = []
    for (let i = start; i < end; i++) {
      const char = str.charAt(i)
      if (strs.indexOf(char) >= 0) return false
      strs.push(char)
    }
    return true
  }

  for (let start = 0; start < length; start++) {
    for (let end = start + 1; end <= length; end++) {
      if (allUnique(s, start, end)) maxSubStringLength = Math.max(maxSubStringLength, end - start)
    }
  }

  return maxSubStringLength
}
