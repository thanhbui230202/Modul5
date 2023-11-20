export function Home(props) {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Account:</th>
              <td>{props.account}</td>
            </tr>
            <tr>
              <th>Password:</th>
              <td>{props.password}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }