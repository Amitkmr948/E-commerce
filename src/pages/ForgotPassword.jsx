import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // Simulate email sent without API call
    setEmailSent(true);
  };

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center bg-gray-100">
      <div className="max-w-[500px] p-4 lg:p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-gray-800">
          {!emailSent ? "Reset Your Password" : "Check Your Email"}
        </h1>
        <p className="my-4 text-[1.125rem] leading-[1.625rem] text-gray-600">
          {!emailSent
            ? "Enter your email, and we will send you instructions to reset your password."
            : `An email has been sent to ${email} with password reset instructions.`}
        </p>
        <form onSubmit={handleOnSubmit}>
          {!emailSent && (
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] text-gray-700">Email Address</p>
              <input
                required
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="form-input w-full rounded-lg border-gray-300 p-2 border-black"
              />
            </label>
          )}
          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-yellow-500 py-2 px-4 font-medium text-white hover:bg-yellow-600"
          >
            {!emailSent ? "Submit" : "Resend Email"}
          </button>
        </form>
        <div className="mt-6 flex items-center justify-between">
          <Link to="/login">
            <p className="flex items-center gap-x-2 text-gray-700">
              <BiArrowBack /> Back to Login
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
