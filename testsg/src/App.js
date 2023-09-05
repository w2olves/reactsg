import ProfileCard from "./ProfileCard";
function App(){
    return(<div>
<div>Personal Digital Assistant</div>
<ProfileCard title="Alexa" handle="@alexa"/>
<ProfileCard title="Cortana" handle="@cort"/>
<ProfileCard title="Siri" handle="@siri"/>
</div>
    )
}

export default App;