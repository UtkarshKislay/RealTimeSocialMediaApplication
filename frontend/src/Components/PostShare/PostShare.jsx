import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./PostShare.css";
import {
  AiOutlineFileImage,
  AiOutlinePlayCircle,
  AiOutlineEnvironment,
  AiOutlineCalendar,
} from "react-icons/ai";
import { FaTimesCircle } from "react-icons/fa";
const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img= event.target.files[0];
      // console.log(imageRef);
      setImage({
       image:URL.createObjectURL(img),
      }
      );
    }
  };

  return (
    <>
      <div className="PostShare">
        <img src={ProfileImage} alt="" />
        <div>
          <input type="text" placeholder="What's is Happening" />
          <div className="postOptions">
            <div
              className="option"
              style={{ color: "var(--photo)" }}
              onClick={() => imageRef.current.click()}
            >
              <AiOutlineFileImage />
              Photo
            </div>

            <div className="option" style={{ color: "var(--video)" }}>
              <AiOutlinePlayCircle />
              Video
            </div>

            <div className="option" style={{ color: "var(--location)" }}>
              <AiOutlineEnvironment />
              Location
            </div>

            <div className="option" style={{ color: "var(--shedule)" }}>
              <AiOutlineCalendar />
              Schedule
            </div>

            <button className="button ps-button">Share</button>


            <div style={{display:"none"}}>
              <input
                type="file"
                name="myImage"
                ref={imageRef}
                onChange={onImageChange}
              />
            </div>
          </div>
          {/* <div>{image}</div> */}
          {image && (
            <div className="previewImage">
              <FaTimesCircle onClick={()=>setImage(null)} />
              <img src={image.image} alt="" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PostShare;
