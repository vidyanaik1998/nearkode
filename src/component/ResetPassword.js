import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/global.css"
import { Button, Checkbox, Form, Input } from 'antd';
import { EMAIL_REGEX_PATTERN, messages, MOBILE_REGEX_PATTERN, NAME_REGEX_PATTERN } from "../helpers/enum"
import { edit } from '../services/profileSlice';
import { useDispatch, useSelector } from 'react-redux';
import { CloseCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { notification } from "antd";

const openNotification = (isSuccess, errorMessage) => {
    notification.open({
        message: isSuccess ? "Success" : "Error",
        description: isSuccess
            ? "Your data has been saved successfully."
            : errorMessage,
        icon: isSuccess ? (
            <CheckCircleOutlined style={{ color: "#27AE60" }} />
        ) : (
            <CloseCircleOutlined style={{ color: "#EB5757" }} />
        ),
    });
};
export default function ResetPassword() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.profile);
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Success:', values);

        const data = {
            emailid: values.email,
            password: values.password
        };
        if(values.password === values.repassword){
        if (user?.profile.filter((item) => item.emailid === values.email).length === 0) {
            openNotification(false,
                "Email id is not registered . Please register"
            );
            setTimeout(function () {
                form.resetFields();
            }, 1000);

        }
        else {
            dispatch(edit(data ));
            openNotification(true,
                "Password changed ! . Your password  has been chnaged successfully  "
            );
            setTimeout(() => {
                navigate("/");    
              }, 1000);
          
        }
    }
    else{
        openNotification(false,
            "Passwords are not matching  "
        ); 
    }
      
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div className="h-[100vh]">
            <section>
                <div class="curve">
                </div>
            </section>
            <div className="card bg-white md:w-[40%] w-[85%] border rounded-t-[20px] rounded-b-[20px] ">
                <h2 className=" bg-gray-100 p-10  rounded-t-[20px] text-[20px] text-gray-500 font-medium text-center ">Reset Password</h2>
                <div className="h-[430px] pt-4 overflow-x-hidden px-10 overflow-auto">
                    <div>
                        <Form
                        form={form}
                            name="basic"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >

                            <Form.Item
                                label="Email Id"
                                name="email"
                                rules={[
                                    {
                                        pattern: EMAIL_REGEX_PATTERN,
                                        message: messages.EMAIL_ERROR,
                                    },
                                    {
                                        required: true,
                                        message: messages.EMAIL_MISSING,
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
                                        message: 'Please enter your password!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item
                                label="Password"
                                name="repassword"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your password!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>


                            <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <button type="submit" className="bg-[#4a43af] text-white px-5 py-3 rounded-[4px]">
                                    Submit
                                </button>
                            </Form.Item>
                        </Form>

                    </div>
                    <div className=" text-end">
                            <Link to="/">
                                <p className="text-[#4a43af]">Regsiter</p>
                            </Link>
                        </div>
                </div>
            </div>
        </div>
    )
}