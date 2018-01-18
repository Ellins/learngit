import React from 'react';
import ReactDOM from 'react-dom';
// import { DatePicker } from 'antd';
// import { Pagination } from 'antd';
import './style.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
//class Date extends React.Component {
//     render(){
//         return(
//             <div>
//             <DatePicker/>
//             <Pagination defaultCurrent={1} total={50} />
//         </div>
//         )
//     }
// }
// export { Date };
//
 class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (

      <Form onSubmit={this.handleSubmit} className="login-form">
          <h3 className='title'>LOGIN</h3>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export { WrappedNormalLoginForm };
