const getName = (params: { firstName: string; lastName?: string }) => {
  if (params.lastName) {
    return `${params.firstName} ${params.lastName}`;
  } else {
    return `${params.firstName}`;
  }
};

console.log(getName({ firstName: "Nkemjika", lastName: "Ohans" }));
