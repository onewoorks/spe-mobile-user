import React, { useState, useCallback } from 'react'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import axios from 'axios'

const UploadProduct = () => {
    const [upImg, setUpImg] = useState()
    const [imgRef, setImgRef] = useState(null)
    const [crop, setCrop] = useState({ unit: 'px', height: 500, aspect: 1 / 1 })
    const [previewUrl, setPreviewUrl] = useState()
    const [croppedImage, setCroppedImage] = useState(null)

    const onSelectFile = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader()
            reader.addEventListener('load', () => setUpImg(reader.result))
            reader.readAsDataURL(e.target.files[0])
        }
    }

    const onLoad = useCallback((img) => {
        setImgRef(img)
    }, [])

    const makeClientCrop = async (crop) => {
        if (imgRef && crop.width && crop.height) {
            createCropPreview(imgRef, crop, 'newFile.jpeg')
        }
    }

    const createCropPreview = async (image, crop, fileName) => {
        const canvas = document.createElement('canvas')
        const scaleX = image.naturalWidth / image.width
        const scaleY = image.naturalHeight / image.height
        canvas.width = crop.width
        canvas.height = crop.height
        const ctx = canvas.getContext('2d')

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        )

        console.log(crop)

        return new Promise((resolve, reject) => {
            canvas.toBlob((blob) => {
                if (!blob) {
                    reject(new Error('Canvas is empty'))
                    return
                }
                const reader = new FileReader()
                reader.readAsDataURL(blob)
                reader.onloadend = () => {
                    dataURLtoFile(reader.result, 'cropped.jpg')
                }

                blob.name = fileName
                window.URL.revokeObjectURL(previewUrl)
                setPreviewUrl(window.URL.createObjectURL(blob))
            }, 'image/jpeg')
        })
    }

    const dataURLtoFile = (dataurl, filename) => {
        
        let arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n)

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n)
        }
        let cropFile = new File([u8arr], filename, { type: mime })
        setCroppedImage(cropFile)
        // this.setState({croppedImage: croppedImage })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', croppedImage)
        console.log('in')
        axios
            .post('http://localhost:8000/upload/single', formData, {})
            .then((response) => console.log(response))
    }

    return (
        <div className="App">
            <div>
                <input type="file" accept="image/*" onChange={onSelectFile} />
            </div>
            <ReactCrop
                src={upImg}
                onImageLoaded={onLoad}
                crop={crop}
                onChange={(c) => setCrop(c)}
                onComplete={makeClientCrop}
            />
            {previewUrl && <img alt="Crop preview" src={previewUrl} />}

            <div onClick={handleSubmit}>Upload this image</div>
        </div>
    )
}

export default UploadProduct
