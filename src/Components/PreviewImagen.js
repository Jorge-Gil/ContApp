import React,{useState} from 'react'

const PreviewImagen = ({file}) => {
const [preview,setPreview] = useState(null)

const reader = new FileReader()

reader.readAsDataURL(file)
reader.onload = () => {
    setPreview(reader.result)
}

  return (
      <div className="text-center">

        {preview ? <img src={preview} alt="preview" width="200px" height="200px" className='mb-2 inline-block' /> : "Cargando..."}
    </div>
  )
}

export default PreviewImagen