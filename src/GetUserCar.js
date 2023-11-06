import { useLocation } from "react-router-dom";

async function GetUserCar(car){
    if(!car){
        //if its blank or empty value
        alert("Please enter a valid car model")
        return; 
    }
    const endpoint= new URL(`https://api.api-ninjas.com/v1/cars?model=${car}`);
    console.log(endpoint);
    const apiKey = 'l+YZGwWHq7iAjfITpP+eeg==aU2YcKIRe62WlnWK';

    const response=await fetch(endpoint, {
        headers: {'X-Api-Key': apiKey }
    });
    
    const data=await response.json();
    if (data && data.length === 0) {
        alert("Car not found");
        return;
    }
    else{
        console.log(data);
        alert(`City MPG: ${data[0].city_mpg || "N/A"},
        Class: ${data[0].class || "N/A"},
        Combination MPG: ${data[0].combination_mpg || "N/A"},
        Cylinders: ${data[0].cylinders || "N/A"},
        Displacement: ${data[0].displacement || "N/A"},
        Drive: ${data[0].drive || "N/A"},
        Fuel Type: ${data[0].fuel_type || "N/A"},
        Highway MPG: ${data[0].highway_mpg || "N/A"},
        Make: ${data[0].make || "N/A"},
        Model: ${data[0].model || "N/A"},
        Transmission: ${data[0].transmission || "N/A"},
        Year: ${data[0].year || "N/A"}`);
        const imagePrompt=`${data[0].make} ${data[0].model} ${data[0].year}`
        console.log(imagePrompt);
        localStorage.setItem("car_logistics",imagePrompt);
        console.log(localStorage.getItem("car_logistics"));

        localStorage.setItem("carBodyInfo",JSON.stringify(data))
        return true;
    }
    return false;
}

export default GetUserCar;