import React, { Component, useEffect, useState } from "react";
import "./Register.css";
import { Link } from "wouter";
import AOS from "aos";
import "aos/dist/aos.css";

function Registration() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  const initialFormData = {
    firstname: "",
    lastname: "",
    christianity_name: "",
    gender: "Male",
    department: "computer science",
    batch: "2016",
    block_number: "",
    dorm_number: "",
    phone_number: "",
    id: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]:
        type === "checkbox"
          ? e.target.checked
          : type === "number"
          ? parseInt(value)
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // http://localhost/Mahbere_Kdusan/Gbi_PHP/signups.php
    // Send form data to PHP backend  https://usebasin.com/f/12ce1066ec44
    fetch("https://usebasin.com/f/12ce1066ec44", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.text())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
    alert(firstname + ", በትክክል ተመዝግበዋል");
    setFormData({ ...initialFormData });
  };

  const handleClearForm = () => {
    setFormData({ ...initialFormData });
  };
  return (
    <div>
      <div className="topHeaderImage"></div>
      <header className="header-footer" data-aos="fade">
        <h1>የሀዋሳ ዩኒቨርስቲ ግቢ ጉባዔ Official Websites</h1>
      </header>
      <main className="registration-form" data-aos="fade-right">
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
          <input
            type="text"
            name="christianity_name"
            placeholder="የክርስትና ስም"
            value={formData.christianity_name}
            onChange={handleChange}
            required
          />

          <input
            type="TEXT"
            name="ID"
            placeholder="ID"
            value={formData.id}
            onChange={handleChange}
            required
          />

          <label className="gg">
            <span className="gender-title"> ፆታ</span>
            <label>
              <span className="male">ወንድ</span>
              <input
                type="radio"
                name="gender"
                value="Male"
                id="gender"
                onChange={handleChange}
                required
                checked
              />
            </label>
            <label>
              <span className="male">ሴት</span>
              <input
                type="radio"
                name="gender"
                value="Female"
                id="gender"
                onChange={handleChange}
                required
              />
            </label>
          </label>
          <label className="gg">
            <span className="gender-title department">ዲፓርትመንት</span>
            <label>
              <select
                name="department"
                className="select"
                value={formData.department}
                onChange={handleChange}
              >
                <option value="computer science">Computer Science</option>
                <option value="IT">IT</option>
                <option value="Electrical Engineering">
                  Electrical Engineering
                </option>
                <option value="Mechanical Engineering">
                  Mechanical Engineering
                </option>
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="Architecture">Architecture</option>
              </select>
            </label>
          </label>
          <label className="gg">
            <label className="gender-title department">ባች</label>
            <label>
              <select
                name="batch"
                value={formData.batch}
                onChange={handleChange}
              >
                <option value="2013">2012</option>
                <option value="2014">2013</option>
                <option value="2015">2014</option>
                <option value="2016">2015</option>
                <option value="2017">2016</option>
                <option value="2018">2017</option>
                <option value="2019">2018</option>
                <option value="2020">2019</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
              </select>
            </label>
          </label>
          <label className="gg">
            <span className="gender-title"> ስልክ ቁጥር</span>
            <label>
              <input
                type="number"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                className="input-outline"
                placeholder="ስልክ ቁጥር ያስገቡ"
                required
              />
            </label>
          </label>
          <label className="gg">
            <span className="gender-title"> ብሎክ ቁጥር</span>
            <label>
              <input
                type="number"
                name="block_number"
                value={formData.block_number}
                onChange={handleChange}
                className="input-outline"
                placeholder="ብሎክ ቁጥር ያስገቡ"
                required
              />
            </label>
          </label>
          <label className="gg">
            <span className="gender-title"> ዶርም ቁጥር</span>
            <label>
              <input
                type="number"
                name="dorm_number"
                value={formData.dorm_number}
                onChange={handleChange}
                className="input-outline"
                placeholder="ዶርም ቁጥር ያስገቡ"
                required
              />
            </label>
          </label>

          <button type="submit">Register</button>
        </form>
        <br />
        <p>
          Already registred?
          <Link href="/">Guest</Link>
        </p>
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

export default Registration;
