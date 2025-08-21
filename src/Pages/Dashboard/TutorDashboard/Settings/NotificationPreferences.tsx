import React, { useState } from "react";
import Heading from "../../../../components/Tags/Heading/Heading";
import ToggleSwitch from "../../StudentDashboard/Settings/ToggleSwitch";

const NotificationPreferences: React.FC = () => {
  const [lessonReminders, setLessonReminders] = useState(false);
  const [paymentNotifications, setPaymentNotifications] = useState(false);
  const [newMessageAlerts, setNewMessageAlerts] = useState(false);

  return (
    <div>
      <div className="">
        {/* Notification Preferences Section */}
        <section className="mb-8">
          <Heading
            Txt="Notification Preferences"
            Variant="h2"
            className="text-2xl font-semibold text-gray-700 mb-6"
          />
          {/* Lesson Reminders Toggle */}
          <ToggleSwitch
            labelHeading="Lesson Reminders"
            labelDescription="Get notified before your lessons"
            checked={lessonReminders}
            onChange={checked => {
              setLessonReminders(checked);
              console.log("Lesson Reminders:", checked);
            }}
          />
          {/* Payment Notifications Toggle */}
          <ToggleSwitch
            labelHeading="Payment Notifications"
            labelDescription="Receive payment confirmation alerts"
            checked={paymentNotifications}
            onChange={checked => {
              setPaymentNotifications(checked);
              console.log("Payment Notifications:", checked);
            }}
          />
          {/* New Message Alerts Toggle */}
          <ToggleSwitch
            labelHeading="New Message Alerts"
            labelDescription="Get notified when students message you"
            checked={newMessageAlerts}
            onChange={checked => {
              setNewMessageAlerts(checked);
              console.log("New Message Alerts:", checked);
            }}
          />
        </section>
      </div>
    </div>
  );
};

export default NotificationPreferences;
