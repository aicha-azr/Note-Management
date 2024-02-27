"use client"
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { addPost, deletePost } from "../redux/slices/postSlice";
import React ,{ useState } from "react";
import { randomFillSync } from "crypto";

const Posts = ()=>{
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

const posts = useSelector((state: any)=> state.posts);
function handleRemovePost (postId: any){
    dispatch(deletePost(postId))
}
function handleCreatePost(e: any){
    e.preventDefault();
    if(!title && !description) return;
     const newPost ={
        id: Date.now(),
        title: title,
        description: description

     }
     dispatch(addPost(newPost));
     setTitle('');
     setDescription('');
}
//console.log(posts);
return(
    <>
    <div className="flex gap-[2rem] self-stretch">
        <form method="post" onSubmit={handleCreatePost} className="flex flex-col items-stretch p-[2rem] gap-[2rem] h-fit border border-white">
            <label>Title:</label>
            <input type="text" className="text-black p-2" value={title} name="title" placeholder="enter a title" onChange={(e)=>setTitle(e.target.value)}/>
            <label>Description:</label>
            <textarea name="description" value={description}className="text-black p-2" placeholder="enter a description" onChange={(e)=>setDescription(e.target.value)}/>
            <button type="submit" className="bg-blue-500 shadow-md p-2">Create</button>
        </form>
        
            


    
      <div className="flex flex-wrap gap-2"> 
        {posts?posts.map((post:any) =>
    (<div key={post.id} className="border border-white flex flex-col h-fit items-stretch p-[2rem] gap-[2rem]">
        <h3>title: {post.title}</h3>
        <p>description: {post.description}</p>
        <button onClick={()=>handleRemovePost(post.id)} className="bg-red-700 items-center p-1">delete</button>

        </div>)):
        (<div>no posts</div>)
        }
            
    
    </div>
    </div> 
    </>
)
}
export default Posts;