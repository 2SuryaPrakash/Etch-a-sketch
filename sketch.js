let container=document.querySelector('.container');
let num=16;
let mouseState=false;
function makeGrid(n) {
    num=n;
    for(let i=0;i<n;i++)
    {
        
        let c=document.createElement('div');
        
        for(let j=0;j<n;j++) {
            
            let d=document.createElement('div');
            d.className='eas';
            d.textContent='';
            c.appendChild(d);
        }
        
        c.className='cs';
        container.appendChild(c);
            
            
        
    }
    
    document.querySelectorAll('.eas').forEach(x=>{
        x.addEventListener("mousedown",(e)=>{
            if(colorState)
            {
                e.target.style.backgroundColor=selectColor(Math.floor(Math.random() * 999));
            }
            else {
                e.target.style.backgroundColor="black";
            }
            mouseState=true;
        
        });
        x.addEventListener("mouseover",(s)=>{
            if(mouseState==true)
                {
                    if(colorState)
                    {
                        s.target.style.backgroundColor=selectColor(Math.floor(Math.random() * 999));
                    }
                    else {
                        s.target.style.backgroundColor="black";
                    }
                   
                }
                
        });
        x.addEventListener("mouseup",()=>{
            mouseState=false;
        });
    });
}
makeGrid(16);


document.querySelector('#grid-size').addEventListener('click',(x)=>{
    document.querySelectorAll('.eas').forEach(x=>{
        x.removeEventListener('mousedown',()=>{});
        x.removeEventListener('mouseover',()=>{});
        x.removeEventListener("mouseup",()=>{});
    });
    document.querySelectorAll('.cs').forEach(x=>{
        x.remove();
    });

    makeGrid(parseInt(prompt("Enter grid Size (N x N) : ")));
});
document.querySelector('#clear').addEventListener('click',(x)=>{
    document.querySelectorAll('.eas').forEach(x=>{
        x.removeEventListener('mousedown',()=>{});
        x.removeEventListener('mouseover',()=>{});
        x.removeEventListener("mouseup",()=>{});
    });
    document.querySelectorAll('.cs').forEach(x=>{
        x.remove();
    });
    makeGrid(num);
});
function selectColor(number) {
    const hue = number * 137.508; 
    return `hsl(${hue},50%,75%)`;
  }
let colorState=false;
document.querySelector('#toggle').addEventListener('click',(x)=>{
    colorState=(colorState)?false:true;
    x.target.textContent="Color Mode : "+(colorState?"Rainbow":"Black");
});