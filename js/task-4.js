function getShippingCost(country) {
    const delivery = country;
    switch (delivery) {
        case `Australia`:{
            console.log(`Shipping to Australia will cost 170 credits`) ;
            break;
       }
        case `China`:{
          console.log(`Shipping to China will cost 100 credits`);
          break;
       }
        case `Chile`:{
        console.log(`Shipping to Chile will cost 250 credits`);
        break;
    }
        case `Jamaica`:{
        console.log(`Shipping to Jamaica will cost 120 credits`);
        break;
    }  
       default: {
           console.log(`Sorry, there is no delivery to your country`);
         
    }
    }
     
}
console.log(getShippingCost(`Australia`));
console.log(getShippingCost(`Germany`));
console.log(getShippingCost(`China`));
console.log(getShippingCost(`Chile`));
console.log(getShippingCost(`Jamaica`));
console.log(getShippingCost(`Sweden`));
