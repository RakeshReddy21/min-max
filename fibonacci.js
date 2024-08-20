num=7
a=0;
b=1;
while(a<=num){
    
    c=a+b;
    a=b;
    b=c
}
console.log(a)


num=prompt("Enter the number: ")
rev=""
res=""
if(num[0]=="-"){
    for(i=num.length-1;i>=1;i--){
        rev=rev+num[i]
    }
    rev="-"+Number(rev)
    console.log(rev)
}
else{
for(i=num.length-1;i>=0;i--){
    res=res+num[i]
}
console.log(Number(res));
}


num=5
res=""
a=0;
b=1;
while(a<=num){
    res+=a+ " "
    c=a+b;
    a=b;
    b=c
}
console.log(res)

