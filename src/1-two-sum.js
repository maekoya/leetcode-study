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

  for (let index = 0; index < length; index++) {
    for (let complementIndex = index + 1; complementIndex < length; complementIndex++) {
      if (nums[index] + nums[complementIndex] === target) {
        return [index, complementIndex]
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

  for (let index = 0; index < length; index++) {
    const complementIndex = nums.indexOf(target - nums[index])
    if (complementIndex > -1 && complementIndex !== index) {
      return [index, complementIndex]
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

  for (let index = 0; index < length; index++) {
    const complementIndex = map[target - nums[index]]
    if (complementIndex !== undefined && complementIndex !== index) {
      return [index, complementIndex]
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

  for (let index = 0; index < length; index++) {
    let complementIndex = map[target - nums[index]]
    if (complementIndex !== undefined && complementIndex !== index) {
      return [index, complementIndex]
    }
    map[nums[index]] = index
  }
}

/**
 * One-pass Hash Table ver.2
 * Runtime: 56 ms
 */
const twoSum = (nums, target) => {
  const map = {}
  let result

  nums.forEach((x, index) => {
    const complementIndex = map[target - x]
    if (complementIndex !== undefined && complementIndex !== index) {
      result = [complementIndex, index]
      return false
    }
    map[x] = index
  })
  return result
}
