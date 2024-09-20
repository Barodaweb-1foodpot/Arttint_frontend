import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import artImg10 from "../assets/img/art-img/30_tvenkanna.jpg";
import mobBg from "../assets/img/mobile-bg.jpg";
import { useMediaQuery } from "react-responsive";
import { Row, Col, Container } from "react-bootstrap";

export const Home = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 991px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 992px)" });

  const [leftWallData, setLeftWallData] = useState([]);
  const [rightWallData, setRightWallData] = useState([]);
  const [bigImageData, setBigImageData] = useState([]);
    const [RightWallbigImageData, setrightWallBigImageData] = useState([])

  useEffect(() => {
    fetchData();
  }, []);

    const fetchData = async () => {
        const res = await axios.get(`${process.env.REACT_APP_URL}/api/auth/list/ArtPiece`)
        console.log(res.data)
        const temp = res.data.filter((item => item.category === 'leftsidewall'))
        const temp2 = res.data.filter((item => item.category === 'bigImage'))
        const temp3 = res.data.filter((item => item.category === 'rightsidewall'))
        const temp4 = res.data.filter((item => item.category === 'rightsidewallBigImage'))

        console.log(temp)
        setBigImageData(temp2)
        setLeftWallData(temp)
        setRightWallData(temp3)
        setrightWallBigImageData(temp4)
    }
    const sideWall = [
        {
            url: require('../assets/img/art-img/26_NikunjPatel.jpg')
        },
        {
            url: require('../assets/img/art-img/27_HeeralTrivedi1.jpg')
        },
        {
            url: require('../assets/img/art-img/28_Heeral Trivedi2.jpg')
        },
        {
            url: require('../assets/img/art-img/29_devdusawar.jpg')
        }
    ]
    return (
        <React.Fragment>
           {isDesktop && (  
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
                        <div className="col-lg-7 col-12 ">
                            <div className="row padding-lg-screen pers-one ">
                                <div className="col-lg-8 col-12">
                                    <div className="row flex-row">
                                        {/* <div className="col-lg-2 col-md-4 col-12 d-flex flex-column"> */}
                                        {leftWallData.length > 0 &&
                                            leftWallData.slice(0, 26).map((items, index) => (
                                               
                                                <div className="col-lg-2 flex-column wall-img mb-2" key={index} >
                                                    <Link to={`/${items.URL_link}`} className="img-link">
                                                    <img src={`${process.env.REACT_APP_URL}/${items.artImage}`} className="w-100" alt="" />
                                                    </Link>
                                                </div>
                                            ))
                                        }




                <div className="note">
                  <h4>Curatorial Note</h4>
                </div>
              </div>
              <div className="col-lg-7 col-12 ">
                <div className="row padding-lg-screen pers-one ">
                  <div className="col-lg-8 col-12">
                    <div className="row flex-row">
                      {/* <div className="col-lg-2 col-md-4 col-12 d-flex flex-column"> */}
                      {leftWallData.length > 0 &&
                        leftWallData.slice(0, 26).map((items, index) => (
                          <div
                            className="col-lg-2 flex-column wall-img mb-2"
                            key={index}
                          >
                            <Link to={`/${items.URL}`} className="img-link">
                              <img
                                src={`${process.env.REACT_APP_URL}/${items.artImage}`}
                                className="w-100"
                                alt=""
                              />
                            </Link>
                          </div>
                        ))}

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
                                            <Link to={`/${items.URL_link}`} className="img-link">
                                                    <img src={`${process.env.REACT_APP_URL}/${items.artImage}`} className="w-100" alt="" />
                                                    </Link>
                                            </div>
                                        </div>

                                    ))
                                }

                            </div>
                        </div>
                        <div className="col-lg-1 col-12">
                <div className="row padding-lg-screen pers-two">
                    {/* {sideWall.map((item, index)=> (
                        <div className="col-lg-12" key={index}>
                        <div className="side-img-sm">
                            <Link to="/" className="img-link">
                            <img src={item.url} className="w-100" alt=""/>
                            </Link>
                        </div>
                    </div>
                    ))} */}
                     {rightWallData.length > 0 &&
                                    rightWallData.slice(0, 4).map((items, index) => (
                                        <div className="col-lg-12" key={index}>
                                            <div className="side-img-sm" >
                                            <Link to={`/${items.URL_link}`} className="img-link">
                                                    <img src={`${process.env.REACT_APP_URL}/${items.artImage}`} className="w-100" alt="" />
                                                    </Link>
                                            </div>
                                        </div>

                                    ))
                                }
                                  {rightWallData.length > 0 &&
                                    rightWallData.slice(0, 4).map((items, index) => (
                                        <div className="col-lg-12" key={index}>
                                            <div className="side-img-sm" >
                                            <Link to={`/${items.URL}`} className="img-link">
                                                    <img src={`${process.env.REACT_APP_URL}/${items.artImage}`} className="w-100" alt="" />
                                                    </Link>
                                            </div>
                                        </div>

                                    ))
                                }
                </div>
              </div>
              <div className="col-lg-2 col-12">
                <div className="row padding-lg-screen pers-three">
                {RightWallbigImageData.length > 0 &&
                                    RightWallbigImageData.slice(0, 1).map((items, index) => (
                   <div className="col-lg-12">
                        <div className="wall-img">
                            <Link to={`/${items.URL_link}`} className="img-link">
                                <img src={`${process.env.REACT_APP_URL}/${items.artImage}`} className="w-100" alt=""/>
                            </Link>
                        </div>
                    </div> 
                     ))
                    }
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {isMobile && (
        <section className="mob-area">
          <Container fluid className="p-0">
           <div className="main-area">
           <div className="bg-img">
              <img src={mobBg} alt="" className="w-100" />
            </div>
            <div className="content">
              <Row>
                <Col md={7} xs={7}>
                  <div className="heading-text">
                    <h3>
                      ORIGINAL <br /> AUTHENTIC
                    </h3>
                    <h4>paintings</h4>
                    <p className="text-start">
                      8th Sep to 7th Dec
                      <br />
                      Hyatt Palace, Vadodara
                    </p>
                  
                  </div>
                </Col>
                <Col md={5} xs={5}> 
                <div className="curator-btn">
                    <button type="button">
                    Curatorial Note
                    </button>
                </div>
                  
                </Col>
                <Col md={12} xs={12}>
                  <div className="heading-text">
                    <p className="text-white">
                    Click on artwork for details
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={7}>
                <Row className="pers-one">
                {leftWallData.length > 0 &&
                        leftWallData.slice(0, 26).map((items, index) => (
                          <Col xs={3}
                            className="flex-column wall-img mb-2"
                            key={index}
                          >
                            <Link to={`/${items.URL}`} className="img-link">
                              <img
                                src={`${process.env.REACT_APP_URL}/${items.artImage}`}
                                className="w-100"
                                alt=""
                              />
                            </Link>
                          </Col>
                        ))}
                </Row>
                
                </Col>
                <Col xs={3}>
                <Row className="pers-two">

                    <Col lg={12}>
                    {bigImageData.length > 0 &&
                                    bigImageData.slice(0, 1).map((items, index) => (
                                        <div className="" key={index}>
                                            <div className="wall-img-big big-img" >
                                            <Link to={`/${items.URL_link}`} className="img-link">
                                                    <img src={`${process.env.REACT_APP_URL}/${items.artImage}`} className="w-100" alt="" />
                                                    </Link>
                                            </div>
                                        </div>

                                    ))
                                }
                    </Col>
                    <Col lg={12}>
                    {RightWallbigImageData.length > 0 &&
                                    RightWallbigImageData.slice(0, 1).map((items, index) => (
                   <div className="">
                        <div className="wall-img  pt-3 p-0">
                            <Link to={`/${items.URL_link}`} className="img-link">
                                <img src={`${process.env.REACT_APP_URL}/${items.artImage}`} className="w-100" alt=""/>
                            </Link>
                        </div>
                    </div> 
                     ))
                    }
                    </Col>
                </Row>
                </Col>
                <Col xs={2}>
                <Row className="pers-three">
                {rightWallData.length > 0 &&
                                    rightWallData.slice(0, 4).map((items, index) => (
                                        <Col xs={12} key={index}>
                                            <div className="side-img-sm" >
                                            <Link to={`/${items.URL}`} className="img-link">
                                                    <img src={`${process.env.REACT_APP_URL}/${items.artImage}`} className="w-100" alt="" />
                                                    </Link>
                                            </div>
                                        </Col>

                                    ))
                                }
                </Row>
                </Col>
              </Row>
            </div>
           </div>
          </Container>
        </section>
      )}
    </React.Fragment>
  );
};
