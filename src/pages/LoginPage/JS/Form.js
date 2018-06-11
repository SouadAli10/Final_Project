import React from "react";
import Input from "./Input";

export default ({ onSubmit }) => (
  <div className="Modal">
    <form onSubmit={onSubmit} className="ModalForm">
      <Input id="username" type="email" placeholder="mrjackolai@gmail.com" />
      <Input id="password" type="password" placeholder="password" />
      <button type="submit">
        Log in <i className="fa fa-fw fa-chevron-right" />
      </button>
    </form>
  </div>
);
