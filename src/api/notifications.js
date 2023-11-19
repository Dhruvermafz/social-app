// ------------------ NOTIFICATION METHOD ----------------
export const getNotifications = (params) => {
  return httpRequest({
    method: "GET",
    url: `/notifications`,
    params: { offset: params.offset },
  });
};

// ---------- NOTIFICATION METHODS ---------------
export const readNotification = (id) => {
  return httpRequest({
    method: "PATCH",
    url: `/read/notification/${id}`,
  });
};

export const getUnreadNotifications = () =>
  httpRequest({ method: "GET", url: `/notifications/unread` });

export const markAllAsUnreadNotifications = () => {
  return httpRequest({ method: "PATCH", url: `/notifications/mark` });
};
