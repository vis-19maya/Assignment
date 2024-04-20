import { useEffect ,useState} from "react";
import axios from 'axios';
import './Myblog.css'
function Myblog() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
         setData(res.data);
      setLoading(false);
    })
      .catch(err => {
         console.log(err);
      setLoading(false);
      });
    },[]);
    if (loading) {
        return <div>Loading</div>;
      }
  return (
    <div className='container'>
<table  className='table'>
<thead>
    <tr>
        <th>userID</th>
        <th>ID</th>
        <th>Title</th>
        <th>Body</th>      
  </tr>
</thead>
<tbody>
{  data.map((post, index) => {
        return (
        <tr key={index}>
          <td>{post.userId}</td>
          <td>{post.id}</td>
          <td>{post.title}</td>
          <td>{post.body}</td>

        </tr>
        );
      })}
</tbody>
</table>
        </div>
  );
}
export default Myblog;