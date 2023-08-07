function Max(){ 
let a=document.getElementById("num").value;
let arr=[];
arr=a.split(" ");
let maxi=parseInt(arr[0]);
for(let j=1;j<arr.length;j++){ 
    if(maxi<parseInt(arr[j])){
        maxi=arr[j];
    }
}
document.getElementById("num1").value=maxi;
}

function Min(){ 
    let a=document.getElementById("num").value;
    let arr=[];
    arr=a.split(" ");
    let maxi=parseInt(arr[0]);
    for(let j=1;j<arr.length;j++){ 
        if(maxi>parseInt(arr[j])){
            maxi=arr[j];
        }
    }
    document.getElementById("num2").value=maxi;
    }

    function Evencount(){ 
        let a=document.getElementById("num").value;
        let arr=[];
        let count=0;
        arr=a.split(" ");
        for(let j=0;j<arr.length;j++){ 
            if(parseInt(arr[j])%2==0){
                count++;
            }
        }
        document.getElementById("num3").value=count;
        }

        function Oddcount(){ 
            let a=document.getElementById("num").value;
            let arr=[];
            let count=0;
            arr=a.split(" ");
            if(arr>0){ 
            for(let j=0;j<arr.length;j++){ 
                if(parseInt(arr[j])%2!=0){
                    count++;
                }
            }
           document.getElementById("num4").value=count;}
           else{
            document.getElementById("num4").value=count;
           }
            }

