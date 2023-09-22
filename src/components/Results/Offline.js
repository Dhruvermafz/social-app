import React, { useState, useEffect } from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

function OfflinePage() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setIsOnline(window.navigator.onLine);
    };

    // Add event listeners to detect online/offline changes
    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);

    // Initial check of online status
    setIsOnline(window.navigator.onLine);

    // Cleanup the event listeners when the component unmounts
    return () => {
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  }, []);

  return (
    <div>
      {isOnline ? (
        <Result
          status="success"
          title="You are online!"
          extra={[
            <Button key="goBack">
              <Link to="/">Go Back</Link>
            </Button>,
          ]}
        />
      ) : (
        <Result
          status="error"
          title="You are offline!"
          extra={[
            <Button key="refresh" onClick={() => window.location.reload()}>
              Refresh Page
            </Button>,
          ]}
        />
      )}
    </div>
  );
}

export default OfflinePage;
