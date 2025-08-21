import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { GoShieldCheck } from "react-icons/go";
import { IoCardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const AddCard: React.FC = () => {
  const [paymentMethods, setPaymentMethods] = useState([
    { type: "Visa", lastFour: "4242", expiry: "12/25", isDefault: false },
    { type: "MASTER", lastFour: "8888", expiry: "12/25", isDefault: true },
  ]);

  const handleSetDefault = (index: number) => {
    const updatedMethods = paymentMethods.map((method, idx) => {
      if (idx === index) {
        return { ...method, isDefault: true };
      }
      return { ...method, isDefault: false };
    });
    setPaymentMethods(updatedMethods);
  };

  const handleDelete = (index: number) => {
    const updatedMethods = paymentMethods.filter((_, idx) => idx !== index);
    setPaymentMethods(updatedMethods);
  };

  const handleEdit = (index: number) => {
    // Logic for editing payment method (like opening a modal)
    console.log("Edit card at index", index);
  };

  return (
    <div className="">
      <div>
        <button
          onClick={() => window.history.back()}
          className="bg-[#051345] border hover:border-[var(--color-alt-border)] hover:bg-bg-white hover:text-[var(--button-bg-blue)] duration-700 text-text-white px-6 py-2 cursor-pointer rounded-[8px] flex items-center gap-3"
        >
          <FaAngleLeft /> Back to Search
        </button>
      </div>
      <div className="container py-10">
        <div className="w-full max-w-3xl mx-auto ">
          {/* Add Payment Methods Button */}
          <div className=" text-center p-6  bg-bg-white border border-alt-border mb-4 rounded-[12px]">
            <Link to="payment-method">
            <button className="px-6 w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition">
              Add Payment Methods
            </button>
            </Link>
          </div>

          {/* Payment Methods List */}
          {paymentMethods.map((method, index) => (
            <div className="text-center p-6 bg-bg-white border border-alt-border mb-4 rounded-[12px]">
              <div
                key={index}
                className="flex items-center justify-between mb-4 p-4 border border-alt-border rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-alt-border rounded-md flex justify-center items-center">
                    {/* Placeholder for card icon */}
                    <span className="text-alt-gray">
                      <IoCardOutline />
                    </span>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">
                      {method.type} •••• {method.lastFour}
                    </p>
                    <p className="text-sm text-gray-500">
                      Expires {method.expiry}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  {method.isDefault && (
                    <span className="px-3 py-1 text-sm text-text-white bg-green-500 rounded-full">
                      Default
                    </span>
                  )}
                  <button
                    onClick={() => handleSetDefault(index)}
                    className="border border-[var(--color-alt-border)] gap-3 cursor-pointer duration-700 hover:text-text-white hover:bg-[var(--button-bg-blue)] bg-bg-white rounded-[8px] px-6 py-2 text-sm flex items-center"
                  >
                    Set As Default
                  </button>
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    <i className="fas fa-edit"></i>{" "}
                    {/* You can use any icon here */}
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-sm text-red-500 hover:text-red-700"
                  >
                    <i className="fas fa-trash-alt"></i>{" "}
                    {/* You can use any icon here */}
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Secure Payment Processing */}
          <div className="mt-6 flex gap-6 justify-start text-sm text-text-gray bg-bg-white border border-alt-border rounded-[12px] p-8 ">
            <div className="">
              <GoShieldCheck />
            </div>
            <div className="flex flex-col gap-5 ">
              <p className="leading-4 font-semibold text-primary-gray">
                Secure Payment Processing
              </p>
              <p>
                Your payment information is encrypted and securely processed. We
                never store your full card details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
