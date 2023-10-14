import React, {useState} from 'react';
import MerchForm from './MerchForm';
import ImagePicker from './ImagePicker';
import AddToStore from './AddToStore';

const Merchandize = () => {

  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [desc, setDesc]= useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState();

  return (
    <div className='Merchandize-root'>
      <div className='Merchandize-header'>Merchandize</div>
      <div className='Merchandize-box'>
        <MerchForm text={"Enter Name"} setValue={setName}/>
        <ImagePicker image={image} setImage={setImage}/>
        <MerchForm text={"Enter Description"} setValue={setDesc}/>
        <MerchForm text={"Enter Quantity"} setValue={setQuantity}/>
        <MerchForm text={"Enter Price"} setValue={setPrice}/>
        <AddToStore name={name} img={image?.url} desc={desc} quantity={quantity} price={price}/>
      </div>
    </div>
  )
}

export default Merchandize;