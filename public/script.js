const top1=document.getElementById('top')
const topleft=document.getElementById('topleft')
const p=document.getElementsByClassName('p')
const s=document.getElementById('s')
const result=document.getElementById('result')
const d1=document.getElementById('d1')
function results(){
    if(p[0].innerText=="*"&&p[1].innerText=="*"&&p[2].innerText=="*"){
        //  result.append("Player 1 win")
        result.innerText="player 1 wins"
        d1.append(result)
     }
    
     else if(p[3].innerText=="*"&&p[4].innerText=="*"&&p[5].innerText=="*"){
        //  result.append("Player 1 win")
        result.innerText="player 1 wins"
        d1.append(result)
     }
    
     else if(p[6].innerText=="*"&&p[7].innerText=="*"&&p[8].innerText=="*"){
        //  result.append("Player 1 win")
        result.innerText="player 1 wins"
        d1.append(result)
     }
     
     else if(p[0].innerText=="*"&&p[3].innerText=="*"&&p[6].innerText=="*"){
        //  result.append("Player 1 win")
        result.innerText="player 1 wins"
        d1.append(result)
     }
     
     else if(p[1].innerText=="*"&&p[4].innerText=="*"&&p[7].innerText=="*"){
         //  result.append("Player 1 win")
         result.innerText="player 1 wins"
         d1.append(result)
      }
    
      else if(p[2].innerText=="*"&&p[5].innerText=="*"&&p[8].innerText=="*"){
         //  result.append("Player 1 win")
         result.innerText="player 1 wins"
         d1.append(result)
      }
    
      else if(p[0].innerText=="*"&&p[4].innerText=="*"&&p[8].innerText=="*"){
         //  result.append("Player 1 win")
         result.innerText="player 1 wins"
         d1.append(result)
      }
     
      else if(p[2].innerText=="*"&&p[4].innerText=="*"&&p[6].innerText=="*"){
         //  result.append("Player 1 win")
         result.innerText="player 1 wins"
         d1.append(result)
      }
    }

    function results1(){
        if(p[0].innerText=="O"&&p[1].innerText=="O"&&p[2].innerText=="O"){
            //  result.append("Player 1 win")
            result.innerText="player 2 wins"
            d1.append(result)
         }
         else if(p[3].innerText=="O"&&p[4].innerText=="O"&&p[5].innerText=="O"){
            //  result.append("Player 1 win")
            result.innerText="player 2 wins"
            d1.append(result)
         }
         else if(p[6].innerText=="O"&&p[7].innerText=="O"&&p[8].innerText=="O"){
            //  result.append("Player 1 win")
            result.innerText="player 2 wins"
            d1.append(result)
         }
         else if(p[0].innerText=="O"&&p[3].innerText=="O"&&p[6].innerText=="O"){
            //  result.append("Player 1 win")
            result.innerText="player 2 wins"
            d1.append(result)
         }
         else if(p[1].innerText=="O"&&p[4].innerText=="O"&&p[7].innerText=="O"){
            //  result.append("Player 1 win")
            result.innerText="player 2 wins"
            d1.append(result)
         }
         else if(p[2].innerText=="O"&&p[5].innerText=="O"&&p[8].innerText=="O"){
            //  result.append("Player 1 win")
            result.innerText="player 2 wins"
            d1.append(result)
         }
         else if(p[0].innerText=="O"&&p[4].innerText=="O"&&p[8].innerText=="O"){
            //  result.append("Player 1 win")
            result.innerText="player 2 wins"
            d1.append(result)
         }
         else if(p[2].innerText=="O"&&p[4].innerText=="O"&&p[6].innerText=="O"){
            //  result.append("Player 1 win")
            result.innerText="player 2 wins"
            d1.append(result)
         }
       }
topleft.addEventListener('click',()=>{
    //    const p=document.createElement('p')
       p[0].innerText="*"
       topleft.append(p[0])
       results()
})
topleft.addEventListener('wheel',()=>{
    //    const p=document.createElement('p')
       p[0].innerText="O"
       topleft.append(p[0])
       results1()
})
topmiddle.addEventListener('click',()=>{
    // const p=document.createElement('p')
    p[1].innerText="*"
    topmiddle.append(p[1])
    results()
})
topmiddle.addEventListener('wheel',()=>{
    // const p=document.createElement('p')
    p[1].innerText="O"
    topmiddle.append(p[1])
    results1()
})
topright.addEventListener('click',()=>{
    // const p=document.createElement('p')
    p[2].innerText="*"
    topright.append(p[2])
    results()
})
topright.addEventListener('wheel',()=>{
    // const p=document.createElement('p')
    p[2].innerText="O"
    topright.append(p[2])
    results1()
})
mleft.addEventListener('click',()=>{
    // const p=document.createElement('p')
    p[3].innerText="*"
    mleft.append(p[3])
    results()
})
mleft.addEventListener('wheel',()=>{
    // const p=document.createElement('p')
    p[3].innerText="O"
    mleft.append(p[3])
    results1()
})
mmiddle.addEventListener('click',()=>{
    // const p=document.createElement('p')
    p[4].innerText="*"
    mmiddle.append(p[4])
    results()
})
mmiddle.addEventListener('wheel',()=>{
    // const p=document.createElement('p')
    p[4].innerText="O"
    mmiddle.append(p[4])
    results1()
})
mright.addEventListener('click',()=>{
    // const p=document.createElement('p')
    p[5].innerText="*"
    mright.append(p[5])
    results()
})
mright.addEventListener('wheel',()=>{
    // const p=document.createElement('p')
    p[5].innerText="O"
    mright.append(p[5])
    results1()
})
bleft.addEventListener('click',()=>{
    // const p=document.createElement('p')
    p[6].innerText="*"
    bleft.append(p[6])
    results()
})
bleft.addEventListener('wheel',()=>{
    // const p=document.createElement('p')
    p[6].innerText="O"
    bleft.append(p[6])
    results1()
})
bmiddle.addEventListener('click',()=>{
    // const p=document.createElement('p')
    p[7].innerText="*"
    bmiddle.append(p[7])
    results()
})

bmiddle.addEventListener('wheel',()=>{
    // const p=document.createElement('p')
    p[7].innerText="O"
    bmiddle.append(p[7])
    results1()
})
bright.addEventListener('click',()=>{
    // const p=document.createElement('p')
    p[8].innerText="*"
    bright.append(p[8])
    results()
})
bright.addEventListener('wheel',()=>{
    // const p=document.createElement('p')
    p[8].innerText="O"
    bright.append(p[8])
    results1()
})
