import React from "react";
import Navbar from "./navbar/Navbar";
import FormField from "./FormField/FormField";
import CoolButton from "./CoolButton/CoolButton";

const App = () => {
  return (
    <div>
      <Navbar Buttons={
          <div>
          <CoolButton isSmall isSuccess className="is-rounded my-class">Twitter</CoolButton>
          <CoolButton isSmall isDanger className="is-rounded my-class">Download</CoolButton>
          </div>
          }
          />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <FormField label="Password" type="password" placeholder="******" />
      <CoolButton isSuccess className="is-rounded">Submit</CoolButton>
    </div>
  );
};

export default App;
