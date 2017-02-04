var render_1 = {

	currency:{
		name:'United States dollars',
		abbrev:'usd'
	}
	,
	tours:[
		{name:'Hood River', price:'$99.95'},
		{name:'Oregon Coast', price:'$159.95'}
	],
	specialsUrl:'/january-specials',
	currencies:['USD','GBP', 'BTC'],
}

var render_2 = {
	s : [1,3,4,5]
}



function getWeatherData(){

	
	return {

		locations: [
			{	
				name:'Portland',
				forecastUrl:'http://www.under.com/US/OR/Portland.html',
				iconUrl:'http://icons-ak.wxug.con/i/c/k/cloudy.gif',
				weather:'Overcast',
				temp:'54.1 F(12.3 C)',
			},
			{
				name:'Bend',
					forecastUrl:'http://www.www.under.com/US/OR/Portland.html',
					iconUrl:'http://icons-ak.wxug.con/i/c/k/cloudiy.gif',
					weather:'Partly cloudy',
					temp:'55.0 F(12.8 C)',
			}
			


			]

	};



}


module.exports = {

	render_1,
	render_2,
	getWeatherData,
}