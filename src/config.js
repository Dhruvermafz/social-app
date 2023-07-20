let BASE_URL = "http://localhost:4000";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  BASE_URL = "https://social-api-w6xb.onrender.com/";
}

export { BASE_URL };
