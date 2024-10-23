// import { useSelector } from "react-redux";

// import LoginForm from "./Login";
// import SignupForm from "./SignUp";

// function Template({ title, description1, description2, image, formType }) {
//   const { loading = false } = useSelector((state) => state.auth || {});

//   return (
//     <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center bg-richblue-900">
//       {loading ? (
//         <div className="spinner" aria-label="Loading..."></div>
//       ) : (
//         <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-x-12">
//           {/* Text and Form Section */}
//           <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
//             <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
//               {title}
//             </h1>
//             <p className="mt-4 text-[1.125rem] leading-[1.625rem] text-richblack-100">
//               {description1}{" "}
//               <span className="font-edu-sa font-bold italic text-blue-100">
//                 {description2}
//               </span>
//             </p>
//             {/* Render Login or Signup Form */}
//             {formType === "signup" ? <SignupForm /> : <LoginForm />}
//           </div>

//           {/* Image Section */}
//           <div className="relative mx-auto w-11/12 max-w-[450px] md:mx-0">
//             <img
//               src={image}
//               alt="Students"
//               width={558}
//               height={504}
//               loading="lazy"
//               className="absolute -top-4 right-4 z-10 "
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Template;
