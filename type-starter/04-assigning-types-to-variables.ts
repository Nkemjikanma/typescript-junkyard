interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

const defaultUser: User = {
  id: 1,
  firstName: "Nkem",
  lastName: "Ohans",
  isAdmin: true,
};
