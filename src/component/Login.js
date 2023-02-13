import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/global.css"
import { Button, Checkbox, Form, Input } from 'antd';
import { EMAIL_REGEX_PATTERN, messages } from "../helpers/enum"
import { useDispatch, useSelector } from 'react-redux';
import { CloseCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { notification } from "antd";

const openNotification = (isSuccess, errorMessage) => {
    notification.open({
        message: isSuccess ? "Success" : "Error",
        description: isSuccess
            ? errorMessage
            : errorMessage,
        icon: isSuccess ? (
            <CheckCircleOutlined style={{ color: "#27AE60" }} />
        ) : (
            <CloseCircleOutlined style={{ color: "#EB5757" }} />
        ),
    });
};


export default function Login() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.profile);

    const onFinish = (values) => {
        if (user?.profile.filter((item) => item.emailid === values.email).length > 0) {
            if (user?.profile.filter((item) => item.emailid === values.email)[0].password == values.password) {
                openNotification(true,
                    "Logged in successfully"
                );
                setTimeout(() => {
                    navigate(`/dashboard/${user?.profile.filter((item) => item.emailid === values.email)[0].emailid}`);
                }, 1000);
            }
            else {
                openNotification(false,
                    "Invalid credentials"
                );
            }
        }
        else {
            openNotification(false,
                "Email id is not registered . Please register"
            );
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    console.log("onFinishFailed", user.profile)

    return (
        <div className="h-[100vh]">
            <section>
                <div class="curve">
                </div>
            </section>
            <div className="card bg-white md:w-[40%] w-[85%] border rounded-t-[20px] rounded-b-[20px] ">
                <h2 className=" bg-gray-100 p-10  rounded-t-[20px] text-[20px] text-gray-500 font-medium text-center ">Login to  account</h2>
                <div className="h-[430px] pt-5 overflow-x-hidden  px-10 overflow-auto">
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
                                name="remember"
                                valuePropName="checked"
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Checkbox>Remember me</Checkbox>
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
                        <div className=" flex gap-1 justify-end">
                            <p>New User ?</p>
                            <Link to="/register">
                                <p className="text-[#4a43af]">Register</p>
                            </Link>
                        </div>
                        <Link to="/reset">
                            <p className="text-[#4a43af] text-end">Forgot Password </p>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}