import { NameInitialsAvatar } from "react-name-initials-avatar";

function UserProfile({ username }) {
  return (
    <div className="flex flex-row items-center cursor-pointer">
      <NameInitialsAvatar name={username} />
      <h2 className="text-white font-inter ml-2">{username}</h2>
    </div>
  );
}

export default UserProfile;
