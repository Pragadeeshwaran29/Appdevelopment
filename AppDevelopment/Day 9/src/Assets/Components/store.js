import { createStore } from 'redux';

const Initialstate={
  

  insinform: "yearly"
}

const Store=createStore((state = Initialstate)=>state);


export default Store;