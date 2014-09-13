/**
 * Created by liyuhang on 14-9-7.
 */
function guibing(x,one,two){
    if (x.length==1){
        return x;
    }
    else{
        var length1= Math.floor(x.length/2);
        var length2= x.length-length1;
    }
    var a=[],b=[];
    for(var i=0;i<length1;i++){
        a.push(x[i])
    }
    for(i;i<length1+length2;i++){
        b.push(x[i]);
    }
    a=guibing(a);
    b=guibing(b);
    return c=sort(a,b);
}
function sort(x,y){
    var array=[];
    var length= x.length+ y.length;
    var i=0,j=0;
    x.push("true");
    y.push("true");
    for(;i+j<length;){
        if(x[i]=="true"||x[i]>=y[j]){
            array[i+j]=y[j];
            j++;
        }
        else if(y[j]=="true"||x[i]<y[j]){
            array[i+j]=x[i];
            i++;
        }
    }
    return array;
}//true为哨兵  假设X,Y已经排好序
var array=[3,4,8,1,2,11,3];
console.log(guibing(array));
