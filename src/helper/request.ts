import axios from "axios";

type OptionType = {
  method: string;
  url: string;
  data: object | string;
  headers: {
    Authorization: string;
  };
};

export default function request(
  method: string,
  url: string,
  body: object | string,
  token?: string
): Promise<any> {
  const options: OptionType = {
    method,
    url,
    data: body,
    headers: {
      Authorization: "Bearer" + token,
    },
  };
  return axios
    .request(options)
    .then((response) => response.data)
    .catch((err) => console.log(err));
}
