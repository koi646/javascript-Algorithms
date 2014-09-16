/**
 * Created by liyuhang on 14-9-16.
 */
var countingsort=function(a,max){//传入的数组,max为数组中的上界
    var b=[];//;临时存放数组
    var c=[];//输出数组
    for(var i=0;i<=max;i++){
        b[i]=0;console.log(b);
    }
    for(i=0;i< a.length;i++){
        b[a[i]]=b[a[i]]+1;//存需要排序的数出现的个数
        //console.log(b);
    }
    for(i=1;i<=max;i++){
        b[i]=b[i]+b[i-1];//存需要排序的数出现的位置（若有相同数，则存的是最后一个数的位置）
    }
    for(i= a.length-1;i>=0;i--){
        c[b[a[i]]-1]=a[i];//
        b[a[i]]--;
    }
    return c;
};
var a=[2,5,3,0,2,3,0,3];
var b=[2,1,0,9,11,2,6,19];
console.log(countingsort(b,19));