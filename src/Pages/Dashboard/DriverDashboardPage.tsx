/* eslint-disable @typescript-eslint/no-explicit-any */

import OfflineBanner from "../../components/Drivers/OfflineBanner";
import Loader from "../../components/Loader/Loader";
import { useGetMeQuery } from "../../redux/features/ride/profile.api";


const DriverDashboardPage = () => {
  const { data,isLoading } = useGetMeQuery();
  const me = data?.data;

  console.log(data?.data?.role);

  return (
    <>
      {isLoading ? (
        <div className="min-h-[60vh] flex items-center justify-center">
       <Loader className="mt-10 text-7xl my-10 text-primary-blue" />
        </div>
      ) : (
        <section className="flex flex-col h-auto justify-between p-4">
          <OfflineBanner isOnline={me?.isOnline} />
          <h1 className="text-xl font-bold">driver dashboard</h1>
          {/* your existing content */}
        </section>
      )}
    </>
  );
};

export default DriverDashboardPage;
