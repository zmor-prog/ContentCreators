import React, { useState, useEffect } from 'react';

import { supabase } from '../client'
import { useParams } from 'react-router-dom';
import '../components/Card.css'


const EditYouTuber = ()=> {
    const [ytForm, setytForm] = useState({name: "", URL: "", ytDescription: "", ImageURL:""})
    const{id}=useParams();
    useEffect(() => {
        const fetchData = async () => {
          const { data } = await supabase
            .from('youtubers')
            .select()
            .eq('id', id);
            setytForm(data[0]); // Set Creator
        }
       
        fetchData().catch(console.error());
    
      }, [id]);

    const updateCreator = async (event) => {
        event.preventDefault();
       await supabase
        .from('youtubers')
        .update({ name: ytForm.name, URL:ytForm.URL,ytDescription: ytForm.ytDescription,imageURL:ytForm.imageURL})
        .select()
        .eq('id',id);
        window.location = "/view/"+id;
    }

    const deleteYT = async (event) => {
        event.preventDefault();
       await supabase
        .from('youtubers')
        .delete()
        .eq('id',id);
        window.location = "/";
    }
    const handleChange = (event) => {
        
        const {name, value} = event.target;
        setytForm( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }
    return (
        <div>
            
            <form >
                <label for="name" className="edittitle">Creator Name</label> <br />
                <input onChange={handleChange} value={ytForm.name} type="text" id="name" name="name" /><br />
                <br/>

                <label for="ytDescription" className="edittitle">Description</label><br />
                <textarea onChange={handleChange} value={ytForm.ytDescription} type="textarea " rows="5" cols="50"id="ytDescription" name="ytDescription" /><br />
                <br/>
                
                <label for="URL" className="edittitle">Creator URL</label><br />
                <input onChange={handleChange} value={ytForm.URL} type="text" id="URL" name="URL" /><br />
                <br/>
                <label for="ImageURL" className="edittitle">Image URL</label><br />
                <input onChange={handleChange} value={ytForm.imageURL} type="textarea" id="ImageURL" name="ImageURL" /><br />
                <br/>
                
                <input className="myeditButton" onClick={updateCreator} type="submit" value="Update" />
                <input className="myeditButton redButton" onClick={deleteYT} type="submit" value="Delete" />

            </form>
        </div>
    )
}

export default EditYouTuber