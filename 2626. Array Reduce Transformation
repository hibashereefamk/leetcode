/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums,fn,init) {
    let acc=init;
   for(let i=0;i<nums.length;i++){
    acc=fn(acc,nums[i])
   }
   return acc;
};

nums=[1,2,3,4]
init=0;
result=reduce(nums,(t,c)=>t+c,init)
console.log(result)

