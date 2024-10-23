// import { useState } from "react";
// import { toast } from "react-hot-toast";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import Tab from "../../common/Tab";
// import { ACCOUNT_TYPE } from "../../../Utils/User";
// import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

// function SignupForm() {
//   const navigate = useNavigate(); // Initialize useNavigate
//   const [accountType, setAccountType] = useState(ACCOUNT_TYPE.CUSTOMER);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     contactNumber: "", // Added contact number
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const {
//     firstName,
//     lastName,
//     email,
//     password,
//     confirmPassword,
//     contactNumber,
//   } = formData;

//   const handleOnChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   // Handle form submission
//   const handleOnSubmit = (e) => {
//     e.preventDefault();

//     // Check if password matches
//     if (password !== confirmPassword) {
//       toast.error("Passwords do not match");
//       return;
//     }

//     // Simulate storing user data locally
//     const userData = {
//       firstName,
//       lastName,
//       email,
//       password, // In a real app, do not store passwords like this!
//       contactNumber,
//       accountType,
//     };

//     // Save user data to local storage
//     localStorage.setItem("userData", JSON.stringify(userData));

//     // Show success message
//     toast.success("Account created successfully!");

//     // Redirect to the login page
//     navigate("/login");
//   };

//   const tabData = [
//     {
//       id: 1,
//       tabName: "Customer",
//       type: ACCOUNT_TYPE.CUSTOMER,
//     },
//   ];

//   return (
//     <div className="border-2 border-richblack-700 rounded-3xl mt-5 px-5 pb-5 bg-richblue-700">
//       <Tab
//         tabData={tabData}
//         field={accountType}
//         setField={setAccountType}
//         className="bg-richblue-300"
//       />
//       <form onSubmit={handleOnSubmit} className="flex w-full flex-col gap-y-4">
//         <div className="flex gap-x-4">
//           <label>
//             <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
//               First Name <sup className="text-pink-200">*</sup>
//             </p>
//             <input
//               required
//               type="text"
//               name="firstName"
//               value={firstName}
//               onChange={handleOnChange}
//               placeholder="Enter first name"
//               className="form-style w-full p-2 border-black rounded-lg"
//             />
//           </label>
//           <label>
//             <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
//               Last Name <sup className="text-pink-200">*</sup>
//             </p>
//             <input
//               required
//               type="text"
//               name="lastName"
//               value={lastName}
//               onChange={handleOnChange}
//               placeholder="Enter last name"
//               className="form-style w-full p-2 border-black rounded-lg"
//             />
//           </label>
//         </div>
//         <label className="w-full">
//           <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
//             Email Address <sup className="text-pink-200">*</sup>
//           </p>
//           <input
//             required
//             type="email"
//             name="email"
//             value={email}
//             onChange={handleOnChange}
//             placeholder="Enter email address"
//             className="form-style w-full p-2 border-black rounded-lg"
//           />
//         </label>
//         <div className="flex gap-x-4">
//           <label className="w-full">
//             <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
//               Contact Number
//             </p>
//             <input
//               required
//               type="text"
//               name="contactNumber"
//               value={contactNumber}
//               onChange={handleOnChange}
//               placeholder="Enter contact number"
//               className="form-style w-full p-2 border-black rounded-lg"
//             />
//           </label>
//         </div>
//         <div className="flex gap-x-4">
//           <label className="relative">
//             <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
//               Create Password <sup className="text-pink-200">*</sup>
//             </p>
//             <input
//               required
//               type={showPassword ? "text" : "password"}
//               name="password"
//               value={password}
//               onChange={handleOnChange}
//               placeholder="Enter Password"
//               className="form-style w-full !pr-10 p-2 border-black rounded-lg"
//             />
//             <span
//               onClick={() => setShowPassword((prev) => !prev)}
//               className="absolute right-3 top-[38px] z-[10] cursor-pointer"
//             >
//               {showPassword ? (
//                 <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
//               ) : (
//                 <AiOutlineEye fontSize={24} fill="#AFB2BF" />
//               )}
//             </span>
//           </label>
//           <label className="relative">
//             <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
//               Confirm Password <sup className="text-pink-200">*</sup>
//             </p>
//             <input
//               required
//               type={showConfirmPassword ? "text" : "password"}
//               name="confirmPassword"
//               value={confirmPassword}
//               onChange={handleOnChange}
//               placeholder="Confirm Password"
//               className="form-style w-full !pr-10 p-2 border-black rounded-lg"
//             />
//             <span
//               onClick={() => setShowConfirmPassword((prev) => !prev)}
//               className="absolute right-3 top-[38px] z-[10] cursor-pointer"
//             >
//               {showConfirmPassword ? (
//                 <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
//               ) : (
//                 <AiOutlineEye fontSize={24} fill="#AFB2BF" />
//               )}
//             </span>
//           </label>
//         </div>
//         <button
//           type="submit"
//           className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
//         >
//           Create Account
//         </button>
//       </form>
//     </div>
//   );
// }

// export default SignupForm;
