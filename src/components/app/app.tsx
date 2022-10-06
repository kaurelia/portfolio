import AppProvider from "~frontend/src/components/app-provider/app-provider";
import AppWrapper from "~frontend/src/components/app-wrapper/app-wrapper";

const App = () => {
  return (
    <AppProvider>
      <AppWrapper />
    </AppProvider>
  );
};
export default App;
