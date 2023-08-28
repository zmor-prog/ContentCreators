import React, { useState, useEffect } from 'react';
import YTPage from '../components/YTPage';
import { supabase } from '../client'
import { useParams } from 'react-router-dom';

const YTCreator = ({data}) => {

    const [creatorDetails, setCreator] = useState([]);
    const {id}=useParams();
    console.log(id)
    useEffect(() => {
        const fetchData= async () =>{
            const {data} = await supabase
            .from('youtubers')
            .select()
            .eq('id',id);
            // set state of posts
            console.log(data);
            setCreator(data);
        }
        
        fetchData().catch(console.error());
    }, [id]);
    
    return (
        <div className="ViewCreators">
            {
                creatorDetails && creatorDetails.length > 0 ?
                creatorDetails.map((creator,index) => 
                   <YTPage  id={creator.id} creatorName={creator.name} creatorURL={creator.URL} creatorImageURL={creator.imageURL} creatorDescription={creator.ytDescription}/>
                ) : <h2>{'Invalid Creator ID.'}</h2>
            }
        </div>  
    )
}

export default YTCreator;