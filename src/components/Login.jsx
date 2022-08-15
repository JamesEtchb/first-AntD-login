import { Form, Input, Button } from 'antd'

const handleForm = ({ email, password }) => {
  alert(`Form submitted with ${email} and ${password}`)
}

function Login() {
  return (
    <>
      <h2>Login</h2>
      <Form
        onFinish={handleForm}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'You need to input a valid Email.',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'You need to input a valid Password.',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Button type="primary" htmlType="sumbit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default Login
