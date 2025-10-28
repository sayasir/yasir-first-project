 import {Learncomponents} from "./components/learncomponents";
import { Fragment } from "react";
 import{ Header } from "./components/header";
 import  {Student}  from "./components/student";
import './csss/app.css'
import Functionsample from "./components/Functionsample";
import { Oneofsample } from "./components/Oneofsample";
 import MultiTypecommponand from "./components/MultiTypecommponand";
 import { Arraysample } from "./components/Arraysample";
 import {Childcomponand} from "./components/Childcomponand";




function App() {
 const item =[
   {id:1, name:"item1"},
  {id:2, name:"item2"},
   {id:3, name:"item3"},
  ]
const handleClick = () =>{
  alert("button clicked")
}

  return (
    <Fragment>
 <div>yasir reactjs</div>
<Learncomponents />
 <Header/>
<Student name="ronaldo" age={20} ismarried={true} />
<Student name="yasir" age={20} ismarried={false} />
<Student name="yasir" age={18} ismarried={false} />
<Student />


<Childcomponand>
<p>this is a sample paragrap1</p>
<p>this is a sample paragrap2</p>
<p>this is a sample paragrap3</p>
</Childcomponand> 
 <Arraysample item={item} /> 

 <Oneofsample color="yellow" /> 
 <MultiTypecommponand  value="hello"/>
<MultiTypecommponand  value={42}/>
<MultiTypecommponand  value={true}/>
<div>
  <h1>this for function sample</h1>

</div>
<Functionsample  handleClick={handleClick}/>
    </Fragment >
  );
}

export default App
