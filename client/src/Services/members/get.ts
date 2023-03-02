export const getMembers = async () => {
    await fetch("http://localhost:5000/members")
        .then(
        (response) => response.json())
        .then(
        (data) => {
            console.log("data:", data)
        }
    )
}