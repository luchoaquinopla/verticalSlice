class addToCartService{
    constructor(cartRepository){
        this.cartRepository = cartRepository;
    }

    addProduct(product) {
        if(!product || !product.name || !product.price){
            throw new Error('Datos de producto no válidos');
        }
        const repository = this.cartRepository.getRepository();
        repository.push(product)
    }
    /* Metodo para obtener la lista*/
    getAllProducts() {
        return this.cartRepository.getRepository();  
        
    }
    
}
module.exports = addToCartService;