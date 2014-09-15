/**
 * Created by liyuhang on 14-9-15.
 */
var quicksort=function(a,p,r){//a为传入的数组p，r为数组的上下标
    //console.log(a);
    if(p<r){
        var q=partition(a,p,r);//console.log(q);
        quicksort(a,p,q-1);
        quicksort(a,q+1,r);
    }
    else{
        return a;
    }
};
var exchange=function(a,x,y){
    var temp=a[x];
    a[x]=a[y];
    a[y]=temp;
}//exchange  交换两个坐标的值
var partition=function(a,p,r){
    var x=a[r-1];//console.log(a[r-1])
    var i=p-1;//小于标杆元素的游标
    var j=p;
    for(j;j<r-1;j++){
        if(a[j]<=x){
            i++;
            exchange(a,i,j);
        }
    }
    exchange(a,i+1,r-1);
    return i+1;
};//快排的精髓
var a=[8,2];
quicksort(a,0,2);//快排
console.log(a);