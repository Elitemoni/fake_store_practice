import { createContext, useState, useEffect } from 'react';
import Obsidian_Rock from '../images/obsidian_rock.jpg';
import Red_Rock from '../images/red_rock.avif';
import Amethyst from '../images/amethyst.jpg';
import { useNavigate } from 'react-router-dom';
// What's the point of Link if I can just navigate?

const Context = createContext({});

export const ContextProvider = ({children}) => {

  let stuff = [
    {id: 0, name: 'Obsidian Rock', img: Obsidian_Rock, 
      desc: 'A rock that comes from lava', price: 10, quantity: 3},
    {id: 1, name: 'Red Rock', img: Red_Rock, desc: 'Likely made of iron', price: 3, quantity: 5},
    {id: 2, name: 'Amethyst', img: Amethyst, desc: 'Idk, but looks cool', price: 25, quantity: 8}
  ];

  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [items, setItems] = useState(stuff); //Items the store has
  const [displayItems, setDisplayItems] = useState(items);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  /*useEffect(() => {
    setDisplayItems([...displayItems, items]);
  },[items]); */

  useEffect(() => {
    navigate('/');
  },[search]);

  useEffect(() => {
    let sum = 0;
    for (let el of cartItems){
      sum += el.price * el.quantity;
    }
    setTotalPrice(sum);
  },[cartItems]);

  const buy = () => {
    //Delete all displayItems with quanity 0
    //Delete/subtract all items with cartItems
    //Delete all cartItems
    let newDisplayItems = displayItems.filter((el) => (el.quantity > 0));
    setDisplayItems([...newDisplayItems]);
    setItems([...newDisplayItems]); //in principal this is not ideal
    setCartItems([]);
  }

  const addToStore = (item) => {
    //add item to the store unless it already exists
    let exists = items.find((el) => el.name === item.name);
    if (!exists && item.name !== ''){
      setItems([...items, item]);
      setDisplayItems([...displayItems, item]);
    }
    navigate('/');
  }

  const addToCart = (item) => {
    //subtract 1 from the store and add 1 to the cart
    if (item.quantity > 0){
      item.quantity -= 1;
      setDisplayItems([...displayItems]); //quick reload hack
      let newItem = cartItems.find((el) => el.id === item.id);
      if (newItem){ //already in cart
        newItem.quantity += 1;
        setCartItems([...cartItems]); //I don't understand
      } 
      else { //not in cart
        newItem = Object.assign({}, item);
        newItem.quantity = 1;
        setCartItems([...cartItems, newItem]);
      }
    }
  }

  const deleteCartItem = (item) => {
    let displayItem = displayItems.find((el) => (el.id === item.id));
    displayItem.quantity += item.quantity;
    setDisplayItems([...displayItems]);
    setCartItems(cartItems.filter((el) => (el.id !== item.id)));
  }

  return (
    <Context.Provider value={{
      search, setSearch,
      items, setItems,
      displayItems, setDisplayItems,
      cartItems, setCartItems,
      totalPrice,
      addToCart, deleteCartItem, addToStore, buy,
      navigate
    }}>
      {children}
    </Context.Provider>
  );
}

export default Context;