import Post from "./components/Post";
import postsData from "../utilities/posts.json"; 

function App() {
  return (
    <div>
      {postsData.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default App;
