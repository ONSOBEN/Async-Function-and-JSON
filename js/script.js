'use strict'
import { cardProduct,cardUser } from "../components/cardProduct.js"
import { getData } from "../store/fetchApi.js"
const render = document.querySelector("#render-area")

const products= await getData("products")
const users=await getData("users")

products.map((product)=>{
    render.innerHTML+=cardProduct(product)
})
users.map((user)=>{
    render.innerHTML+=cardUser(user)
})
