const getState = ({getStore, getActions, setStore}) =>{
	return{
		store:{
			character:[],
			API_URL:"https://www.swapi.tech/api"
		},

		actions: {
			getCharacters: async() =>{
				const store = getStore()
				try{
					const response = await fetch(`${store.API}/people`)
					if (response.ok){
						const data = await response.json()
						console.log(data.results)
						data.results.forEach(async(element) => {
							
						});
					}
				} catch(error){
					console.log(error)
				}
			},

		}
	}
}

export default getState;









// const getState = ({ getStore, getActions, setStore }) => {
// 	return {
// 		store: {
// 			demo: [
// 				{
// 					title: "FIRST",
// 					background: "white",
// 					initial: "white"
// 				},
// 				{
// 					title: "SECOND",
// 					background: "white",
// 					initial: "white"
// 				}
// 			]
// 		},
// 		actions: {
// 			// Use getActions to call a function within a fuction
// 			exampleFunction: () => {
// 				getActions().changeColor(0, "green");
// 			},
// 			loadSomeData: () => {
// 				/**
// 					fetch().then().then(data => setStore({ "foo": data.bar }))
// 				*/
// 			},
// 			changeColor: (index, color) => {
// 				//get the store
// 				const store = getStore();

// 				//we have to loop the entire demo array to look for the respective index
// 				//and change its color
// 				const demo = store.demo.map((elm, i) => {
// 					if (i === index) elm.background = color;
// 					return elm;
// 				});

// 				//reset the global store
// 				setStore({ demo: demo });
// 			}
// 		}
// 	};
// };

// export default getState;
