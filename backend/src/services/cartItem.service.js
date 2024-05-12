const CartItem = require("../models/cartItem.model");
const userService = require("../services/user.service");

async function updateCartItem(userId,cartItemId,cartItemData){
    try {
        const item = await findCartItemById(cartItemId);

        if(!item){
            throw new Error("cart item not found for :",cartItemId);
        }

        const user = await userService.findUserById(item.userId);
        
        if(!user){
            throw new Error("user not found",userId);
        }

        if(user._id.toString() === userId.toString()){
            console.log(item);
            item.quantity = cartItemData.quantity;
            item.price = item.quantity*item.product.price;
            item.discountedPrice = item.quantity*item.product.discountedPrice;
            console.log(item);

            const updatedCartItem = await item.save();
            return updatedCartItem;
        }

        else{
            throw new Error("you cannot update this cart item");
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

async function removeCartItem(userId,cartItemId){
    const cartItem = await findCartItemById(cartItemId);
    const user = await userService.findUserById(userId);
    console.log(user._id.toString(), cartItem.userId.toString())

    if(user._id.toString() === cartItem.userId.toString()){
        return await CartItem.findByIdAndDelete(cartItemId);
    }

    throw new Error("you cannot delete other user's item");
}

async function findCartItemById(cartItemId){
    const cartItem = await CartItem.findById(cartItemId);
    if(cartItem){
        return cartItem;
    }
    else{
        throw new Error("cart item not found with id : ",cartItemId);
    }
}

module.exports = {updateCartItem,removeCartItem,findCartItemById}