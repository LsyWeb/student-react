import React from 'react'
import Modal from '../Modal'

export default function Loading(props) {
  return (
    <div>
      {
        props.show &&
        (<Modal >
          <div style={{ color: '#fff' }}>加载中...</div>
        </Modal>)
      }

    </div>
  )
}
