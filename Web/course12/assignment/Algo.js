function getSmallestTaskSubarray(k, taskCosts) {
  const n = taskCosts.length;

  // 初始化 DP 表
  // dp[i][s] 表示是否能从前 i 个任务中选出子序列，使得和为 s
  // 若能，则存储该子数组的起始索引，否则为 -1
  const dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(-1));
  dp[0][0] = 0; // base case：空子序列可构成 sum 0，起始索引为 0

  let ans = Infinity;

  for (let i = 1; i <= n; i++) {
      const cost = taskCosts[i - 1];

      for (let s = 0; s <= k; s++) {
          // Case 1: 不选当前 task
          dp[i][s] = dp[i - 1][s];

          // Case 2: 选当前 task 构成子序列的一部分
          if (s >= cost && dp[i - 1][s - cost] !== -1) {
              dp[i][s] = Math.max(dp[i][s], dp[i - 1][s - cost]);
          }

          // Case 3: 当前 task 本身就等于目标和 s
          if (cost === s) {
              dp[i][s] = Math.max(dp[i][s], i - 1);
          }
      }

      // 若存在子序列和为 k，则更新答案
      if (dp[i][k] !== -1) {
          const length = i - dp[i][k];
          ans = Math.min(ans, length);
      }
  }

  return ans === Infinity ? -1 : ans;
}
