import { useEffect, useState } from "react";

interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suit: string,
        city: string,
        zipcode: string,
        geo: {
            lat: number,
            lng: number
        }
    },
    phone: number,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

interface ErrorInf {
    message: string
}

const UserFetcher = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [search, setSearch] = useState<string>("");
    const [filtered, setFiltered] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<ErrorInf | null>(null);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            if (!res.ok) throw new Error("Failed to fetch users");
            const data = await res.json();
            setUsers(data);
            setFiltered(data);
        } catch (err) {
            if (err instanceof Error) {
                setError({ message: err.message });
            } else {
                setError({ message: "Unknown error occurred" });
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        if (!search.trim()) {
            setFiltered(users);
        } else {
            setFiltered(
                users.filter(u =>
                    u.name.toLowerCase().includes(search.toLowerCase())
                )
            );
        }
    }, [search, users]);

    if (loading) return <p>Loading users...</p>;
    if (error) return <p style={{ color: "red" }}>Error: {error.message}</p>;

    return (
        <div>
            <h2>User List</h2>
            <input
                type="text"
                placeholder="Search user..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />

            {filtered.length === 0 ? (
                <p>No users found.</p>
            ) : (
                <ul>
                    {filtered.map(user => (
                        <li key={user.id}>
                            <strong>{user.name}</strong> — {user.email}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserFetcher;
