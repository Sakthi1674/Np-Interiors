import React from 'react'
import { Label } from 'semantic-ui-react'

const Labelfile = () => (
  <div className='Sticker'>
    <Label as='a' color='blue' image>
      <img src='https://e1.pxfuel.com/desktop-wallpaper/982/789/desktop-wallpaper-samantha-ruth-looking-very-cute-in-saree-mobile-samantha-saree-thumbnail.jpg' />
      Samantha
      <Label.Detail>Friend</Label.Detail>
    </Label>
    <Label as='a' color='teal' image>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW38nGdtqkpFZni3rajyhYgpM3PnpDw3CMQdKidFMXIW-kDVc5O_2wf3YSnh5Y3HR-D-Q&usqp=CAU' />
      Jessy
      <Label.Detail>Friend</Label.Detail>
    </Label>
    <Label as='a' color='yellow' image>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8kR_a6_Hy80gzlX3B352gc5ZEYcadpRviEa5d10N33sOTqJCJps0lODCvYDeIP-36pPc&usqp=CAU' />
      Sam
      <Label.Detail>Co-worker</Label.Detail>
    </Label>
  </div>
)

export default Labelfile