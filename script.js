//Declare the variables
let price=0;
 let btnquote=document.getElementById("btnquote")
let outprice=document.getElementById("total-price");
let buybtn=document.getElementById("buy")
let number=document.getElementById("number");
let numbers=0;
let names=document.getElementById("name");
let password=document.getElementById("password");
let email=document.getElementById("email");
let last=document.getElementById("lastName");

// add to cart button variables
let addtocart=document.getElementById("buy");
let addtocart2=document.getElementById("buy1");
let addtocart3=document.getElementById("buy2");
let addtocart4=document.getElementById("buy3");
let addtocart5=document.getElementById("buy4");
let addtocart6=document.getElementById("buy5");
let addtocart7=document.getElementById("buy6");
let addtocart8=document.getElementById("buy7");



 
 


//amount variables
let amount=0;
let outamount=document.getElementById("amount");
let outamount2=document.getElementById("amount2");
let outamount3=document.getElementById("amount3");
let outamount4=document.getElementById("amount4");
let outamount5=document.getElementById("amount5");
let outamount6=document.getElementById("amount6");
let outamount7=document.getElementById("amount7");
let outamount8=document.getElementById("amount8");

//plus button variables
let plus=document.getElementById("plus");
let plus2=document.getElementById("plus2");
let plus3=document.getElementById("plus3");
let plus4=document.getElementById("plus4");
let plus5=document.getElementById("plus5");
let plus6=document.getElementById("plus6");
let plus7=document.getElementById("plus7");
let plus8=document.getElementById("plus8");
//minus button variables

let minus=document.getElementById("minus");
let minus2=document.getElementById("minus2");
let minus3=document.getElementById("minus3");
let minus4=document.getElementById("minus4");
let minus5=document.getElementById("minus5");
let minus6=document.getElementById("minus6");
let minus7=document.getElementById("minus7");
let minus8=document.getElementById("minus8");
let outitemprice=document.getElementById("item-price")
// add to cart function
addtocart2.addEventListener("click",function(){
    numbers+=1;
 number.innerHTML=numbers

 })
addtocart.addEventListener("click",function(){
    numbers+=1;
 number.innerHTML=numbers
 })
 addtocart3.addEventListener("click",function(){
    numbers+=1;
 number.innerHTML=numbers
 })
 
 addtocart4.addEventListener("click",function(){
    numbers+=1;
 number.innerHTML=numbers
 })
 
 addtocart5.addEventListener("click",function(){
    numbers+=1;
 number.innerHTML=numbers
 })
 
 addtocart6.addEventListener("click",function(){
    numbers+=1;
 number.innerHTML=numbers
 })
 addtocart7.addEventListener("click",function(){
    numbers+=1;
 number.innerHTML=numbers
 })
 

 addtocart8.addEventListener("click",function(){
    numbers+=1;
 number.innerHTML=numbers
 })
//plus and minus buttons code for increase or decrease the amount

plus.addEventListener("click",function(){
amount+=1;
outamount.innerHTML=amount;
})

minus.addEventListener("click",function(){

    if(amount==0){
        amount=0;
        return outamount.innerHTML=amount;
    }
    else{
amount-=1;
return outamount.innerHTML=amount;
 }
})


plus2.addEventListener("click",function(){
    amount+=1;
    outamount2.innerHTML=amount;
    })
    
    minus2.addEventListener("click",function(){
    
        if(amount==0){
            amount=0;
            return outamount2.innerHTML=amount;
        }
        else{
    amount-=1;
    return outamount2.innerHTML=amount;
     }
    })
    plus3.addEventListener("click",function(){
        amount+=1;
        outamount3.innerHTML=amount;
        })
        
        minus3.addEventListener("click",function(){
        
            if(amount==0){
                amount=0;
                return outamount3.innerHTML=amount;
            }
            else{
        amount-=1;
        return outamount3.innerHTML=amount;
         }
        })
        plus4.addEventListener("click",function(){
            amount+=1;
            outamount4.innerHTML=amount;
            })
            
            minus4.addEventListener("click",function(){
            
                if(amount==0){
                    amount=0;
                    return outamount4.innerHTML=amount;
                }
                else{
            amount-=1;
            return outamount4.innerHTML=amount;
             }
            })
            plus5.addEventListener("click",function(){
                amount+=1;
                outamount5.innerHTML=amount;
                })
                
                minus5.addEventListener("click",function(){
                
                    if(amount==0){
                        amount=0;
                        return outamount5.innerHTML=amount;
                    }
                    else{
                amount-=1;
                return outamount5.innerHTML=amount;
                 }
                })
                plus6.addEventListener("click",function(){
                    amount+=1;
                    outamount6.innerHTML=amount;
                    })
                    
                    minus6.addEventListener("click",function(){
                    
                        if(amount==0){
                            amount=0;
                            return outamount6.innerHTML=amount;
                        }
                        else{
                    amount-=1;
                    return outamount6.innerHTML=amount;
                     }
                    })
                    plus7.addEventListener("click",function(){
                        amount+=1;
                        outamount7.innerHTML=amount;
                        })
                        
                        minus7.addEventListener("click",function(){
                        
                            if(amount==0){
                                amount=0;
                                return outamount7.innerHTML=amount;
                            }
                            else{
                        amount-=1;
                        return outamount7.innerHTML=amount;
                         }
                        })
                        plus8.addEventListener("click",function(){
                            amount+=1;
                            outamount8.innerHTML=amount;
                            })
                            
                            minus8.addEventListener("click",function(){
                            
                                if(amount==0){
                                    amount=0;
                                    return outamount8.innerHTML=amount;
                                }
                                else{
                            amount-=1;
                            return outamount8.innerHTML=amount;
                             }
                            })

