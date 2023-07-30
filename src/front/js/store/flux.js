import { BackendURL } from "../component/backendURL";
import Host from "../pages/host";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			name: "",
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			BackendURL : process.env.BACKEND_URL,
			Room: {}
		},
		actions: {
			createRoom: async()=>{
				const opts={
					method:"POST",
					headers:{"Content-Type":"application/json"},
					body:JSON.stringify({Host:Host, Name:Name, Room_pin:Room_pin, uuid:uuid}),
				}
				const result=await fetch(BackendURL+"/api/room", opts)
					const data=await result.json()
							setStore({Room:data.Room,room_uuid:data.Room.uuid})},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
