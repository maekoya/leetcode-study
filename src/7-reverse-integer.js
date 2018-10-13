/**
 * 7. Reverse Integer
 * @link https://leetcode.com/problems/reverse-integer/description/
 */

/**
 * Reversing array & check overflow 32bit integer
 * Runtime: 84 ms
 */
const reverse = x => {
  const reverseNum = parseInt(Array.from(Math.abs(x).toString()).reverse().join(''), 10)
  if (reverseNum > Math.pow(2, 31) - 1) return 0

  return (x < 0) ? -reverseNum : reverseNum
}
