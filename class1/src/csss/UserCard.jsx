const userData = [
  {
    name:"James",
    city:"New york",
    description:"Front-end developer", 
    skills:["UI / UX","Front-end developer","Html","Css","javascript",
      "React","node"
    ],
     online:true,
     profile:"images/profile1.jpg"
    
  },
    {
    name:"James",
    city:"New york",
    description:"Front-end developer", 
    skills:["UI / UX","Front-end developer","Html","Css","javascript",
      "React","node"
    ],
     online:false,
     profile:"images/profile1.jpg",
    
  },
    {
    name:"James",
    city:"New york",
    description:"Front-end developer", 
    skills:["UI / UX","Front-end developer","Html","Css","javascript",
      "React","node"
    ],
     online:false,
     profile:"images/profile1.jpg",
    
  }

]

function User (props){
return<div className="card-container">
  <span className={props.online?"pro online":"pro offline"}>
    {props.online?"Online":"Offline"}
  </span>
  <img src={props.profile} className="img" alt="user" />
  <h3>{props.name}</h3>
  <h3>{props.city}</h3>
  <p>{props.description}</p>
  <div className="buttons">
    <button className="primary">message</button>
    <button className="primary outline">following</button>
  </div>
  <div className="skills">
    <h6 >Skills</h6>
    <ul>
     {props.skills.map((skill,index)=>(
      <li key={index}>{skill}</li>
     ))}
    </ul>
  </div>
</div>

}

export const UserCard = () => {
  return (
  <>
  {userData.map((user, index) =>(
        <User 
         key={index} 
          name={user.name} 
          city={user.city} 
          description={user.description}
          skills={user.skills} 
          online={user.online}
          profile={user.profile} 
          />
  ))}

  </>
  )
}

// export const UserCard = () => {
//   return (
//     <>
//       {userData.map((user, index) => (
//         <User 
//           key={index} 
//           name={user.name} 
//           city={user.city} 
//           description={user.description}
//           skills={user.skills} 
//           online={user.online}
//           profile={user.profile} 
//         />
//       ))}
//     </>
//   )
// }


  // <User name="James" city="New york" description="Front-end developer" 
  //   skills={["UI / UX","Front-end developer","Html","Css","javascript",
  //     "React","node"
  //   ]} online={true} profile="images/profile1.jpg" />