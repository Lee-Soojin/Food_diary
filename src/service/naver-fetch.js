class NaverFetch {
  constructor(clientID, clientSecret) {
    this.myHeaders = new Headers();
    myHeaders.append("X-Naver-Client-Id", clientID);
    myHeaders.append("X-Naver-Client-Secret", clientSecret);

    this.getRequestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
  }

  async search(query) {
    const res = await fetch(
      `https://openapi.naver.com/v1/search/local?query=${query}&display=10&start=1&sort=random`,
      requestOptions
    );
    const result = await res.json();
    console.log(result.itmes);
    return result.items;
  }
}
