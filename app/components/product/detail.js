import Component from '@glimmer/component';

export default class ProductDetailComponent extends Component {
    
    get starArray(){
        var starArray = []
        for (let index = 0; index < this.args.star; index++) {
            starArray.push(index);
        }
        return starArray;
    }
}
