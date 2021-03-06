import axios from 'axios';

const SERVER = "95.217.3.47:8080";

async function save(value, id) {
	if (id === undefined) {
		let res = await axios.post(`http://${SERVER}/save`, value);
		return res.data.id;
	}
	else {
		await axios.put(`http://${SERVER}/save/${id}`, value);
	}
}

async function load(id) {
	let res = await axios.get(`http://${SERVER}/load/${id}`);
	return res.data;
}

export default {
	save: save,
	load: load
};
