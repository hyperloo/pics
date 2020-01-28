import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID d52ab3386eee82f9f5e12974566b3690f713114df701a6154791922b9627fbfc"
  }
});
