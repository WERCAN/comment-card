import "./App.css";
import ApproveCard from "./components/ApproveCard";
import CommentDetail from "./components/CommentDetail";
import UiCard from "./components/UiCard";
import faker from 'faker';

function App() {
  return (
    <div style={{backgroundColor:"lightblue", display:"grid", minHeight:"100vh",placeContent:'center'}}>
      <div className="ui container comments">
        <ApproveCard>
          <CommentDetail name="Memo" date="25/02/2021" comment="forget giving up, do as much as u can" avatar={faker.image.image()}/>
        </ApproveCard>
        
        <ApproveCard>
          <CommentDetail name="Silo" date="17/12/2020" comment="Who see beautiful lives nice :)" avatar={faker.image.image()}/>
        </ApproveCard>
        
        <UiCard/>
      </div>
    </div>
  );
}

export default App;
