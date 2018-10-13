/**
 * 136. Single Number
 * @link https://leetcode.com/problems/single-number/description/
 */

/**
 * List operation
 * Runtime: 568 ms
 */
const singleNumber = (nums) => {
  let single
  nums.forEach((x, index, self) => {
    if (self.indexOf(x) === self.lastIndexOf(x)) single = x
  })
  return single
}

/**
 * Hash Table
 * Runtime: 60 ms
 */
const singleNumber = (nums) => {
  const hashTable = {}

  nums.forEach((x, index, self) => {
    if (hashTable[x]) {
      delete hashTable[x]
      return true
    }
    hashTable[x] = 1
  })

  for (let key in hashTable) {
    return parseInt(key, 10)
  }
}

/**
 * Math
 * Runtime: 344 ms
 */
const singleNumber = (nums) => {
  const uniqueNums = nums.filter((x, index, self) => self.indexOf(x) === index)
  const sum = (nums) => nums.reduce((prev, curr) => prev + curr)

  return 2 * sum(uniqueNums) - sum(nums)
}

/**
 * Bit Manipulation
 * Runtime: 52 ms
 */
const singleNumber = (nums) => {
  let single
  nums.forEach(x => single ^= x)
  return single
}
