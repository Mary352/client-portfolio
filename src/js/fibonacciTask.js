function nthFibo(n) {
   const fiboArr = [0, 1]

   if (n < 1) return null;
   if (n === 1) return fiboArr[0];
   if (n === 2) return fiboArr[1];

   for (let i = 0; i < (n - 2); i++) {
      const sum = fiboArr[i] + fiboArr[i + 1];

      fiboArr.push(sum)
   }

   // console.log("🚀 ~ nthFibo ~ fiboArr:", fiboArr)
   return fiboArr[n - 1];
}

console.log('nthFibo(-25): ', nthFibo(-25))
console.log('nthFibo(0): ', nthFibo(0))
console.log('nthFibo(1): ', nthFibo(1))
console.log('nthFibo(2): ', nthFibo(2))
console.log('nthFibo(4): ', nthFibo(4))
console.log('nthFibo(5): ', nthFibo(5))
console.log('nthFibo(15): ', nthFibo(15))
console.log('nthFibo(26): ', nthFibo(26))
