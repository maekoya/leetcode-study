/**
 * 1. Two Sum
 * @link https://leetcode.com/problems/two-sum/description/
 */

/**
 * Brute Force
 * Runtime: 120 ms
 */
const twoSum = (nums, target) => {
  const length = nums.length

  for (let start = 0; start < length; start++) {
    for (let end = start + 1; end < length; end++) {
      if (nums[start] + nums[end] === target) {
        return [start, end]
      }
    }
  }
}

/**
 * Search Counterpart
 * Runtime: 172 ms
 */
const twoSum = (nums, target) => {
  const length = nums.length

  for (let start = 0; start < length; start++) {
    const end = nums.indexOf(target - nums[start])
    if (end > -1 && end !== start) {
      return [start, end]
    }
  }
}

/**
 * Two-pass Hash Table
 * Runtime: 80 ms
 */
const twoSum = (nums, target) => {
  const map = {}
  const length = nums.length

  nums.forEach((i, index) => map[i] = index)

  for (let start = 0; start < length; start++) {
    const end = map[target - nums[start]]
    if (end !== undefined && end !== start) {
      return [start, end]
    }
  }
}

/**
 * One-pass Hash Table
 * Runtime: 52 ms
 */
const twoSum = (nums, target) => {
  const map = {}
  const length = nums.length

  for (let start = 0; start < length; start++) {
    let end = map[target - nums[start]]
    if (end !== undefined && end !== start) {
      return [start, end]
    }
    map[nums[start]] = start
  }
}
