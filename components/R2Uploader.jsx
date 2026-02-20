import React, { useRef } from "react"
import { set, unset } from "sanity"

const R2Uploader = (props) => {
  const { value, onChange } = props
  const inputRef = useRef(null)

  const handleUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    const formData = new FormData()
    formData.append("file", file)

    const res = await fetch("https://upload.yourdomain.com/api/upload", {
      method: "POST",
      headers: {
        "x-upload-secret": import.meta.env.VITE_UPLOAD_SECRET
      },
      body: formData
    })

    const data = await res.json()

    if (data.url) {
      onChange(set({ url: data.url }))
    }
  }

  return (
    <div>
      {value?.url && (
        <img
          src={value.url}
          alt=""
          style={{ width: "100%", marginBottom: 12 }}
        />
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleUpload}
      />
    </div>
  )
}

export default R2Uploader