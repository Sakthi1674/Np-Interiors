import React from 'react'
import { Segment } from 'semantic-ui-react'
import FeedForm from './FeedForm';
const Feedback = () => (
  <>
  <h3>Feedback</h3>
  <Segment.Group horizontal>
    <Segment>
      <h4 className='feedback'>Samantha</h4><br/>
      <p className='feedtext'>Wonderful
 This is my 4th Np interiors Project and team did not disappoint! Wonderful to work with and I absolutely love the final design!! Highly recommend Havenly to anyone!</p>
    </Segment>
    <Segment>
      <h4 className='feedback' >Nazriya</h4><br/>
      <p className='feedtext'>Such a great experience
stating Such a great experienceI loved Np interior’s work she really understood what we needed and created the most beautiful design</p></Segment>
    <Segment>
      <h4 className='feedback'>Vani Bhojan</h4><br/>
      <p className='feedtext'>Great process for interior design!
 Great process for interior design!I had a wonderful experience with Ingrid designing my bedroom in a new home we are purchasing. Highly recommend. I plan on using them for a screened in room off the back of the house as well.</p></Segment>
  </Segment.Group>
 <FeedForm/>
  
  </>
)

export default Feedback