import * as D from '../definitions';

export const boughtProducts = (sessionToken: string): Promise<D.Products> => {
  const response = fetch('http://secondhand.leanapp.cn/products/bought', {
    method: 'GET',
    body: JSON.stringify({sessionToken}),
    headers: {
      'Content-Type': 'application/json'
    },
  });

  return response.then((Response) => {
    if (Response.status === 200) {
      return Response.json();
    }
  });
};

export const soldProducts = (sessionToken: string): Promise<D.Products> => {
  const response = fetch('http://secondhand.leanapp.cn/products/owned', {
    method: 'GET',
    body: JSON.stringify({sessionToken}),
    headers: {
      'Content-Type': 'application/json'
    },
  });

  return response.then((Response) => {
    if (Response.status === 200) {
      return Response.json();
    }
  });
};

export const homeProducts = (): Promise<D.Products> => {
  const response = fetch('http://secondhand.leanapp.cn/products/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  });

  return response.then((Response) => {
    if (Response.status === 200) {
      return Response.json();
    }
  });
};
