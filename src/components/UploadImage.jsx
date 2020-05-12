import React from 'react'
import Button from '@material-ui/core/Button'
const UploadImage = (props) => {

    const onChange = () => {

    }


    return (
        <>
        <input
          color="primary"
          accept="image/*"
          type="file"
          onChange={onChange}
          id="icon-button-file"
          style={{ display: 'none', }}
        />
          <Button
            variant="contained"
            size="large"
            color="primary"
          >
          </Button>
      </>
    )
}

export default UploadImage