import React from "react";

const LogoutButton: React.FC = () => {
  function handleLogout() {
    localStorage.removeItem("userData");
    location.replace("/login");
  }

  return (
    <button
      className="
        text-xl w-fit py-2 px-4
        border-solid border-2 border-blue rounded-full
        hover:bg-blue hover:text-white
        active:bg-main-blue-active active:text-white
      "
      onClick={handleLogout}
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
