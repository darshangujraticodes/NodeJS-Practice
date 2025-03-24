import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // async await method of api call
    // const fetchApi = async () => {
    //   try {
    //     const response = await fetch("/api/users");
    //     const data = await response.json();
    //     setUserData(data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    // fetchApi();

    // axios method of api call

    axios
      .get("/api/users")
      .then(function (response) {
        // handle success
        setUserData(response.data);
        console.log("axios api response", response);

        console.log("axios api data", response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <>
      <div>
        <h1>Full Stack App Deploy Test</h1>

        <p className="text-center ">
          User Count : {userData.length > 0 ? userData.length : 0}
        </p>

        <div className="tableWrap">
          <table>
            <thead>
              <tr>
                <th className="wid1">ID </th>
                <th className="wid2">Name </th>
                <th className="wid3">Email </th>
                <th className="wid4">City </th>
                <th className="wid5">Zipcode </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Darsh</td>
                <td>darsh@gmail.com</td>
                <td>Mumbai</td>
                <td>401208</td>
              </tr>

              {userData?.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.city}</td>
                  <td>{item.zipcode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
