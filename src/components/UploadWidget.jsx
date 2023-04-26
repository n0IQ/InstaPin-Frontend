// import React from "react";
// import { useEffect, useRef } from "react";

// export default function UploadWidget() {
//   const cloudinaryRef = useRef();
//   const widgetRef = useRef();

//   useEffect(() => {
//     cloudinaryRef.current = window.cloudinary;
//     // console.log(cloudinaryRef.current);

//     widgetRef.current = cloudinaryRef.current.createUploadWidget(
//       {
//         cloudName: process.env.CLOUDINARY_CLOUD_NAME,
//         uploadPreset: process.env.CLOUDINARY_UPLOAD_PRESET,
//       },
//       function (err, res) {
//         console.log(res);
//       }
//     );
//   }, []);
//   return <div>UploadWidget</div>;
// }
