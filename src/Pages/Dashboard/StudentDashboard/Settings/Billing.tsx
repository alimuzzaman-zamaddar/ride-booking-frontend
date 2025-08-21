import React from 'react';
import { IoCardOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Billing: React.FC = () => {
  const paymentMethod = {
    cardType: 'Visa',
    lastFour: '4242',
    expirationDate: '12/25',
  };

  const billingHistory = [
    {
      description: 'English lesson with Sarah Johnson',
      date: 'Dec 10, 2024',
      amount: '$25.00',
    },
    {
      description: 'Digital Art trial with David Chen',
      date: 'Dec 8, 2024',
      amount: '$25.00',
    },
    {
      description: 'Photography lesson with Emma Wilson',
      date: 'Dec 5, 2024',
      amount: '$30.00',
    },
  ];

  return (
    <div className="">
      <div className="w-full max-w-3xl mx-auto  ">
        {/* Payment Methods Section */}
        <section className="mb-8 border  border-alt-border bg-bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-base lg:text-2xl font-semibold text-gray-700 mb-6">
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
              to="add-card"
              className="border border-[var(--color-alt-border)] gap-3 cursor-pointer duration-700 hover:text-white hover:bg-[var(--button-bg-blue)] bg-white rounded-[8px] px-6 py-2 text-sm flex items-center"
            >
              Edit
            </Link>
          </div>
          <div className="text-sm text-gray-500">
            <Link
              to="payment-method"
              className=" w-full border text-center border-alt-border gap-3 cursor-pointer duration-700 hover:text-white hover:bg-[var(--button-bg-blue)] bg-white rounded-[8px] px-6 py-2 text-sm flex justify-center items-center"
            >
              Add Payment Methods
            </Link>
          </div>
        </section>

        {/* Billing History Section */}
        <section className="bg-bg-white border border-alt-border p-8 rounded-lg shadow-lg">
          <h2 className="text-xl lg:text-2xl font-semibold text-gray-700 mb-6">
            Billing History
          </h2>
          {billingHistory.map((item, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row lg:items-center justify-between py-4 border-b border-alt-border gap-4  last:border-0"
            >
              <div>
                <p className="text-base lg:text-lg font-semibold text-gray-700">
                  {item.description}
                </p>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
              <div className="flex items-end lg:items-center space-x-4">
                <p className="text-lg font-semibold">{item.amount}</p>
                {/* to={`invoice/${index}`}  */}
                <Link
                  to="invoice"
                  className="border border-[var(--color-alt-border)] gap-3 cursor-pointer duration-700 hover:text-white hover:bg-[var(--button-bg-blue)] bg-white rounded-[8px] px-6 py-1 lg:py-2 text-sm flex items-center"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Billing;
