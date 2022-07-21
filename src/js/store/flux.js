
const APIurl = "https://www.swapi.tech/api";
const getState = ({
	getStore,
	getActions,
	setStore
}) => {
	return {
		store: {
			PersArr: [],
			PlanetsArr:[],
			VehiclesArr:[],
			Details:"",
			Favorites:[]
		},
		actions: {
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			getCharacters: () => {
				fetch(`${APIurl}/people`).then(res => res.json()).then(response => {
					setStore({
						PersArr:response.results
					});
				}).catch(error=>error)
			},
			
			getPlanets: () => {
				fetch(`${APIurl}/planets/`).then(res => res.json()).then(response => {
					setStore({
						PlanetsArr:response.results
					});
				}).catch(error=>error)
			},
			
			getVehicles: () => {
				fetch(`${APIurl}/vehicles/`).then(res => res.json()).then(response => {
					setStore({
						VehiclesArr:response.results
					});
				}).catch(error=>error)
			},
			addFavorite:newfav => {
				const store = getStore();
				setStore({Favorites:[...store.Favorites,newfav]});
				
			},
			removeFavorite:index => {
				const store = getStore();
				store.Favorites.splice(index,1);
				setStore({Favorites:[...store.Favorites]});
			},
			/*getDetails:() => {
				fetch('https://www.swapi.tech/api/people/1').then(res => res.json()).then(response => {
					console.log(response)
					setStore({
						Details:response.results.description
					});
					console.log(Details)
				}).catch(error=>error)
			},*/
			
		}
	};
};

export default getState;