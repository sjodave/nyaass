import React from "react";

export default function Funding() {
  return (
    <div className="container">
      <h1 className="dark dFlex-center">Funding</h1>
      <div>
        <br />
        <b>LEGAL & FINANCIAL INFORMATION -</b>
        NYAASS is registered as society under Societies Registration Act, 1860 &
        Trust registration under Bombay Public Trusts Act, 1950.
      </div>
      <br />
      <p className="card p-2 bold">
        Donate us at - <br />
        Account Name : NYAASS <br />
        Account No : 1324104000039738 <br />
        IFSC : IBKL0001324 <br />
        Branch Name : Dahanukar Colony Branch
      </p>
      <div className="dFlex">
        <img src="/QR-Code.jpeg" alt="Img" style={{ height: "100vh" }}></img>
        <img
          src="/Premium/IMG_20200908_103120_Large.jpg"
          alt=""
          style={{ height: "85vh" }}
        ></img>
      </div>
    </div>
  );
}
