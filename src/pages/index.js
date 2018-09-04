import React from 'react'
import Link from 'gatsby-link'
import Collapsible from 'react-collapsible';



export default () => (
  <div className="body">
    <div className="main-container">
      <h3>Harim Choi</h3>

      <Collapsible trigger="About" className="collapsible">
        <div className="collapsible__div">
          Hi, I&#39;m Harim (ha-Rim) Choi. You can also call me Harry. I&#39;m a web developer living in Brooklyn, and my primary interests are code, music, and digital design. In my spare time, I collect vinyl records like my life depends on it.
        </div>
      </Collapsible>

      <Collapsible trigger="Projects" className="collapsible">
        <div className="collapsible__div">
          <a href="https://thirtythreefourtyfive.herokuapp.com" target="_blank">33/45</a> | <a href="https://github.com/harim1206/3345/"  target="_blank"> github </a>
        </div>
        <div className="collapsible__div">
          <a href="https://www.youtube.com/watch?v=a_i91eIElwk" target="_blank">mu-z-art</a> | <a href="https://github.com/harim1206/mu-z-art"  target="_blank"> github </a>
        </div>
      </Collapsible>

      <Collapsible trigger="Vinyl Mixes" className="collapsible">
        <div className="collapsible__div">
          <a href="https://www.mixcloud.com/HARIM/outro-tempo-w-harry-c-june-23-2017/"  target="_blank">
              Outro Tempo #3 on Stewart Avenue Radio
          </a><br/>
          <a href="https://www.mixcloud.com/HARIM/harry-c-on-stewart-ave-radio-04-20-2017/"  target="_blank">
              Outro Tempo #2 on Stewart Avenue Radio
          </a><br/>
          <a href="https://www.mixcloud.com/HARIM/outro-tempo-w-harry-c-may-25-2017/"  target="_blank">
              Outro Tempo #1 on Stewart Avenue Radio
          </a><br/>
        </div>
      </Collapsible>

      <Collapsible trigger="Contact" className="collapsible">
        <div className="collapsible__div">
          <a href="https://www.linkedin.com/in/harimchoi" target="_blank">
            linkedin
          </a><br/>
          <a href="https://www.github.com/harim1206" target="_blank">
            github
          </a><br/>
          <a href="mailto:harim1206@gmail.com">harim1206@gmail.com</a>

        </div>
      </Collapsible>


    </div>

  </div>
);
