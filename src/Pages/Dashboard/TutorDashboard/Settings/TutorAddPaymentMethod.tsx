import React from "react";
import { IoCardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const TutorAddPaymentMethod: React.FC = () => {
  const paymentMethod = {
    cardType: "Visa",
    lastFour: "4242",
    expirationDate: "12/25",
  };

  return (
    <div className="">
  
        {/* Payment Methods Section */}
        <section className="">
          <h2 className=" text-[20px] xl:text-2xl font-semibold text-gray-700 mb-6">
            Payment Methods
          </h2>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-secondary-blue text-text-white rounded-md flex justify-center items-center">
                {/* Placeholder for credit card icon */}
                <IoCardOutline />
              </div>
              <div>
                <p className="text-lg font-semibold">
                  •••• •••• •••• {paymentMethod.lastFour}
                </p>
                <p className="text-sm text-gray-500">
                  Expires {paymentMethod.expirationDate}
                </p>
              </div>
            </div>
            <Link
              to="#"
              className="border border-[var(--color-alt-border)] gap-3 cursor-pointer duration-700 hover:text-white hover:bg-[var(--button-bg-blue)] bg-white rounded-[8px] px-6 py-2 text-sm flex items-center"
            >
              Edit
            </Link>
          </div>
          <div className="text-sm text-gray-500">
            <Link
              to="/dashboard/payment-method"
              className=" w-full border text-center border-alt-border gap-3 cursor-pointer duration-700 hover:text-white hover:bg-[var(--button-bg-blue)] bg-white rounded-[8px] px-6 py-2 text-sm flex justify-center items-center"
            >
              Add Payment Methods
            </Link>
          </div>
        </section>
      </div>
  );
};

export default TutorAddPaymentMethod;
