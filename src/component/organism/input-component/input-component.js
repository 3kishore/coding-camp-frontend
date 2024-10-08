import React, { useState } from 'react';

const InputComponent = ({
  placeholder="Please Enter",
  input,
  meta,
  allowPattern = null,
  type = "text",
  isBtnTypePass = false
}) => {

  const [inputType, setInputType] = useState(type);

  const onChange = (event) => {
    if(allowPattern){
      const regex = new RegExp(allowPattern);
      if(!regex.test(event.target.value)){
        event.target.value = input.value;
      }
    }
    input.onChange(event);
  }

  const toggleInputType = () => {
    setInputType(prevType => (prevType === "password" ? "text" : "password"));
  }


  return (
    <div>
      <div className='flex flex-wrap gap-2 relative'>
        <input className="text-input" onChange={onChange} value={input.value} type={inputType} placeholder={placeholder} />
        {isBtnTypePass && <button type="button" className="absolute top-[10px] right-2" onClick={toggleInputType}>
          {inputType === "password" ? <span className="material-symbols-outlined">visibility_off</span> : 
            <span className="material-symbols-outlined">visibility</span>
          }
        </button>}
      </div>
      {meta.submitFailed && <div className="mt-2 text-xs text-red-dark">{meta.error}</div>}
    </div>
  )
}

export default InputComponent;
