import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import DefaultImg from "../../public/assets/images/default_img.jpg"
import Navbar from "./sections/Navbar";
import Tabsection from "./sections/tabsection";

export default function Dashboard() {
    const user = useSelector((state) => state.profile);
    const { id } = useParams();
    const navigate = useNavigate();
    const [profile, setprofile] = useState([])
    const [breadcrumbActive, setBreadcrumbActive] = useState(false);

    useEffect(() => {
        setprofile(user?.profile.filter((item) => item.emailid === id)[0]);
        
    }, [id])

    console.log("Dashboard", id, profile)

    return (
        <div className="p-10">
          <Navbar profile={profile} />
          <Tabsection  profile={profile} />

        </div>
    )
}