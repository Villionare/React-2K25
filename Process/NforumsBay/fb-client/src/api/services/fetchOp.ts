import server from "../config.tsx";

interface Params {
  op: string;
}

const fetchOP = async ({ op}: Params)=> {
  const response = await server.get('/post', {params: {op}});
  return response;
};

export default fetchOP;
