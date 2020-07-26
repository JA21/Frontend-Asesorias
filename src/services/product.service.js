import Api from '../common/api'

const controller = 'products';

class ProductService{
  
  getProducts(){
    return Api.get(controller)
  }

  createProduct(data){
    return Api.post(controller, data)
  }

  updateProduct(data){
    return Api.put(controller, data)
  }

  deleteProduct(idProduct){
    return Api.delete(controller, idProduct)
  }
}
export default new ProductService();