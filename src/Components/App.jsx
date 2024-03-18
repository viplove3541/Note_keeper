import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from '../notes';


const CreateNotes = (noteItem) =>{

  const {key, title,content} = noteItem
  return(
<Note 
  key = {key}
    title = {title}
    content = {content}
  />
)}

function App() {
  return (
   <div>
    <Header/>
    {notes.map(CreateNotes)}
    <Footer />
   </div>
  );
}

export default App;
