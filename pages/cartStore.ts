import create from 'zustand'


type State = {
    cart: [],
    nameProd: string,
    price: number,
    amount: any,
    slug: string,
    setCart: () => void,
    addToCart: (nameProd: string, price: number, amount: any, slug: string ) => void,

}

export const useCartStore = create<State>(set => ({
    cart: [],
    addToCart: () => set(state => ({
        const currentProdAdded = cart.find((prod: any) => prod.name === nameProd)
console.log(currentProdAdded)
  if(currentProdAdded) {
    const cartFilteredCurrentProd = cart.filter((prod: any) => prod.name !== nameProd)
    console.log(nameProd)
    setCart([
      ...cartFilteredCurrentProd,
      {nameProd, price, slug, amount: currentProdAdded.amount = qty}
    ])

  }else{
    setCart([...cart, {nameProd, price, slug, amount: qty}])
    
  }
})),

}))