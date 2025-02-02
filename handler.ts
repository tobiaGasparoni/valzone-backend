export const hello = async () => {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Hello from Serverless!" }),
    };
  };
  
  export const createItem = async (event) => {
    const body = JSON.parse(event.body);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Item created", item: body }),
    };
  };
  