// import { useState } from "react";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { Link, useNavigate } from "react-router-dom";

// function LoginForm({ setIsLoggedIn }) {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleOnSubmit = (e) => {
//     e.preventDefault();

//     const storedUserData = JSON.parse(localStorage.getItem("userData"));

//     if (
//       storedUserData &&
//       formData.email === storedUserData.email &&
//       formData.password === storedUserData.password
//     ) {
//       localStorage.setItem("isLoggedIn", "true"); // Store as string
//       setIsLoggedIn(true); // Update the parent state
//       navigate("/"); // Redirect to home page
//     } else {
//       alert("Invalid credentials. Please try again.");
//     }
//   };

//   return (
//     <form className="mt-6 flex flex-col gap-y-4 border-2 border-richblack-700 bg-richblue-500 p-5 rounded-2xl" onSubmit={handleOnSubmit}>
//       <label className="w-full">
//         <p className="mb-1 text-sm text-richblack-5">
//           Email Address <sup className="text-pink-200">*</sup>
//         </p>
//         <input
//           required
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleOnChange}
//           placeholder="Enter email address"
//           className="form-style w-full p-2 rounded-lg"
//           aria-label="Email Address"
//         />
//       </label>

//       <label className="relative">
//         <p className="mb-1 text-sm text-richblack-5">
//           Password <sup className="text-pink-200">*</sup>
//         </p>
//         <input
//           required
//           type={showPassword ? "text" : "password"}
//           name="password"
//           value={formData.password}
//           onChange={handleOnChange}
//           placeholder="Enter Password"
//           className="form-style w-full p-2 rounded-lg"
//           aria-label="Password"
//         />
//         <span
//           onClick={() => setShowPassword((prev) => !prev)}
//           className="absolute right-3 top-[33px] z-10 cursor-pointer"
//           aria-label={showPassword ? "Hide Password" : "Show Password"}
//         >
//           {showPassword ? (
//             <AiOutlineEyeInvisible fontSize={25} fill="#AFB2BF" />
//           ) : (
//             <AiOutlineEye fontSize={25} fill="#AFB2BF" />
//           )}
//         </span>
//       </label>

//       <Link to="/forgot-password" className="text-xs text-blue-100 mt-1 ml-auto">
//         Forgot Password?
//       </Link>

//       <button
//         type="submit"
//         className="mt-6 rounded-lg bg-yellow-50 py-2 px-4 font-medium text-richblack-900"
//       >
//         Sign In
//       </button>
//     </form>
//   );
// }

// export default LoginForm;
