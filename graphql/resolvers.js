const taeyong = {
    name: "Taeyong",
    age: 25,
    gender: "male"
};

const resolvers = {
    Query: {
        person: () => taeyong
    }
};

export default resolvers