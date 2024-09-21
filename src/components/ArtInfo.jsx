import React, { useEffect, useState } from "react";
import axios from "axios";
import mainLogo from "../assets/img/main-logo.png";
import artAns from "../assets/img/art-answers.png";
import hyatt from "../assets/img/hyatt-logo.png";
import { Link, useParams } from "react-router-dom";
import img1 from '../assets/img/art-img/18_RahulMukharjee.jpg'
import { Inquiry } from "./InquiryForm";
import { Button ,Modal} from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

export const ArtInfo = () => {
  const { url } = useParams();
  const [data, setData] = useState({})

  useEffect(() => {
    console.log(url);
    fetchData()
  }, [url]);

  const fetchData =async()=>{
    const res = await axios.get(`${process.env.REACT_APP_URL}/api/auth/get/ArtPieceByURL/${url}`)
    console.log(res)
    setData(res.data)
  }

  const [inquiryModel, setInquiryModel] = useState(false)

  return (
    <React.Fragment>
      {/* <ToastContainer /> */}
      <section className="dark-bg inner-padding text-start aller">
        <div className="container-fluid h-100">
            {data &&
             <div className="row h-100">
             <div className="col-lg-6 col-md-4 col-12 h-100">
               <div className="row h-100">
                 <div className="col-lg-3 col-12 col-md-12">
                   <div className="inner-heading">
                     <h3>
                       ORIGINAL <br /> AUTHENTIC
                     </h3>
                     <h4>paintings</h4>
                     
                   </div>
                 </div>
                 <div className="col-lg-9 col-12 h-100">
                   <div className="img-area h-100">
                     <img
                       src={`${process.env.REACT_APP_URL}/${data.artImage}`}
                    //    className="h-100"
                       style={{width:"100%", objectFit:"cover", maxHeight:"100%" , objectPosition:"top" , paddingLeft:"20px"}}
                       alt=""
                     />
                   </div>
                 </div>
               </div>
             </div>
             <div className="col-lg-6 col-md-8 col-12">
               <div className="row h-100">
                 <div className="col-lg-7 col-md-6 col-12">
                   <div className="p-relative">
                     <div className="text-area">
                       <div className="heading">
                       <h4><span>{data.artistName} </span> {data.artistLastName}</h4>
                         
                       </div>
                       <h5 className="sub-heading">
                         <b><i>{data.artName}</i></b>,<span> {data.year}</span>
                       </h5>
                       <p>{data.artType}</p>
                       <p>{data.size}</p>
                       <div className="price">
                         <h4>INR: {data.price}</h4>
                         <Button type="button" onClick={() => setInquiryModel(true)} className="btn-buy">
                           Buy Artwork
                         </Button>
                       </div>
                     </div>
                     <div className="bottom-txt">
                       <h6>About the artwork</h6>
                       <hr />
                       <table>
                         <tbody>
                           <tr>
                             <td>Artwork Form</td>
                             <td>: {data.artForm}</td>
                           </tr>
                           <tr>
                             <td>Signature</td>
                             <td>: {data.signature}</td>
                           </tr>
                           <tr>
                             <td>Certificate of authenticity</td>
                             <td>: {data.certificate}</td>
                           </tr>
                           <tr>
                             <td>Frame</td>
                             <td>: {data.frame}</td>
                           </tr>
                         </tbody>
                       </table>
                     </div>
                   </div>
                 </div>
               
                 <div className="col-lg-5 col-md-6 col-12">
                   <div className="vid-sec">
                    <div className="back-btn">
                    <a className="back-btn" href="/arttint">
                           Back
                         </a>
                    </div>
                     <div className="videos">
                       <div className="row">
                        {data.link1 !="" && 
                        <div className="col-lg-12">
                        <h6 className="text-white">Video - About Artwork</h6>
                        <iframe
                          width="100%"
                          height="170"
                          src={data.link1}
                          title="Dummy Video For Website"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        ></iframe>
                      </div>
                      }
                         
                         
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           }
         
        </div>
      </section>

      <Modal
  show={inquiryModel}
  onHide={() => setInquiryModel(false)} // Use an anonymous function to call setInquiryModel
  size="md"
  className="video-modal inq-modal"
>
  <Modal.Header closeButton></Modal.Header>
  <Modal.Body>
   <Inquiry id={data._id} setInquiryModel={setInquiryModel}/>
  </Modal.Body>
</Modal>

    </React.Fragment>
  );
};
