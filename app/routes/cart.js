import Route from '@ember/routing/route';

export default class CartRoute extends Route {
    
    model(){
        const items = [
            {price:15},
            {price:10}
        ];
        return items;
    }
    // setupController(controller,model){
    //     super.setupController(controller,model);
    //     const subTotal = model.reduce((accumaleter,item) => {
    //         return accumaleter + item.price;
    //     },0);
    //     controller.set(
    //         'subTotal',subTotal
    //     )
    // }
}
