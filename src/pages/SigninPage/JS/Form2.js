import React from "react";
import Input from "./Input";

export default ({ onSubmit }) => (
  <div className="Modal">
    <form onSubmit={onSubmit} className="ModalForm">
      <Input id="country" type="text" placeholder="Lebanon" />
      <Input id="Skills" type="text" placeholder="Embroidery" />
      <Input id="Intrests" type="text" placeholder="Intrests" />
      <button>
        Sign in<i className="fa fa-fw fa-chevron-right" />
      </button>
    </form>
  </div>
);
