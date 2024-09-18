import React, { useEffect, useState } from "react";
import axios from "axios";
import mainLogo from "../assets/img/main-logo.png";
import artAns from "../assets/img/art-answers.png";
import hyatt from "../assets/img/hyatt-logo.png";
import { useParams } from "react-router-dom";
import img1 from '../assets/img/art-img/18_RahulMukharjee.jpg'

export const ArtInfo = () => {
  const { id } = useParams();
  const [data, setData] = useState({})

  useEffect(() => {
    console.log(id);
    fetchData()
  }, [id]);

  const fetchData =async()=>{
    const res = await axios.get(`${process.env.REACT_APP_URL}/api/auth/get/ArtPiece/${id}`)
    console.log(res)
    setData(res.data)
  }

  return (
    <React.Fragment>
      <section className="dark-bg inner-padding text-start">
        <div className="container-fluid h-100">
            {data &&
             <div className="row h-100">
             <div className="col-lg-6 col-12 h-100">
               <div className="row h-100">
                 <div className="col-lg-3 h-100">
                   <div className="inner-heading">
                     <h3>
                       ORIGINAL <br /> AUTHENTIC
                     </h3>
                     <h4>paintings</h4>
                     <p>
                       8th Sep to 7th Dec
                       <br />
                       Hyatt Palace, Vadodara
                     </p>
                   </div>
                 </div>
                 <div className="col-lg-9 col-12 h-100">
                   <div className="img-area h-100">
                     <img
                       src={`${process.env.REACT_APP_URL}/${data.artImage}`}
                    //    className="h-100"
                       style={{width:"100%", objectFit:"cover", maxHeight:"100%" , objectPosition:"top"}}
                       alt=""
                     />
                   </div>
                 </div>
               </div>
             </div>
             <div className="col-lg-6 col-12">
               <div className="row h-100">
                 <div className="col-lg-7 col-12 h-100">
                   <div className="p-relative">
                     <div className="text-area">
                       <div className="heading">
                         <h4>
                           <span>{data.artistName} </span> 
                         </h4>
                       </div>
                       <h5 className="sub-heading">
                         <i>{data.artName}</i>, {data.year}
                       </h5>
                       <p>{data.artType}</p>
                       <p>{data.size}</p>
                       <div className="price">
                         <h4>INR: {data.price}</h4>
                         <button type="button" className="btn-buy">
                           Buy Artwork
                         </button>
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
               
                 <div className="col-lg-5 col-12 h-100">
                   <div className="vid-sec">
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
                         
                         {data.link2 !="" && 
                        <div className="col-lg-12">
                        <h6 className="text-white">Video - About Artwork</h6>
                        <iframe
                          width="100%"
                          height="170"
                          src={data.link2}
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
    </React.Fragment>
  );
};