a.addEventListener("click",function(){
alert( "Your total is " +price + "$Thank you for shooping from Book-ppf !")

})


function Price(outitempricee){
price+=outitempricee * amount;
outprice.innerHTML=price

}

function offer(){
if(names.value !== "" && password.value !== "" && email.value !== "" && last.value !== ""){


    if (price < 80 && price >50 ){
        price-=10
        outprice.innerHTML=price
        alert("congratulations! you get 10$ discount and your total now is"+price)
        price=0
        outprice.innerHTML=price
        amount=0
        outamount.innerHTML=amount
        outamount2.innerHTML=amount
        outamount3.innerHTML=amount
        outamount4.innerHTML=amount
        outamount5.innerHTML=amount
        outamount6.innerHTML=amount
        outamount7.innerHTML=amount
        outamount8.innerHTML=amount
        numbers=0
        number.innerHTML=numbers

    }
    else if(price >=80 && price < 100){
        alert("congratulations! you get 1 another free book and your total is "+price)
        price=0
outprice.innerHTML=price
amount=0
outamount.innerHTML=amount
outamount2.innerHTML=amount
outamount3.innerHTML=amount
outamount4.innerHTML=amount
outamount5.innerHTML=amount
outamount6.innerHTML=amount
outamount7.innerHTML=amount
outamount8.innerHTML=amount
numbers=0
number.innerHTML=numbers
}
    else if(price >=100){
let random= Math.round(Math.random()*35)
price-=random

outprice.innerHTML=price
alert("congratulations! you get "+random+"$ discount and your total now is "+price)
price=0
outprice.innerHTML=price

amount=0
outamount.innerHTML=amount
outamount2.innerHTML=amount
outamount3.innerHTML=amount
outamount4.innerHTML=amount
outamount5.innerHTML=amount
outamount6.innerHTML=amount
outamount7.innerHTML=amount
outamount8.innerHTML=amount
numbers=0
number.innerHTML=numbers
}
    else if(price <= 50 && price > 1){
        alert("Your total is:"+price+"Thank you for purchasing from Book PPF and we will have your books deliverd to your home very soon note: free delivery")
        price=0
        outprice.innerHTML=price
        amount=0
        outamount.innerHTML=amount
        outamount2.innerHTML=amount
        outamount3.innerHTML=amount
        outamount4.innerHTML=amount
        outamount5.innerHTML=amount
        outamount6.innerHTML=amount
        outamount7.innerHTML=amount
        outamount8.innerHTML=amount
        numbers=0
        number.innerHTML=numbers
    }
else{
    alert("Thank you for visiting Book PPF store")

    price=0
outprice.innerHTML=price
amount=0
outamount.innerHTML=amount
outamount2.innerHTML=amount
outamount3.innerHTML=amount
outamount4.innerHTML=amount
outamount5.innerHTML=amount
outamount6.innerHTML=amount
outamount7.innerHTML=amount
outamount8.innerHTML=amount
numbers="0"
number.innerHTML=numbers
}
}
else{
    alert("Error, please put you info")
    
}
}    
function random(){
    const qoutes=["“Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.” —John Wooden","“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.” —Diane McLaren","“It is only when we take chances that our lives improve. The initial and the most difficult risk we need to take is to become honest.” —Walter Anderson","“We cannot solve problems with the kind of thinking we employed when we came up with them.”","“Learn as if you will live forever, live like you will die tomorrow.”"]

let qoute=Math.floor(Math.random() * qoutes.length);
let randome=qoutes[qoute]
alert(randome)


}

