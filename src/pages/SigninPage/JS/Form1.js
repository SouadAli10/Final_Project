import React from "react";
import Input from "./Input";

export default ({ onSubmit }) => (
  <div className="Modal">
    <form onSubmit={onSubmit} className="ModalForm">
      <Input id="person_name" type="text" placeholder="Jack-Edward Oliver" />
      <Input id="username" type="email" placeholder="mrjackolai@gmail.com" />
      <Input id="password" type="password" placeholder="password" />
      <input id="terms" type="checkbox" />
      <label htmlFor="Terms">Terms and Conditions </label>
      <button type="submit">
        Continue <i className="fa fa-fw fa-chevron-right" />
      </button>
    </form>
  </div>
);
