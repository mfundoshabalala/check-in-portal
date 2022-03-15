import axios from "axios";

const getData = async (url: string): Promise<unknown> => {
	const response = await axios.get(url);
	const data = response.data as unknown;
	return data;
};

export default getData;
