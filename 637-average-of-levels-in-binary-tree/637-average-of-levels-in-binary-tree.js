/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const averageOfLevels = function(root) {
    const averages = [];
    const q = [root];
    
    while (q.length) {
        const qLen = q.length;
        let levelSum = 0;
        for (let i = 0; i < qLen; i++) {
            const node = q.shift();
            levelSum += node.val;
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        averages.push(levelSum / qLen);
    }
    return averages;
};