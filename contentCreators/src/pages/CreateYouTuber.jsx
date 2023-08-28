import React, { useState, useEffect } from 'react';

import { supabase } from '../client'
import '../components/Card.css'

const CreateYoutuber = ()=> {
    const [post, setPost] = useState({Name: "", URL: "", ytDescription: "", ImageURL:""})
    
    const addCreator = async (event) => {
        event.preventDefault();
       await supabase
        .from('youtubers')
        .insert({ name: post.Name, URL:post.URL,ytDescription: post.ytDescription,imageURL:post.ImageURL})
        .select();
    
        window.location = "/";
    }
    const handleChange = (event) => {
        
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }
    return (
        <div>
            <form >
                <label for="Name" className="edittitle">Creator Name</label> <br />
                <input onChange={handleChange} value={post.Name} type="text" id="Name" name="Name" /><br />
                <br/>

                <label for="ytDescription" className="edittitle">Description</label><br />
                <textarea onChange={handleChange} value={post.ytDescription} type="textarea " rows="5" cols="50"id="ytDescription" name="ytDescription" /><br />
                <br/>
                
                <label for="URL" className="edittitle">Creator URL</label><br />
                <input onChange={handleChange} value={post.URL} type="text" id="URL" name="URL" /><br />
                <br/>
                <label for="ImageURL" className="edittitle">Image URL</label><br />
                <input onChange={handleChange} value={post.ImageURL} type="textarea" id="ImageURL" name="ImageURL" /><br />
                <br/>
                
                <input className="myeditButton greenButton" onClick={addCreator} type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CreateYoutuber