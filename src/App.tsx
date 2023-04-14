import Header from "containers/Header/Header";
import AuthLayout from "layouts/Auth/AuthLayout";


function App() {
  return <AuthLayout header={<Header />} content="content" footer="footer" />;
}

export default App;
