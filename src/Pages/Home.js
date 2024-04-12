import React from 'react';
import Service from './Service';
import Boot from './Boot';
import { Grid, Image, Rail, Segment,Embed } from 'semantic-ui-react';
import ImageSlider from './ImageSlider';
function Home() {
  const videoStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1, // Set a lower zIndex than the card
  };
  return (
    <>
    <ImageSlider/>
     <Grid centered columns={3}>
    <Grid.Column>
      <Segment>
        <Image src='https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600' />

        <Rail position='left'>
          <Segment><span Style={"font-size:30px;bold:5px"}>What is INTERIOR DESIGN</span><br/><p Style={"font-size:17px"}>
It is the art, science, and business planning of a creative, technical, sustainable, and functional interior solution that corresponds to the architecture of a space, while incorporating process and strategy, a mandate for well-being, safety, and health.</p></Segment>
        </Rail>

        <Rail position='right'>
          <Segment><span Style={"font-size:30px;bold:5px"}> What exactly does an interior designer do?</span><br/><p Style={"font-size:17px"}>
         <br/>
Interior designers make indoor spaces functional, safe, and beautiful by determining space requirements and selecting essential and decorative items, such as colors, lighting, and materials. They must be able to draw, read, and edit blueprints.</p></Segment>
        </Rail>
      </Segment>
    </Grid.Column>
  </Grid>
  <br></br> <br></br> <br></br>
  <Embed
    autoplay={false}
    color='white'
    hd={false}
    id='hTIUvfvhMak'
    iframe={{
      allowFullScreen: true,
      style: {
        padding: 8,
        width:'100%',
        height:'100%',
      },
    }}
    placeholder='Interior Design'
    source='youtube'
  />
      {/* Content Overlay */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1 className="Hometittles">We are here to Make your view Assume</h1>
        <p className='Para'>
          Design principles—balance, harmony, rhythm, proportion, emphasis,
          contrast, and details—shape visually appealing compositions. Achieving
          balance ensures harmony, whether symmetrical or asymmetrical, while
          rhythm guides the viewer through deliberate patterns. Proportion and
          scale maintain visual equilibrium, emphasis directs attention through
          contrast, and intricate details add refinement. Together, these
          principles offer a framework for creating captivating visual narratives
          across various design disciplines.
        </p>
        <div>
          <h2 className='menu'>Menu</h2>
        </div>
        <hr />
        <Boot />
        <hr />
        <Service />
     </div>
  </>
  );
}

export default Home;
