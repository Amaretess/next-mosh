"use-client"
import Card from '../components/Card';
import getUsers from '../hooks/getUsers';


const UsersPage = () => {

    const { users } = getUsers();


    return (
        <div>
            <h1>User Page</h1>
            <ul>
                {users.map((user) => (
                    <Card key={user.id} title={user.name} />
                ))}
            </ul>
        </div>
    )
}

export default UsersPage;