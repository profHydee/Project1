function multiplyFunction(p,c){
    var result= p * c;
    document.getElementById('come').innerHTML=result;
    }

    multiplyFunction(10,3.5);
function subtractFunction(p,q){
    var result= q -p;
    document.getElementById('come').innerHTML=result;
}
subtractFunction(2,10);
    subtractFunction(10,30);

function addFunction(a,b,c){
var addAll= a + b + c;
document.getElementById('come').innerHTML=addAll;
}

addFunction(5,5,10);

function testIt(c,d,e){
    var p=c+e;
    var z= p**2 -d;
    document.getElementById('come').innerHTML=z;
}

testIt(4,6,2);
testIt(10,30,2);
testIt(1,10,2);

function stillTesting(a,y){
    var q= y-a;
    var s= a-y;
    if (y < a){
        document.getElementById('come').innerHTML=s;
    }
    else{
        document.getElementById('come').innerHTML=q;
    }
}
stillTesting(5,10);
stillTesting(20,10);
stillTesting(10,10);

function mod(a,b){
    var g= a%b;
    document.getElementById('come').innerHTML=g;
}
mod(10,3);
function areaOfTriangle(b,h){
    var area=0.5 * b * h;
    document.getElementById('come').innerHTML=area;
}
areaOfTriangle(5,6);
areaOfTriangle(0.15,7);
areaOfTriangle(5,2.5);

function areaofafootballfield(x,y,z){
    var fieldarea= x * y * z;
    document.getElementById('come').innerHTML=fieldarea;
}
areaofafootballfield(1.5,2.5,4.5)
























