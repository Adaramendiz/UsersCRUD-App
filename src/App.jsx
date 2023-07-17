import { useEffect, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import UserCard from "./components/UserCard";
import FormUser from "./components/FormUser";

function App() {
  const [updateInfo, setUpdateInfo] = useState();
  const [closeForm, setCloseForm] = useState(true);

  const baseUrl = "https://users-crud.academlo.tech";

  const [user, getAllUsers, createNewUser, deleteUserById, updateUserById] =
    useFetch(baseUrl, setCloseForm);

  useEffect(() => {
    getAllUsers("/users");
  }, []);

  const handleOpenForm = () => {
    setCloseForm(false);
  };

  return (
    <div>
      <h1>Users</h1>
      <button onClick={handleOpenForm} className="user__btn">
        {" "}
        + Create new user
      </button>
      <FormUser
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
        closeForm={closeForm}
        setCloseForm={setCloseForm}
      />
      <div className="container">
        {user?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            handleOpenForm={handleOpenForm}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
