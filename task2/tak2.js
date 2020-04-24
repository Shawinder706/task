/*
Task : -  : - :

A Process reads multiple stream data (provided below). Design and develop a function which could prepare 10 different lists from the given data based on the preferences provided below.   

Input Data 

Media – media url, category, length, sub-category – 40 
Environmental Data  - temperature, weather, location – 50 
Social Data – Location, Event, News – 20 

Preferences / Conditions

Interests (category), activity time, Location -10 (People)

Assumptions:
-	Data available: Media – 40 items, Env: 50 items, Social Data: 20 items
-	Feel free to assume any missing data 

Expected output:
-	10 lists from the given data as unique as possible and most relevant to a user




*/


let media="data";
let EnvironmentalData="data";

function dataList(category,location)
{
		//get related category list

		let cat=media.filter((val)=>{
            
			if(category===val.category){
				return val
			}
		});

		// get related location list 
		let loc=EnvironmentalData.filter((val)=>{
            
			if(location===val.location){
				return val
			}
		});

		let time = getCurrentTime ;


		// then arrange all these filtered data and display them. 
    
}

dataList("movies","chandigarh")