const functions = {
  add: (a, b) => a + b,
  isNull: () => null,
  getUser: () => {
    const user = { firstName: "Joe", lastName: "Doe" };
    return user;
  },
  throwError: () => {
    throw new Error("Error thrown");
  },
  fetchData: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("data received");
      }, 1000);
    });
  },
};

module.exports = functions;
