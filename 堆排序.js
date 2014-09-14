/**
 * Created by liyuhang on 14-9-13.
 */
var left=function(i){
    return i*2;
}
var right=function(i){
    return i*2+1;
};//返回左/右子树根节点的下标
var max_heapify=function(a,i){//传入的数组a[0]代表的是数组的长度 i代表的是需要维护的下标
    var max=0;//存最大下标
    var temp=0;//中间变量
    var l=left(i);
    var r=right(i);
    if(l< a[0]&&a[l]>a[i]){
        max=l;
    }
    else{
        max=i;
    }//左子树根节点大于a[i]时，将最大存入max
    if(r< a[0]&&a[r]>a[max]){
        max=r;
    }
    if(max!=i){
        temp=a[max];
        a[max]=a[i];
        a[i]=temp;
    }
    else{
        return a;
    }//确定了位置，退出递归
    max_heapify(a,max);
};//维护最大堆的性质

var build_max_heap=function(a){
    var a= [a.length+1].concat(a);//a[0]为数组的长度
    for(var i=a[0];i>=1;i--){
        max_heapify(a,i);
    }//对每一个节点进行最大堆维护
    return a;
}//构建最大堆

var a=[4,1,3,2,16,9,10,14,8,7];

var heapsort=function(a){
    a=build_max_heap(a);
    var temp=0;
    for(var i=a[0];i>1;i=a[0]){
        temp=a[i-1];
        a[i-1]=a[1];
        a[1]=temp;
        console.log(a[i-1]);
        a[0]--;
        max_heapify(a,1);
    }
};//堆排序的原理，将根节点的值与最后一个叶子节点交换，然后输出最后一个叶子节点，再控制a[0]来改变叶子大小，再对根节点进行最大堆维护
heapsort(a);
