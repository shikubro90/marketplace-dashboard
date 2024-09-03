import React from 'react';
import { IoIosArrowForward, IoMdNotificationsOutline } from 'react-icons/io';
import { useGetNotificationQuery } from '../../redux/api/apiSlice';
 
const Notification = () => {
const {data: notifications, isLoading , error} = useGetNotificationQuery()

 
   if(isLoading) <h1>Loading.....</h1>
   // console.log("===========>",error)
if (!notifications) {
  <h1>Not Notification ........</h1>
}
    return (
        <div className='mt-8 mx-6'>
              <h1 className='font-semibold text-[30px]'>Notifications</h1>
            
              <div className="mt-8">
  {notifications?.data?.attributes?.results.length > 0 ? (
    notifications.data.attributes.results.map(notification => (
      <div className="flex border rounded border-[#00BF63] items-center w-full h-[85px]" key={notification?.id}>
        <div>
          <IoMdNotificationsOutline className="h-12 w-12 ml-4 border rounded-full p-2 border-[#00BF63] text-[#00BF63]" />
        </div>
        <div>
          <p className="text-[18px] ml-8 font-medium text-[#333333]">
            {notification?.message}
            <br />
            <span className="text-[#00BF63]">{notification?.role}</span>
          </p>
          <p className="text-[18px] ml-8 font-medium">
            {notification?.createdAt?.split("T")[0] ? notification.createdAt.split("T")[0] : "N/A"}
          </p>
        </div>
      </div>
    ))
  ) : (
    <div className="text-center text-[18px] font-medium text-[#333333]">
      No notifications available.
    </div>
  )}
</div>

        </div>
    );
};

export default Notification;