export const routes = {
  LOGIN: "/login/",
  SIGNUP: "/signup/",
  SIGNUP_SUCCESS: "/signup/success",
  EMAIL_SUCCESS: (userId) => `/email/success/${userId}`,
  EMAIL_FAILURE: "/email/failure",
  FEED: "/",
  SEARCH: "/search",
  SEETINGS: "/settings/",
  PROFILE: (userId) => `/${userId}`,

  CREATE_BLOG: "/blog/create",
  READ_BLOG: (blogId) => `/blog/${blogId}`,
  EDIT_BLOG: (blogId) => `/blog/${blogId}/edit`,

  MESSANGER: "/messenger/",
};
