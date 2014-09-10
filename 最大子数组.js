/**
 * Created by liyuhang on 14-9-9.
 */
var max_cross_mid=function(a,low,mid,high){//a为传入的数组
    mid=Math.floor(mid);
    var sum=0;
    var left_max=null;
    var right_max=null;
    var left= 0,right=0;
    for(var i=mid-1;i>=low;i--){
        sum=sum+a[i];
        if(left_max==null||sum>left_max){
            left_max=sum;
            left=i;
        }
    }
    sum=0;
    for(i=mid;i<high;i++){
        sum=sum+a[i];
        if(right_max==null||sum>right_max){
            right_max=sum;
            right=i;
        }
    }
    var end=[left,right,left_max+right_max];
    if(low==high){end=[low,high,a[low]]};
    return  end;//通过中点的最大子数组
}//通过中点的最大子数组;
var cc=[1,4,5];
//console.log(max_cross_mid(cc,0,cc.length/2,cc.length));

var max_array=function(a,low,high){//end为返回的数组
    var temp_left=null,temp_cross=null,temp_right=null;
    var end=null;
    var mid=Math.floor((low+high)/2);//console.log(low+"~~"+high);
    if(low==high){
        end=[low,high,a[low]];
        return end;
    }//当下标和上表相等的时候，返回下标，上标，和此时的值。递归的最底层
    else{
        temp_left=max_array(a,low,mid);//对左边采取递归
        temp_cross=max_cross_mid(a,low,mid,high);//通过中点的最大子数组
        temp_right=max_array(a,mid+1,high);//对右边采取递归
        if(temp_left[2]>=temp_right[2]&&temp_left[2]>=temp_cross[2]){
            return temp_left;
        }
        else if(temp_right[2]>=temp_cross[2]&&temp_right[2]>=temp_left[2]){
            return temp_right;
        }
        else if(temp_cross[2]>=temp_left[2]&&temp_cross[2]>=temp_right[2]){
            return temp_cross;
        }//最大子数组为左边最大子数组，右边最大子数组，通过中点的最大子数组中的最大值
    }//递归结束
};

//var b=[2,4,-2,6,-13,9,34,76,-16,-7,19,-1,32,-29,12,-17];
var b=[-1,-2,-5,-11,-16,-10];
console.log(max_array(b,0, b.length-1));

