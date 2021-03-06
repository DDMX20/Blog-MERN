
import React,{useState} from "react";
import {Link} from "react-router-dom"
import { useHistory } from "react-router-dom";
function DeletePost(props){

    const history = useHistory()


const[set, handleSet] = useState(false);
const fetchItems= async() =>
  {
      const main = await fetch("http://localhost:5000/posts/"+props.match.params.id)
      const del=main.url
      fetch(del, {method: 'DELETE'})
      history.push("/");
  }
set?fetchItems():console.log("not deleted")
function handleClick()
{
  if(window.confirm('Are you sure you want to delete the Post '))
  {handleSet(true)}}

  return (<div className="home">
        <Link to="/posts"><li>POSTS</li></Link>
                <div className="delete">
                <h3>Are you sure you want to delete the post</h3>
                <button  onClick={handleClick}>Confirm Delete</button>



                </div>
                </div>
               )

          };

export default DeletePost;
