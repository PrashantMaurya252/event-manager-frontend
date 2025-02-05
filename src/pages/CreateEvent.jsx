import { useState } from "react"
import { useDropzone } from "react-dropzone"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'


const CreateEvent = () => {
    const [selectedPhoto,setSelectedPhoto] = useState(null)
    const [eventType,setEventType] = useState("free")

    const onDrop = async(acceptedFile)=>{
        console.log(acceptedFile)
        setSelectedPhoto(acceptedFile[0])
    }

    const {getRootProps,getInputProps} = useDropzone({onDrop})

    const onSubmit = (data)=>{
        console.log("data",{...data,image:selectedPhoto})
    }

    const eventSchema = yup.object({
        title:yup.string().required("Title is required"),
        description:yup.string().required("Description is required"),
        type:yup.string().oneOf(["free","paid"]).required("Type is required"),
        category:yup.string().oneOf(["AI","Spritual","Programming","Music"]).required("category is required"),
        date:yup.string().required("Event date is required"),
        price:yup.number().typeError("Price must be number").positive("Price must be positive").when("type",{
            is:"Paid",
            then:yup.number().required("price is required")
        })
    })

    const {register,handleSubmit,watch,formState:{errors}} = useForm({resolver:yupResolver(eventSchema)})
  return (
    <div>CreateEvent</div>
  )
}

export default CreateEvent