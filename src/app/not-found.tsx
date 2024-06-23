import React from 'react'
import { Button, Result } from 'antd';

const notFound = () => {
  return (
    <>
      <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you are looking for is not available!"
          extra={<Button type="primary">Back Home</Button>}
        />
    </>
  )
}

export default notFound