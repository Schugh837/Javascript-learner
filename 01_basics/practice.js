/******CREATE A NEW ARRAY WITH EVN NUMBR OF SCORE AND MULTIPLY BY EACH VALUE BY 3 AND SUM THEM[using,reduce,filter,map] */
var scores2=[2,6,8,12,15,19,21,24,26,29]
   let summValue=scores2.filter(scores2=>scores2%4==0).map(scores2=>scores2*4).reduce((sum,val)=>sum+val,0)
   console.log(summValue)