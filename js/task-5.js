function getShippingCost(country) {
    const delivery = country;
    price = 90;
    
        switch (delivery) {
            case `Australia`:{
                price = 170 ;
                break;
           }
            case `China`:{
              price = 100;
              break;
           }
            case `Chile`:{
                price = 250;
            break;
        }
            case `Jamaica`:{
                price = 120;
            break;
        }  
           default: {
               return `Sorry, there is no delivery to your country`;
             
        }
        }  
}
console.log(getShippingCost(`Australia`));
console.log(getShippingCost(`Germany`));
console.log(getShippingCost(`China`));
console.log(getShippingCost(`Chile`));
console.log(getShippingCost(`Jamaica`));
console.log(getShippingCost(`Sweden`));
