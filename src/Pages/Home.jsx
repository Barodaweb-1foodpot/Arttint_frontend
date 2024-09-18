import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import artImg1 from "../assets/img/art-img/1_PrajjwalChoudhury.jpg";
import artImg2 from "../assets/img/art-img/2_UdayMondal.jpg";
import artImg3 from "../assets/img/art-img/3_BalajiPonna.jpg";
import artImg4 from "../assets/img/art-img/4_NimeshPatel.jpg";

import artImgBig from "../assets/img/art-img/25_uaymondalBig.jpg";

export const Home = () => {

    const [leftWallData, setLeftWallData] = useState([])
    const [rightWallData, setRightWallData] = useState([])
    const [bigImageData, setBigImageData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await axios.get(`${process.env.REACT_APP_URL}/api/auth/list/ArtPiece`)
        console.log(res.data)
        const temp = res.data.filter((item => item.category === 'leftsidewall'))
        const temp2 = res.data.filter((item => item.category === 'bigImage'))
        const temp3 = res.data.filter((item => item.category === 'rightsidewall'))
        console.log(temp)
        setBigImageData(temp2)
        setLeftWallData(temp)
        setRightWallData(temp3)
    }
    return (
        <React.Fragment>
            <section className="main-img">
                <p className="detail">Click on artwork for details</p>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-2 col-md-4 col-12 align-content-center">
                            <div className="banner-text">
                                <h3>
                                    ORIGINAL <br /> AUTHENTIC
                                </h3>
                                <h4>paintings</h4>
                                <p className="text-start">
                                    8th Sep to 7th Dec<br />
                                    Hyatt Palace, Vadodara
                                </p>
                            </div>

                            <div className="note">
                                <h4>Curatorial Note</h4>
                            </div>
                        </div>
                        <div className="col-lg-7 col-12">
                            <div className="row pers-one">
                                <div className="col-lg-8 col-12">
                                    <div className="row flex-row">
                                        {/* <div className="col-lg-2 col-md-4 col-12 d-flex flex-column"> */}
                                        {leftWallData.length > 0 &&
                                            leftWallData.slice(0, 26).map((items, index) => (
                                               
                                                <div className="col-lg-2 flex-column wall-img mb-2" key={index} >
                                                    <Link to={`/art-inner-page/${items._id}`} className="img-link">
                                                    <img src={`${process.env.REACT_APP_URL}/${items.artImage}`} className="w-100" alt="" />
                                                    </Link>
                                                </div>
                                            ))
                                        }





                                        {/* </div> */}
                                        <div className="col-lg-2 col-md-4 col-12 d-flex flex-column">
                                            {/* Add more images here if needed */}
                                        </div>
                                        {/* Add more columns here if needed */}
                                    </div>
                                </div>
                                {bigImageData.length > 0 &&
                                    bigImageData.slice(0, 1).map((items, index) => (
                                        <div className="col-lg-4 col-12" key={index}>
                                            <div className="wall-img-big big-img" >
                                            <Link to={`/art-inner-page/${items._id}`} className="img-link">
                                                    <img src={`${process.env.REACT_APP_URL}/${items.artImage}`} className="w-100" alt="" />
                                                    </Link>
                                            </div>
                                        </div>

                                    ))
                                }

                            </div>
                        </div>
                        <div className="col-lg-3 col-12"></div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};
