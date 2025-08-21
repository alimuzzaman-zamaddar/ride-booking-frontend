import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import Heading from "../../../../components/Tags/Heading/Heading";
import Paragraph from "../../../../components/Tags/Paragraph/Paragraph";
import { IoCardOutline } from "react-icons/io5";

const AddPaymentMethod: React.FC = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic, such as sending data to an API
    console.log("Payment Method Added:", formData);
  };

  return (
    <div className="">
      <div>
        <button
          onClick={() => window.history.back()}
          className="bg-[#051345] border hover:border-[var(--color-alt-border)] hover:bg-bg-white hover:text-[var(--button-bg-blue)] duration-700 text-text-white px-6 py-2 cursor-pointer rounded-[8px] text-[16px] font-semibold flex items-center gap-3"
        >
          <FaAngleLeft /> Back to Search
        </button>
      </div>
      <div className="container py-10">
        <div className="max-w-3xl mx-auto">
          <Heading
            Txt="Add Payment Method"
            Variant="h2"
            className=" text-[24px] xl:text-[32px] font-semibold mb-1"
          />
          <Paragraph
            className="text-text-gray font-normal text-[16px]  leading-[150%] mb-8"
            Txt="Add a new card for lesson payments"
          />
          <div className=" bg-white p-8 border border-alt-border rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              {/* Card Information Section */}
              <section className="mb-8">
                <div className="flex items-center gap-5 mb-5">
                  <div className="w-10 h-10 bg-alt-border rounded-md flex justify-center items-center">
                    {/* Placeholder for card icon */}
                    <span className="text-alt-gray">
                      <IoCardOutline />
                    </span>
                  </div>
                  <div className="">
                    <h3 className="text-xl  font-semibold text-gray-700 ">
                      Card Information
                    </h3>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-text-gray mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      className="w-full border border-alt-border px-4 py-2 rounded-md"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 1265"
                      maxLength={19}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-text-gray mb-2">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      className="w-full border border-alt-border px-4 py-2 rounded-md"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="123"
                      maxLength={3}
                    />
                  </div>
                  <div>
                    <label className="block text-text-gray mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      name="expiryDate"
                      className="w-full border border-alt-border px-4 py-2 rounded-md"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      maxLength={5}
                    />
                  </div>
                </div>
                <div className="pt-5">
                  <label className="block text-text-gray mb-2">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    name="cardholderName"
                    className="w-full border border-alt-border px-4 py-2 rounded-md"
                    value={formData.cardholderName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                  />
                </div>
              </section>

              {/* Billing Address Section */}
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  Billing Address
                </h3>
                <div className="grid  gap-4">
                  <div>
                    <label className="block text-text-gray mb-2">Address</label>
                    <input
                      type="text"
                      name="address"
                      className="w-full border border-alt-border px-4 py-2 rounded-md"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="123 Main street"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-text-gray mb-2">ZIP Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      className="w-full border border-alt-border px-4 py-2 rounded-md"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder="1001"
                    />
                  </div>
                  <div>
                    <label className="block text-text-gray mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      className="w-full border border-alt-border px-4 py-2 rounded-md"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="New York"
                    />
                  </div>
                </div>
                <div className="pt-5">
                  <label className="block text-text-gray mb-2">Country</label>
                  <input
                    type="text"
                    name="country"
                    className="w-full border border-alt-border px-4 py-2 rounded-md"
                    value={formData.country}
                    onChange={handleInputChange}
                    placeholder="United States"
                  />
                </div>
              </section>

              {/* Security Message */}
              <div className="mb-6 text-sm text-gray-500">
                <p className="bg-bg-light-green text-bg-dark-green p-3 rounded-md">
                  Your payment information is encrypted and secure.
                </p>
              </div>

              {/* Add Payment Method Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full px-6 py-2 bg-secondary-blue text-white font-semibold rounded-md hover:bg-primary-blue duration-500 transition"
                >
                  Add Payment Methods
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPaymentMethod;
