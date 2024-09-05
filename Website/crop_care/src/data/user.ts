const user = [
    {
        name: "Hello Sounak",
        email: "lNj9I@example.com",
        password: "123456"
    },
    {
        email: "tHbPp@example.com",
        password: "123456"
    },
    {
        email: "bJpKs@example.com",
        password: "123456"
    }
]

export const getUserByEmail = (email: string) => {
    const acc = user.find(u => u.email === email);
    return acc;
}