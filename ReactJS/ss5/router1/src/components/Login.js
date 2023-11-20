import {Formik, Field, Form} from "formik";
import { useNavigate } from "react-router-dom";
import { Home } from "./Home";
export function Login() {
  const navigate = useNavigate();
  const accountInit = {
    account: "",
    password: "",
  };
  const handleSubmit = (value) => {
    <Home  account={value.account} password={value.account}></Home>
    alert("Login successfully");
    navigate("/home");
  };
  return (
    <>
      <Formik
        initialValues={accountInit}
        onSubmit={(value) => {
          if (value.account === "admin@gmail.com" && value.password === "letmein") {
            handleSubmit(value);
          }
          console.log(value);
        }}
      >
          <Form>
            <h2>Account</h2>
            <table>
              <tr>
                <th>Account</th>
                <td>
                  <Field type="text" name="account"></Field>
                </td>
              </tr>
              <tr>
                <th>Password</th>
                <td>
                  <Field type="password" name="password"></Field>
                </td>
              </tr>
            </table>
            <button type="submit">Login</button>
          </Form>
      </Formik>
    </>
  );
}
