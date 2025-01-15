export default function nthFibo(n) {
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


