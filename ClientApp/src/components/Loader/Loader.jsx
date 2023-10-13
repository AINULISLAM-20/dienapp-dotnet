import React from "react";
import './Loader.css'

export default function Loader() {
  return (
    <div>
      <div className="loader-mask d-none">
        <div className="loader">
          <div />
          <div />
        </div>
      </div>
    </div>
  );
}
