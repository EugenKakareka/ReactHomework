import React, { useState, useMemo } from "react";
import { userData } from "./userData";
import UsersList from "./components/UsersList";
import SortSelect from "./components/SortSelect";
import Modal from "./components/Modal/Modal";
import FindByName from "./components/FindByName";
import "./styles/App.css";

function App() {
  const [users, setUsers] = useState(userData);
  const [find, setFind] = useState("");
  const [sortType, setSortType] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  const findByName = useMemo(() => {
    return users.filter((item) =>
      item.name.toLowerCase().includes(find.toLowerCase())
    );
  }, [users, find]);

  const sortByAge = (sort) => {
    setSortType(sort);
    if (sort === "ab") {
      setUsers([...users].sort((a, b) => a.age - b.age));
    }
    if (sort === "ba") {
      setUsers([...users].sort((a, b) => b.age - a.age));
    }
  };

  return (
    <div className="App">
      <Modal
        visible={isActive}
        setVisible={setIsActive}
        selectedUser={selectedUser}
      ></Modal>
      <SortSelect
        defaultValue="Sorting type"
        options={[
          { value: "ab", title: "From youngest" },
          { value: "ba", title: "From oldest " },
        ]}
        value={sortType}
        onSortChange={sortByAge}
      />
      <FindByName
        value={find}
        onChange={(event) => setFind(event.target.value)}
      />
      <UsersList
        users={findByName}
        setIsActive={setIsActive}
        setSelectedUser={setSelectedUser}
      />
    </div>
  );
}

export default App;
