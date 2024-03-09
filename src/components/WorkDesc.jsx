import React from 'react';

function WorkDesc() {
    let work_deslist = ['All', 'Projects', 'Designs', 'Quotes'];
    const work_deslist = this.props.;
  return (
    <>
        <div>
            <ul>
                work_deslist = {work_deslist.map((work_deslist)) => <li key={work_deslist}>{work_deslist}</li>}

                
            </ul>
        </div> 
    </>
  );
}

export default WorkDesc;
