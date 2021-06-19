import axios from "axios";

class Naver {
  constructor(clientID, clientSecret) {
    this.clientID = clientID;
    this.clientSecret = clientSecret;
    this.naver = axios.create({
      baseURL: "https://openapi.naver.com/v1/search/local",
    });
  }
  async search(query) {
    const res = await this.naver.get("", {
      params: {
        query: query,
        display: 5,
        start: 1,
        sort: "random",
      },
      headers: {
        "X-Naver-Client-Id": this.clientID,
        "X-Naver-Client-Secret": this.clientSecret,
      },
    });
    return res.data.items.map((item) => ({
      ...item,
    }));
  }
}

export default Naver;
