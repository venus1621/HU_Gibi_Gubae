import React, { Component } from "react";

function Admin_Login() {
  return (
    <div>
      <div className="topHeaderImage"></div>
      <header className="header-footer" data-aos="fade">
        <h1>የሀዋሳ ዩኒቨርስቲ ግቢ ጉባዔ Official Websites</h1>
      </header>
      <main className="registration-form" data-aos="fade-down">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstname"
            placeholder="ስም"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastname"
            placeholder="የአባት ስም"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </form>
      </main>
      <footer className="footer-footer">
        <span> ሀዋሳ ዩኒቨርስቲ ግቢ ጉባዔ |</span>
        <span className="footer">
          <span class="far fa-copyright"></span> 2024 All Rights Reserved.
          Privacy Policy
        </span>
      </footer>
    </div>
  );
}

export default Admin_Login;
