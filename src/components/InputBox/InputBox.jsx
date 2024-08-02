import React, { useEffect, useState } from "react";
import "./StyleInputBox.css";
import { LinkSvg, PasteSvg, SearchSvg } from "../../Svg";

import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/actions";

function InputBox() {
  const dispatch = useDispatch();
  const [Query, setQuery] = useState("");

  useEffect(() => {
    const inpt = document.getElementsByTagName("input")[0];
    inpt.focus();
  }, []);

  const handlePasteClick = async () => {
    try {
      const text = await navigator.clipboard.readText();
      console.log(text);
      setQuery(text);
    } catch (err) {
      console.error("Failed to read clipboard contents: ", err);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && Query.trim().length > 0) {
      e.preventDefault();
      toggleSearch();
      setQuery("");
    }
  };

  const toggleSearch = () => {
    if (!Query.trim().length) {
      return;
    }
    dispatch(
      fetchData({
        link: Query,
      })
    );
    setQuery("");
  };

  return (
    <div className="InputBox">
      <div className="container">
        <div className="linklogo">
          <LinkSvg fill={"#fff"} />
        </div>
        <div className="input">
          <input
            type="text"
            value={Query}
            placeholder="Enter YouTube video link..."
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="paste" onClick={handlePasteClick}>
          <PasteSvg fill={"#fff"} />
        </div>
        <div className="searchlogo" onClick={toggleSearch}>
          <SearchSvg fill={"#fff"} />
        </div>
      </div>
    </div>
  );
}

export default InputBox;
