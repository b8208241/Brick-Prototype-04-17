import React from 'react';
import {ContentRow} from './ContentRow.jsx'
import {CreateBrick} from './CreateBrick.jsx'

export class TopicWall extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let topicId = this.props.topicId;
    let topicData = this.props.topicData;
    return(
      <div className='topic-wall'>
        <CreateBrick/>
        <ContentRow id="rowOne" class="row" rowRecord = {topicData[topicId][1]} topicId = {topicId} handle_dispatch_newContentSubmit = {this.props.handle_dispatch_newContentSubmit} handle_dispatch_positionChangeSubmit = {this.props.handle_dispatch_positionChangeSubmit}/>
        <ContentRow id="rowTwo" class="row" rowRecord = {topicData[topicId][2]} topicId = {topicId} handle_dispatch_newContentSubmit = {this.props.handle_dispatch_newContentSubmit} handle_dispatch_positionChangeSubmit = {this.props.handle_dispatch_positionChangeSubmit}/>
        <ContentRow id="rowThree" class="row" rowRecord = {topicData[topicId][3]} topicId = {topicId} handle_dispatch_newContentSubmit = {this.props.handle_dispatch_newContentSubmit} handle_dispatch_positionChangeSubmit = {this.props.handle_dispatch_positionChangeSubmit}/>
        <ContentRow id="rowFour" class="rowFour" rowRecord = {topicData[topicId][4]} topicId = {topicId} handle_dispatch_newContentSubmit = {this.props.handle_dispatch_newContentSubmit} handle_dispatch_positionChangeSubmit = {this.props.handle_dispatch_positionChangeSubmit}/>
      </div>
    )
  }
}
