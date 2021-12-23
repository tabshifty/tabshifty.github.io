export default {
    "Array": {
        methods: [
            {
                method: "concat",
                description: "用于合并两个或多个数组。返回一个新数组。",
                code: `
                    var num1 = [[1]];
                    var num2 = [2, [3]];
                    var num3=[5,[6]];
                    
                    var nums = num1.concat(num2);
                    
                    console.log(nums);
                    // results is [[1], 2, [3]]
                    
                    var nums2=num1.concat(4,num3);
                    
                    console.log(nums2)
                    // results is [[1], 4, 5,[6]]
                    
                    // modify the first element of num1
                    num1[0].push(4);
                    
                    console.log(nums);
                    // results is [[1, 4], 2, [3]]
                `,
            },
            {
                method: "copyWithin",
                description: "浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度",
                code: `
                    [1, 2, 3, 4, 5].copyWithin(-2);
                    // [1, 2, 3, 1, 2]
                    
                    [1, 2, 3, 4, 5].copyWithin(0, 3);
                    // [4, 5, 3, 4, 5]
                    
                    [1, 2, 3, 4, 5].copyWithin(0, 3, 4);
                    // [4, 2, 3, 4, 5]
                    
                    [1, 2, 3, 4, 5].copyWithin(-2, -3, -1);
                    // [1, 2, 3, 3, 4]
                    
                    [].copyWithin.call({length: 5, 3: 1}, 0, 3);
                    // {0: 1, 3: 1, length: 5
                
                `
            }
        ]
    }
}