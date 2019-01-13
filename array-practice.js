/* 
   條件: 題目 2 ~ 7 的操作都不能修改到 題目 1 建立的陣列
*/

// 1. 建立一個長度 50，數值介於 40~100 的陣列 (亂數產生) (Array)
    // 產生min到max之間的亂數
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      // 會產生40~100之間的隨機亂數
      getRandom(40, 100);
  
      // 也可以用迴圈測試看看!
      var num1 = [];
      for (i = 1; i <= 50; i++) {
        num1.push(getRandom(40, 100));
      };
      // num1大概會是這個樣子
      // [40, ...共有50個..., 87]
      console.log(1);
      console.log(num1);
    // 2. 篩選出大於 60 的結果
    function check(num2One) {
        return num2One >= 60;
    }
    var num2Arr = num1.filter(check);
    console.log(2);
    console.log(num2Arr);
  // 3. 找出最大值
    var num3Arr = Math.max(...num1);
    console.log(3);
    console.log(num3Arr);
  
  // 4. 計算全部數值的合計數
  function SumDataforEach(arr){
      var sum=0;
      arr.forEach(function(element) {
          sum+=element;// sum=sum+element
      });
      return sum;
  }
  console.log(4);
  console.log(SumDataforEach(num1));
  
  // 5. 找出最小值
  var num5Arr = Math.min(...num1);
    console.log(5);
    console.log(num5Arr);
  // 6. 全部開根號並乘上 10
  var num6Arr = num1.map(function(item, index, array){ // 
      return Math.sqrt(item) * 10;
  });
    console.log(6);
    console.log(num6Arr);
  // 7. 請依數值大小排序，由大而小
    // 宣告 function 名稱是sortNumber(參數1, 參數2)
    function sortNumber(a, b)
    {
      return b - a // b -a  大到小
    }
    console.log(7); 
    console.log(num1.sort(sortNumber)); // 列出array num1 排序sort 排序規則是sortNumber func

