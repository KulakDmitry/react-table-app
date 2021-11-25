import Table from "./UI/Table/Table";
import ButtonTableHead from "./UI/Button/ButtonTableHead";
import React from "react";
import PagesList from "./PagesList";
import Button from "./UI/Button/Button";

const CreateTable = ({
  userList,
  remove,
  requestSort,
  currentPage,
  setCurrentPage,
  totalPage,
}) => {
  if (!userList.length) {
    return <div style={{ margin: "50px" }}>Nothing found</div>;
  }

  const renderList = userList.map((user) => (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <Button
          style={{
            cursor: "pointer",
            margin: 0,
            padding: "3px",
            border: "1px solid grey",
          }}
          onClick={() => remove(user)}
        >
          del
        </Button>
      </td>
    </tr>
  ));

  return (
    <>
      <Table>
        <caption style={{ fontSize: "30px", marginTop: "30px" }}>
          Table of users
        </caption>
        <thead>
          <tr>
            <th>
              <ButtonTableHead onClick={() => requestSort("id")}>
                <span>Number </span>
              </ButtonTableHead>
            </th>
            <th>
              <ButtonTableHead onClick={() => requestSort("name")}>
                <span>Name </span>
              </ButtonTableHead>
            </th>
            <th colSpan={2}>
              <ButtonTableHead onClick={() => requestSort("email")}>
                <span>Email</span>
              </ButtonTableHead>
            </th>
          </tr>
        </thead>
        <tbody>{renderList}</tbody>
      </Table>
      <PagesList
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPage={totalPage}
      />
    </>
  );
};

export default CreateTable;
