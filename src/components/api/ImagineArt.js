async function GetPicture(userInput) {
    const apiKey = "vk-nnERWojoYrJBnw2rFHmr9XAxD1mK3M11wkz22F83VI7Cm3G";
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
    if (!response.ok) {
      console.error(`Request failed with status ${response.status}: ${response.statusText}`);
      const errorText = await response.text();
      console.error(errorText);
      throw new Error(`Request failed with status ${response.status}`);
    }
    const blob= await response.blob();
    const imageUrl=URL.createObjectURL(blob);
    return imageUrl;
  }
  
  export default GetPicture;
  