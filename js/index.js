const a = parseFloat(prompt("Enter a value"));
const b = parseFloat(prompt("Enter a value"));
const c = parseFloat(prompt("Enter a value"));

function quadraticEquation(a ,b ,c) {
    const dis = discriminant(a,b,c);
    alert(dis);
    let x1 = 0;
    let x2 = 0;
    if(dis > 0){
        x1 = (-b + Math.sqrt(dis))/(2*a);
        x2 = (-b - Math.sqrt(dis))/(2*a);
        alert("Roots: x1="+x1+" x2="+x2);
    }
    if(dis === 0){
        x1= -b/(2*a)
        alert("Roots: x1=x2="+x1);
    }
    if (dis < 0){
        alert("There is no roots");
        alert(dis);
    }
    return 0;
}

function discriminant(a ,b ,c){
    return Math.pow(b,2) - 4*a*c;
}
quadraticEquation(a,b,c);