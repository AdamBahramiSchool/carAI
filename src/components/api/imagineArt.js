async function getPicture() {
    const userInput = JSON.parse(localStorage.getItem("input"));
    const apiKey = "vk-moBccXjpDu2n6OB64nagWZPt04LXB3bI9Y842zF6yF5IQx2";
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${apiKey}`);
  
    let formdata = new FormData();
    formdata.append("style_id", "29");
    formdata.append("prompt", userInput);
  
    let requestChoice = {
      method: "POST",
      body: formdata,
      headers: myHeaders,
    };
  
    const response = await fetch("https://api.vyro.ai/v1/imagine/api/generations", requestChoice);
  
    return response;
  }
  
  export default getPicture;
  