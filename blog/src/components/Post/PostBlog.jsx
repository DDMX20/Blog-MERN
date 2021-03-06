import React ,{useEffect} from "react";
function PostBlog(props){
      useEffect(() => {

         postData();
           // eslint-disable-next-line react-hooks/exhaustive-deps
       }, []);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     // Updated date
       const date = new Date();
///////post data/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      async function postData(url = 'http://localhost:5000/posts', data = {
        title: props.data.title,
        createdAt: date,
        tags: props.data.tags,
        html:"<h1>"+props.data.html+"</h1>"})
        { const response = await fetch(url,
            {
               method: 'POST',
               headers: {'Content-Type': 'application/json'},
               body: JSON.stringify(data)
             }
             );
             return response.json();
         }

        return (<div>
                <p>posted!!!</p>
                </div>
               )
            };


export default PostBlog;
