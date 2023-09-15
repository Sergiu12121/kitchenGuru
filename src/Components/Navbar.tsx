import React from "react";

function Navbar() {
  return (
    <nav className="flex sm:justify-center space-x-4">
      {[
        ["Home", "/"],
        ["Team", "/sergiu"],
        ["Projects", "/projects"],
        ["Reports", "/reports"],
      ].map(([title, url]) => (
        <a
          href={url}
          className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
        >
          <button className="content">{title}</button>
        </a>
      ))}
    </nav>
  );
}

export default Navbar;
