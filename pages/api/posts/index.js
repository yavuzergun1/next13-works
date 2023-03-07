import Posts from "../../../data.json";

export default function fetchFromApi(req, res) {
  res.status(200).json(Posts);
}
