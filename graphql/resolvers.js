const person = [
    {
        name: "Taeyong",
        age: 25,
        gender: "male"
    },
    {
        name: "Jaekwang",
        age: 25,
        gender: "male"
    },
    {
        name: "Rosa",
        age: 25,
        gender: "female"
    },
    {
        name: "saeyun",
        age: 25,
        gender: "male"
    },
    {
        name: "jeonghoo",
        age: 25,
        gender: "male"
    },
    {
        name: "jayPark",
        age: 25,
        gender: "male"
    },
]

const resolvers = {
    Query: {
        Persons: () => person
    }
};

export default resolvers