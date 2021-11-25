import React, { useState } from "react";
import Input from "./UI/Input/Input";
import Button from "./UI/Button/Button";

const CreateInputForm = ({ createUser, userList }) => {
  const [value, setValue] = useState({ name: "", email: "" });

  const addNewUser = () => {
    const newUser = {
      ...value,
      id: userList.length + 1,
      index: userList.length + 1,
    };
    createUser(newUser);
    setValue({ name: "", email: "" });
  };
  return (
    <div>
      <Input
        value={value.name}
        onChange={(e) => setValue({ ...value, name: e.target.value })}
        type="text"
        placeholder={"Enter the name of new users"}
      />
      <Input
        value={value.email}
        onChange={(e) => setValue({ ...value, email: e.target.value })}
        type="text"
        placeholder={"Enter the email of new users"}
      />
      <Button onClick={addNewUser}>add new user</Button>
    </div>
  );
};

export default CreateInputForm;
