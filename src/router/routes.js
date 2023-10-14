export const routes = {
  LOGIN: "/login/",
  SIGNUP: "/signup/",
  SIGNUP_SUCCESS: "/signup/success",
  EMAIL_CONFIRMATION: (userId) => `/email/confirm/${userId}`,
  EMAIL_FAILURE: "/email/failure",
  FEED: "/",
  SEARCH: "/search",
  SETTINGS: "/settings/",
  PROFILE: (user) => `/${user}`,

  CREATE_BLOG: "/blog/create",
  READ_BLOG: (id) => `/blog/${id}`,
  EDIT_BLOG: (blogId) => `/blog/${blogId}/edit`,

  MESSANGER: "/messenger/",

  Error404: "/404/",
};
