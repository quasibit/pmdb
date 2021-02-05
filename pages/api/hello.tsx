// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";

export default function hello(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const success = 200;

  response.status(success).json({ name: "John Doe" });
}
