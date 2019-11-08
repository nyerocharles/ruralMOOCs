import React, { Component } from 'react';
import axios from 'axios';

import VideoPlayer from '../widgets/VideoPlayer/videoPlayer';
import InstructorCard from '../widgets/InstructorCard/instructorCard';
import Topics from '../widgets/Topics/topics';

class Video extends Component {

    state={
        topics:''
    }

    componentDidMount() {
        axios.get(`/api/topic/${this.props.match.params.id}`)
        .then(res=>{
            axios.get(`/api/topics/${res.data.course}`)
            .then(resp=>{
                this.setState({
                    topics:resp.data
                })
            })
        })
        .catch(error=>console.log(error))
    }

    renderTopics=(topics)=>{
        return topics.map((topic,i)=>(
            <Topics topic={topic} key={i}/>
            )
        )
    }

    render(){
        if(this.state.topics === ''){
            return null;
        }
        return ( 
            <div className='row' style={{width:'100%',margin:'0'}}>
                <div className='col-md-8'>
                    <VideoPlayer source={this.props.match.params.id}/>
                    tabs
                </div>
                <div className='col-md-4'>
                    <InstructorCard/>
                    {this.renderTopics(this.state.topics)}
                    videos/topics
                </div>
            </div>
        );
    }
}
 
export default Video;