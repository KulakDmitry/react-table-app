import "../App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSortAndSearch } from "../hooks/useSortAndSearch";
import Button from "../components/UI/Button/Button";
import ModalWindow from "../components/UI/Modal/ModalWindow";
import CreateInputForm from "../components/CreateInputForm";
import FilterUsers from "../components/FilterUsers";
import CreateTable from "../components/CreateTable";
import Loader from "../components/UI/Loader/Loader";

function CustomTable() {
  const [userList, setUserList] = useState([]);
  const [filter, setFilter] = useState({
    direction: "",
    key: null,
    search: "",
  });
  const [modal, setModal] = useState(false);
  const searchAndSort = useSortAndSearch(userList, filter);

  const [totalPage, setTotalPage] = useState(0);
  const [limit, setLimit] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoading, setIsLoading] = useState(false);

  const requestSort = (key) => {
    let direction = "ascending";
    if (filter && filter.key === key && filter.direction === "ascending") {
      direction = "descending";
    }

    setFilter({ ...filter, key: key, direction: direction });
  };

  const createUser = (newUser) => {
    setUserList([...userList, newUser]);
    setModal(false);
  };
  const removeUser = (user) => {
    setUserList(userList.filter((users) => users.id !== user.id));
  };

  return (
    <div className="App">
      <Button onClick={() => setModal(true)}>Create new user</Button>
      <ModalWindow visible={modal} setVisible={setModal}>
        <CreateInputForm createUser={createUser} userList={userList} />
      </ModalWindow>
      <FilterUsers filter={filter} setFilter={setFilter} setLimit={setLimit} />
      {isLoading ? (
        <Loader />
      ) : (
        <CreateTable
          userList={searchAndSort}
          remove={removeUser}
          requestSort={requestSort}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPage={totalPage}
          filter={filter}
        />
      )}
    </div>
  );
}

export default CustomTable;
