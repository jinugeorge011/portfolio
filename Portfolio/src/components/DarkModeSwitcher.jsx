import React, { useState } from 'react';
import styled from 'styled-components';

const DarkModeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark', !isDark);
  };

  return (
    <StyledWrapper>
      <label className="switch">
        <input type="checkbox" checked={isDark} onChange={handleToggle} />
        <span className="slider"></span>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* The switch - the box around the slider */
  .switch {
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 3.2em;
    height: 1.5em;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    transition: .4s;
    border-radius: 30px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1em;
    width: 1em;
    border-radius: 20px;
    left: 0.3em;
    bottom: 0.3em;
    background-color: rgb(219, 198, 2);
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #fff;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #000000;
  }

  input:checked + .slider:before {
    transform: translateX(1.5em);
  }

  .slider::after {
    width: 20px;
    height: 20px;
    left: 20%;
    top: 10%;
    border-radius: 50%;
    position: absolute;
    content: "";
    color:"#fff";
    background-color: #000;
    transition: ease 0.4s;
  }

  input:checked + .slider::after {
    left: 80%;
    width: 0px;
    height: 0px;
  }
`;

export default DarkModeSwitcher;
