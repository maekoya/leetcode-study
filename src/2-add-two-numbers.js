/**
 * 2. Add Two Numbers
 * @link https://leetcode.com/problems/add-two-numbers/description/
 */

/**
 * Calculating the same index
 * Runtime: 112 ms
 */
const addTwoNumbers = (l1, l2) => {
  let list1 = l1
  let list2 = l2
  let list3 = null
  let l3 = null
  let carry = 0

  while (list1 || list2 || carry) {
    let sum = carry
    sum += (list1 ? list1.val : 0)
    sum += (list2 ? list2.val : 0)
    carry = sum >= 10 ? 1 : 0
    sum %= 10

    if (l3 === null) {
      l3 = new ListNode(sum)
      list3 = l3
    } else {
      list3.next = new ListNode(sum)
      list3 = list3.next
    }

    list1 = list1 ? list1.next : null
    list2 = list2 ? list2.next : null
  }
  return l3
}
