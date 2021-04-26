
import React from 'react'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import about from './components'


const Home = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return ( 
    <ScrollContainer>
       <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <span style={{ fontSize: "3em" }}> It all started with an Idea 💡 </span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
          <span style={{ fontSize: "3em" }}> ✨ Joined Lighthouse Labs✨</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={FadeUp}>
          <span style={{ fontSize: "3em" }}> Now,I'm a Full Stack Web Dev 😄</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={3}>
        <Animator animation={batch(Fade(), Sticky(), MoveIn(0, -200))}>
          <span style={{ fontSize: "3em" }}> It all started with an Idea 💡 </span>
        </Animator>
      </ScrollPage> 
    </ScrollContainer>
  );
};

export default Home; 