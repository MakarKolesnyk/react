
import Comment from './components/Comment/Comment';

const dataComent= {
    id:1,
    content:"cool!",
    amountLike:35,
    isNew: true
}
function App() {
  return (
    <>
      <Comment dataComent={dataComent}/>
    </>
  );
}

export default App;
