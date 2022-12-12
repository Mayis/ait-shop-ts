import axios from "axios";

type OptionType = {
  method: string;
  url: string;
  data: object | string | null;
  headers: {
    Authorization: string;
  };
};

export default async function request(
  method: string,
  url: string,
  body: object | string | null,
  token?: string
): Promise<any> {
  const options: OptionType = {
    method,
    url,
    data: body,
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return axios
    .request(options)
    .then((response) => response.data)
    .catch((err) => console.log(err));
}
