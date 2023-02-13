import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import DefaultImg from "../../../public/assets/images/default_img.jpg"

export default function Navbar(profile) {
    const navigate = useNavigate();
    const [breadcrumbActive, setBreadcrumbActive] = useState(false);

    return (
        <div className="">
            <div className="flex justify-between pb-2">
                <h2 className="text-[18px] text-gray-700 font-semibold">Dashboard</h2>
                <div
                    onClick={() => setBreadcrumbActive(!breadcrumbActive)}
                    className="flex items-center gap-3">
                    <img src={DefaultImg} alt="DefaultImg"
                        className="w-[40px] mb-2 h-[40px] object-cover rounded-[50%]"
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src = DefaultImg;
                        }}
                    />
                    <h2 className="text-[16px] text-gray-600">{profile.profile.Username}</h2>
                </div>
            </div>

            {breadcrumbActive && (
                <>
                    <div className="hamburger rounded-t-[20px] rounded-b-[20px] absolute right-0 top-[60px] sm:top-[95px]  py-7 w-[300px] border  bg-white px-[40px]  font-semibold text-base rounded-md z-20">
                        <div className=" m-auto text-center">
                            <img src={DefaultImg} alt="DefaultImg"
                                className="w-[90px] mb-2 h-[90px] m-auto object-cover rounded-[50%]"
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null;
                                    currentTarget.src = DefaultImg;
                                }}
                            />

                            <h2 className="text-[16px] text-gray-600">{profile.profile.emailid}</h2>
                            <h2 className="text-[16px] pb-3 text-gray-400">{profile.profile.phonenumber}</h2>
                            <div>
                            </div>

                            <button
                                className=" bg-[#cd3d3d] text-white px-4 py-2 rounded-[30px]"
                                onClick={() => navigate(`/`)}
                            >Sign out</button>
                        </div>
                    </div>

                    <div
                        className="opacity-70 mt-[25px] w-full fixed h-full left-0 top-0 z-1"
                        onClick={() => setBreadcrumbActive(false)}
                    >
                        &nbsp;
                    </div>
                    <div
                        className=""
                        onClick={() => setBreadcrumbActive(false)}
                    >
                        &nbsp;
                    </div>
                </>
            )}
        </div>
    )
}