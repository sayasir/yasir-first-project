// import React from "react";
// export const Header = () => {
//      return React.createElement("div",null,React.createElement("h1",{className:"BannerText"},"yasir react"),
//     React.createElement("p",{className:"slogan"},"leran more"))
// };

export const Header = () => {
  let customcss="error";
  const isloggedin=false;
  const greeting= isloggedin ? <p>welcome back!</p> : <p>please login </p>; 
const items=["Item 1","Item 2","Item 3"]
  return (
    <>
     <div>
      <h1 className="hi">hi how are you</h1>
        <h1 className="BannerText">yasir react</h1>
        <p className="slogan">learn more to be smart</p>
        {/* javascript expression injsx */}
        <p className={customcss} style={{fontSize:"25px",fontStyle:"italic"}}>25+45,5-1={25+45},{5-1}</p>
     {/* condition rendering */}
     {greeting}

{/* jsx with list */}
    {items.map((index,item)=>(<li key={item}>{index}</li>))}
      </div>
    </>
  )
}
