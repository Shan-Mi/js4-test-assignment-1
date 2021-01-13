import "./App.css";
import ActionPoint from "./components/ActionPoint";

function App() {
  const linkInternal = {
    getFrontendUrl: "/myFrontendURL",
    title: "My Frontend URL",
  };
  const linkDocument =
    "https://www.google.se/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
  const linkExternal = "https://www.google.com";
  
  return (
    <div>
      <ActionPoint
        title="This is a internal link title"
        description="This is a description"
        top={10}
        left={10}
        linkKind={0}
        linkInternal={linkInternal}
        iconKind={0}
      />

      <ActionPoint
        title="This is a external link title"
        description="This is a description"
        top={30}
        left={20}
        linkKind={1}
        linkExternal={linkExternal}
        iconKind={1}
      />

      <ActionPoint
        title="This is a Modal link title"
        description="This is a description"
        top={50}
        left={30}
        linkKind={2}
        iconKind={1}
      />

      <ActionPoint
        title="This is a Document link title"
        description="This is a description"
        top={70}
        left={40}
        linkKind={3}
        iconKind={1}
        linkDocument={linkDocument}
      />
    </div>
  );
}

export default App;
