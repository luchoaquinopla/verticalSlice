class cartRepository{
    constructor(){
        /*simulamos una base de datos*/
        this.repository = [];
    }
    getRepository(){
        return this.repository;
    }
}
module.exports = cartRepository
