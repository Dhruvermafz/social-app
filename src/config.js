let BASE_URL = "https://social-api-w6xb.onrender.com/";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  BASE_URL = "https://social-api-w6xb.onrender.com/";
}

export { BASE_URL };
