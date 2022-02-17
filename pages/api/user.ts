import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res.json({
		name: "John Doe",
		age: 30,
	});
}
