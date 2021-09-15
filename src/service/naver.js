import axios from "axios";

class Naver {
  clientID = "efDAPMPO5E__UqibZ1Or";
  clientSecret = "yKzenYVud8";

  async search(query) {
    const res = await axios.get("v1/search/local", {
      params: {
        query: query,
        display: 5,
        start: 1,
        sort: "random",
      },
      headers: {
        "X-Naver-Client-Id": this.clientID,
        "X-Naver-Client-Secret": this.clientSecret,
        "Access-Control-Allow-Origin": "*",
      },
    });
    return res.data.items.map((item) => ({
      ...item,
    }));
  }
}

export default Naver;
