const products = require("../Data/product");

const resolvers = {
  Query: {
    products: () => products,
    product:(_,{id})=> products.find((item)=> item.id ===id)
  },
  Mutation :{
    createProduct: (_,{title,category,price,inStock})=>{
        const newlycreateProducts = {
            id: String(products.length+1),
            title,
            category,
            price,
            inStock
        }
        products.push(newlycreateProducts)
        return newlycreateProducts
    }
  }
};

module.exports = resolvers;
