import React from "react";
import { Tabs } from 'antd';
import DefaultImg from "../../../public/assets/images/default_img.jpg"
import MapComponent from "../sections/map"
export default function Tabsection(profile) {
    const { TabPane } = Tabs;
    const onChange = (key) => {
        console.log(key);
    }

    return (
        <>
            <Tabs animated tabPosition="top"
                className='' defaultActiveKey="1" onChange={onChange} >
                <TabPane
                    tab="Profile" key="1"  >
                    <div div className="pb-10 pt-4">
                        <div className="flex gap-10 pb-10">
                            <img
                                // src={DefaultImg}
                                src={DefaultImg}
                                alt="DefaultImg"
                                className="w-[170px]  mb-2 h-[170px] object-cover rounded-[50%]"
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null;
                                    currentTarget.src = DefaultImg;
                                }}
                            />
                            <div>
                                <div className="flex pb-3 pt-2">
                                    <h2 className="w-[25%] text-[20px] font-normal text-gray-400">Username  </h2>
                                    <span className="pt-1 mx-6"> : </span>
                                    <h2 className="text-[20px] font-semibold text-gray-600">{profile?.profile?.Username}</h2>
                                </div>

                                <div className="flex pb-3">
                                    <h2 className="w-[25%]  text-[20px] font-normal text-gray-400">Email Id </h2>
                                    <span className="pt-1 mx-8"> : </span>
                                    <h2 className="text-[20px] font-semibold text-gray-600">{profile?.profile?.emailid}</h2>
                                </div>

                                <div className="flex pb-3">
                                    <h2 className=" w-[25%]  text-[20px] font-normal text-gray-400">Phone  </h2>
                                    <span className="pt-1 mx-6"> : </span>
                                    <h2 className="text-[20px] font-semibold text-gray-600">{profile?.profile?.phonenumber}</h2>
                                </div>

                            </div>
                        </div>
                        <MapComponent />
                    </div>
                </TabPane>

                <TabPane tab="Posts" key="2">
                    <div className="relative h-[60vh]">
                        <h1 className="upcoming  whitespace-nowrap text-[80px] font-black text-gray-400">Coming Soon</h1>
                    </div>

                </TabPane>

                <TabPane tab="Gallery" key="3">
                    <div className="relative h-[60vh]">
                        <h1 className="upcoming  whitespace-nowrap text-[80px] font-black text-gray-400">Coming Soon</h1>
                    </div>
                </TabPane>

                <TabPane tab="To Do" key="4">
                    <div className="relative h-[60vh]">
                        <h1 className="upcoming  whitespace-nowrap text-[80px] font-black text-gray-400">Coming Soon</h1>
                    </div>
                </TabPane>

            </Tabs>
        </>
    )
}