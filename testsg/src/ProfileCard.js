function ProfileCard({ title, handle, image }) {
  return (
    <div>
      <img src={image}></img>
      My name is {title} and my handle is {handle}
    </div>
  );
}

export default ProfileCard;
