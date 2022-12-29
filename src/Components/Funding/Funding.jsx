import React from "react";

export default function Funding() {
  return (
    <>
      <h1 className="dark dFlex-center">Funding</h1>
      <div className="plr">
        <div className="mb-4 mt-4">
          <b className="mb-4">LEGAL & FINANCIAL INFORMATION -</b>
          NYAASS is registered as society under Societies Registration Act, 1860
          & Trust registration under Bombay Public Trusts Act, 1950.
        </div>
        <p className="card p-2 bold mb-4">
          Donate us at - <br />
          Account Name : NYAASS <br />
          Account No : 1324104000039738 <br />
          IFSC : IBKL0001324 <br />
          Branch Name : Dahanukar Colony Branch
        </p>
        <div className="dFlex row">
          <img
            className="col-lg-7 col-sm-12"
            src="/Premium/IMG_20200908_103120_Large.jpg"
            alt=""
          ></img>{" "}
          <img
            src="/QR-Code.jpeg"
            alt="Img"
            className="col-lg-4 col-sm-12"
            id="qr"
          ></img>
        </div>
      </div>
    </>
  );
}
