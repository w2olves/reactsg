import ProfileCard from "./ProfileCard";
function App() {
  const alex =
    "https://fastly.picsum.photos/id/200/200/200.jpg?hmac=mk1Tu6dXHQvpaA8RfxlDUZjbWG23krNkiB9kyYoEmO8";
  return (
    <div>
      <div>Personal Digital Assistant</div>
      <ProfileCard title="Alexa" handle="@alexa" image={alex} />
      <ProfileCard title="Cortana" handle="@cort" />
      <ProfileCard title="Siri" handle="@siri" />
    </div>
  );
}

export default App;
