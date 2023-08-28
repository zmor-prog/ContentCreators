import React, { useState, useEffect } from 'react';
import YouTuberCard from '../components/YouTuberCard';
import { supabase } from '../client'

const ViewYouTubers = (props) => {

    const [creatorList, setCreatorList] = useState([]);

    useEffect(() => {
        const fetchData= async () =>{
            const {data} = await supabase
            .from('youtubers')
            .select()
            .order('created_at', { ascending: true })
            // set state of posts
            setCreatorList(data);
        }
        setCreatorList(props.data);
        fetchData().catch(console.error());
    }, [props]);
    
    return (
        <div className="ViewCreators">
            {
                creatorList && creatorList.length > 0 ?
                creatorList.map((creator,index) => 
                   <YouTuberCard  Description= {creator.ytDescription}  id={creator.id} creatorName={creator.name} creatorURL={creator.URL} creatorImageURL={creator.imageURL}/>
                ) : <h2>{'No Creators yet. Add some!'}</h2>
            }
        </div>  
    )
}

export default ViewYouTubers;