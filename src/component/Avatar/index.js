import React, { useState } from 'react'
import { Upload, Button, Spin } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import './index.css'
export default function index({ value, onChange }) {
  const [isUpload, setIsUpload] = useState(false)
  return (
    <Spin spinning={isUpload}>
      <Upload
        className="upload"
        name="imagefile"
        action="/api/upload"
        listType="picture-card"
        showUploadList={false}
        beforeUpload={() => { setIsUpload(true) }}
        onChange={(fileList) => {
          if (fileList.file.response) {
            onChange(fileList.file.response.path);
            setIsUpload(false)
          }

        }}
      >
        {value ? <img src={value} /> : <Button type="text" icon={<PlusOutlined />} ></Button>}
      </Upload>
    </Spin>
  )
}
