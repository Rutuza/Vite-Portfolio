import React from 'react';
import sparkle from '../assets/svg/sparkle.svg';

import html5Logo from '../assets/svg/Html 5.svg';
import cssLogo from '../assets/svg/Css 3.svg';
import sassLogo from '../assets/svg/Sass.svg';
import uiux from '../assets/svg/Figma.svg';

function Skills() {
  return (
    <div id='skills'>
      <center className="text-4xl font-bold italic m-5">Skills</center>

      <div className='flex justify-between items-center'>
        <div className='w-4/5'>
            <h1 className="font-bold text-3xl">My creative skills and knowledge in technology</h1>
            <p className='mt-4 text-justify w-3/5'>As a Frontend developer and UI/UX Designer, I bring forth a dynamic skill set honed through [years of experience/relevant training]. Proficient in HTML5, CSS3, SASS, ReactJS, Database, I have consistently demonstrated an ability to [highlight key accomplishments or how these skills were applied]. My expertise spans [specific areas or industries], allowing me to [mention how your skills contribute to solving problems or creating value]. With a focus on [specific strengths or unique qualities], I strive to [mention your goals or how you aim to apply these skills in future endeavors]. Below I have mentioned some of my major skills.</p>
        </div>
        <div>
            <img src={sparkle} alt="" />
        </div>
      </div>

      <section className='flex gap-10 items-center'>
        <div className='html'>
            <img src={html5Logo} alt="" />
            <div className="tech-name">HTML</div>
        </div>
        <div className='html'>
            <img src={cssLogo} alt="" />
            <div className="tech-name">CSS</div>
        </div>
        <div>
            <img src={sassLogo} alt="" />
            <div>SASS</div>
        </div>
        <div>
            <img src={uiux} alt="" />
            <div>UI/UX Designing</div>
        </div>

      </section>
    </div>
  );
}

export default Skills;
