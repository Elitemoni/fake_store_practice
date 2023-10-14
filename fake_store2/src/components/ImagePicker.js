import React, {useState, useRef} from 'react';

const ImagePicker = ({image, setImage}) => {
  const fileInputRef = useRef(null);

  const selectFile = () => {
    fileInputRef.current.click();
  }

  const onFileSelect = (e) => {
    const file = e.target.files;
    if (file[0].type.split('/')[0] === 'image'){
      setImage({
        name: file[0].name,
        url: URL.createObjectURL(file[0])
      });
    }
  }

  const deleteImage = () => {
    setImage(null);
  }

  return (
    <div className='ImagePicker-root'>
      {image ? (
        <img className='ImagePicker-image' src={image.url}/>
      ) : (
        <div className='ImagePicker-textover-container'>
          <div className='ImagePicker-textover'>
            Browse for an image
          </div>
        </div>
      )}
      <div className='ImagePicker-nonimage-container'>
        <div className='ImagePicker-browse-container'>
          <button className='ImagePicker-browse-button' onClick={(e) => selectFile(e)}>
              Browse
          </button>
          <input
            name='file'
            type='file'
            className='ImagePicker-input'
            ref={fileInputRef}
            onChange={onFileSelect}
          />
        </div>
        <div className='ImagePicker-delete-container'>
          <button className='ImagePicker-delete-button' onClick={(() => deleteImage())}>X</button>
        </div>
      </div>
    </div>
  )
}

export default ImagePicker;