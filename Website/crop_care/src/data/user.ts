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
    },
    {
        name: "Vidyut Kini",
        image: "https://media.licdn.com/dms/image/v2/D4D03AQHxOcOrQ5ZALw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710171057621?e=1732147200&v=beta&t=EHjkWvW1z7Tjp1dEXkELcULP1T7tjT8MbiR7jHJPEa4",
        email: "vidyut@kini.com",
        password: "123456"
    }
]

export const getUserByEmail = (email: string) => {
    const acc = user.find(u => u.email === email);
    return acc;
}