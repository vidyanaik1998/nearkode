import React, { useState, useEffect } from "react";
import { Link  , useNavigate} from "react-router-dom";
import "../styles/global.css"
import { Button, Checkbox, Form, Input } from 'antd';
import { EMAIL_REGEX_PATTERN, messages, MOBILE_REGEX_PATTERN, NAME_REGEX_PATTERN } from "../helpers/enum"
import { add } from '../services/profileSlice';
import { useDispatch, useSelector } from 'react-redux';
import { CloseCircleOutlined , CheckCircleOutlined } from "@ant-design/icons";
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

export default function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const user = useSelector((state) => state.profile);
    const [profile, setprofile] = useState([]);

    useEffect(() => {
        setprofile(user.profile)

    }, [user])

    const onFinish = (values) => {
        const data = {
            id: user.profile.length + 1,
            Username: values.name,
            phonenumber: values.mobile,
            emailid: values.email,
            password: values.password
        }
        if (user?.profile.filter((item) => item.emailid === values.email).length === 0 && user?.profile.filter((item) => item.phonenumber === values.mobile).length === 0) {
            dispatch(add(data));
            openNotification( true ,
                "Account is created successfully"
            );
            form.resetFields();

            setTimeout(() => {
              navigate("/");    
            }, 1000);
        }
        else if (user?.profile.filter((item) => item.phonenumber === values.mobile).length > 0) {
            openNotification( false ,
                "Mobile number is already exist" 
            );

        }
        else if (user?.profile.filter((item) => item.emailid === values.email).length > 0) {
            openNotification( false ,
                "Email id is already exist . Please Login"
            );
        }
    };
    // console.log('Success:', user);


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
                <h2 className=" bg-gray-100 p-10  rounded-t-[20px] text-[20px] text-gray-500 font-medium text-center ">Create New account</h2>
                <div className="h-[480px] pt-4 overflow-x-hidden  px-10 overflow-auto">
                    <div>
                        <Form
                            name="basic"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                name="name"
                                label="Username"
                                rules={[
                                    {
                                        pattern: NAME_REGEX_PATTERN,
                                        message: messages.NAME_ERROR,
                                    },
                                    {
                                        required: true,
                                        message: messages.USER_NAME_MISSING,
                                    },
                                ]}
                            >
                                <Input
                                    type="text"
                                />
                            </Form.Item>
                            <Form.Item
                                name="mobile"
                                label="Mobile number"
                                rules={[
                                    {
                                        required: true,
                                        message: messages.MOBILE_MISSING,
                                    },
                                    {
                                        message: messages.MOBILE_NUMBER_ERROR,
                                        pattern: MOBILE_REGEX_PATTERN,
                                    },
                                ]}
                            >
                                <Input
                                    type="text"

                                    // pattern="[0-10]*"
                                    maxLength={10}
                                    minLength={10}
                                />
                            </Form.Item>
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
                            <Link to="/register">
                                <p className="text-[#4a43af]">Login</p>
                            </Link>
                        </div>
                </div>
            </div>
        </div>
    )
}