import axios from "axios";

class Naver {
  // constructor(clientID, clientSecret) {
  //   this.clientID = clientID;
  //   this.clientSecret = clientSecret;
  //   // this.naver = axios.create({
  //   //   baseURL: "https://openapi.naver.com/v1/search/local",
  //   // });
  // }

  clientID = "efDAPMPO5E__UqibZ1Or";
  clientSecret = "yKzenYVud8";

  async search(query) {
    const res = await axios.get("/v1/search/local", {
      params: {
        query: query,
        display: 5,
        start: 1,
        sort: "random",
      },
      headers: {
        "X-Naver-Client-Id": this.clientID,
        "X-Naver-Client-Secret": this.clientSecret,
        // "Access-Control-Allow-Origin": "*",
      },
    });
    return res.data.items.map((item) => ({
      ...item,
    }));
  }
}

export default Naver;
