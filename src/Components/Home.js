import './Home.css';
import icccwc23 from '../Images/ICCCWC23.svg'
import GoogleMapReact from 'google-map-react'
import {MdStadium} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaGraduationCap} from 'react-icons/fa';


// function Home(){

    // let navigate = useNavigate();

    // let [x, setX] = useState();

    // window.addEventListener("scroll", function(evt) {console.log(evt); });

    // const Timeline = ({ setObserver, callback }) => {
    //     const timeline = useRef(null);
      
    //     // It Will be fired when the element crossed the middle of the screen. 
    //     const someCallback = () => {
    //       callback();
    //     };
      
    //     useEffect(() => {
    //       if (timeline.current) {
    //         setObserver(timeline.current, someCallback);
    //       }
    //     }, []);
      
    //     return <div id="timeline100500" ref={timeline} className="timeline" />;
    //   };

//     return(
    //     <div className='home'>
    //         {/* <h1 className = "title fade-in">
    //             <strong className = "icc">ICC</strong>

    //             <br/>
    //             World Cup 2k23
    //         </h1>   
    //         <div className='matchees' onClick={()=>navigate('/match')}>
    //         <div className='matches fade-in'>
    //             <div className='match'>
    //                 <img className = "matchbgimg" src ="https://starzplay-img-prod-ssl.akamaized.net/474w/criclife/08102023INDIAVSAUSTRALIALIVEY2023M/08102023INDIAVSAUSTRALIALIVEY2023M-474x677-PST.jpg" width={"10px"} height={"10px"}></img>
    //             </div>
    //             <div className='title2'><strong>INDIA <br/>VS <br/>AUSTRAILA</strong></div>
    //             <div className = "details">
    //                 <div className='detailimg'>
    //                     <GoogleMapReact bootstrapURLKeys={{ key: "" }} defaultCenter={{lat: 13.0577,lng: 80.2743}} defaultZoom={11}>
    //                         <MdStadium lat={13.0577} lng={80.2743} size={"20px"}/>
    //                     </GoogleMapReact>
    //                 </div>
    //                 <div className='detailtext'><strong>Match 05 <br/>19th OCT <br/>Narendra Modi <br/>Stadium<br/> Gujarath </strong></div>

    //             </div>
    //         </div>
    //         <hr/>
    //         <div className='matches2 fade-in'>
    //         <div className='title22'><strong>INDIA <br/>VS <br/>AUSTRAILA</strong></div>

    //             <div className='match2'>
    //                 <img className = "matchbgimg2" src ="https://starzplay-img-prod-ssl.akamaized.net/474w/criclife/08102023INDIAVSAUSTRALIALIVEY2023M/08102023INDIAVSAUSTRALIALIVEY2023M-474x677-PST.jpg" width={"10px"} height={"10px"}></img>
    //             </div>

    //             <div className = "details2">
                    
    //                 <div><h1>Narendra Modi</h1>
    //                 <h3>OCT 13th</h3>
    //                 </div>

    //                 <div className='detailimg2'><GoogleMapReact
    //     bootstrapURLKeys={{ key: "" }}
    //     defaultCenter={{
    //   lat: 13.0577,
    //   lng: 80.2743
    // }}
    //     defaultZoom={11}
    //   ><MdStadium
    //       lat={13.0577}
    //       lng={80.2743}
    //      size={"20px"}/></GoogleMapReact></div>
    //             </div>
    //         </div>
    //     </div>
    //      */}
    //     </div>
//     );
// }

// export default Home;




function Home(){

  
  let navigate = useNavigate();

  let [x, setX] = useState();

  window.addEventListener("scroll", function(evt) {console.log(evt); });

  const Timeline = ({ setObserver, callback }) => {
      const timeline = useRef(null);
    
      // It Will be fired when the element crossed the middle of the screen. 
      const someCallback = () => {
        callback();
      };
    
      useEffect(() => {
        if (timeline.current) {
          setObserver(timeline.current, someCallback);
        }
      }, []);
    
      return <div id="timeline100500" ref={timeline} className="timeline" />;
    };


  return(
    <div style={{background:"#0c001d"}}>
    <img src = {icccwc23} className='bgimg'/>
    
    <div className='home' >
            <h1 className = "title fade-in">
                <strong className = "icc">ICC</strong>

                <br/>
                World Cup 2k23
            </h1>   
            <div className='row' onClick={()=>navigate('/match')}>
              <div className='col-12 col-lg-6 col-md-6 matches fade-in'>
                  <div className='ms-5 ps-5'>
                      <img className = "matchbgimg" src ="https://starzplay-img-prod-ssl.akamaized.net/474w/criclife/08102023INDIAVSAUSTRALIALIVEY2023M/08102023INDIAVSAUSTRALIALIVEY2023M-474x677-PST.jpg" width={"10px"} height={"10px"}></img>
                  </div>
                  <div className='h1 mx-auto text-white'><strong>INDIA <br/>VS <br/>AUSTRAILA</strong></div>
              </div>
              <div className='col-12 col-lg-6 col-md-6 matches fade-in'>
                  <div className='h1 mx-auto text-white'><strong>INDIA <br/>VS <br/>AUSTRAILA</strong></div>
                  <div className='me-5 pe-5'>
                      <img className = "matchbgimg" src ="https://starzplay-img-prod-ssl.akamaized.net/474w/criclife/08102023INDIAVSAUSTRALIALIVEY2023M/08102023INDIAVSAUSTRALIALIVEY2023M-474x677-PST.jpg" width={"10px"} height={"10px"}></img>
                  </div>
              </div>
              <hr/>
            </div>
        
        </div>
<div className='pt-5' style={{marginTop: "150px"}}>
    <VerticalTimeline lineColor='white'>
  <VerticalTimelineElement
    contentStyle={{background: "#0c001d"}}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="28-10-2023"
    dateClassName='text-white'
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<img src = "https://thumbs.dreamstime.com/b/icc-cricket-world-cup-logo-vector-illustration-icc-cricket-world-cup-logo-vector-illustration-274000772.jpg" width={"100%"} style={{border:"1px solid",borderRadius:"50%"}}/>}
  >
    <div className='row'>
      <div className='col-6'>
        <img className = 'w-md-100 w-100' width="100%" src ="https://starzplay-img-prod-ssl.akamaized.net/474w/criclife/08102023INDIAVSAUSTRALIALIVEY2023M/08102023INDIAVSAUSTRALIALIVEY2023M-474x677-PST.jpg"/>
      </div>
      <div className='col-6 text-white'>
        <h1>AUS VS IND</h1>
        <h2 className= "text-white">28 OCT'23</h2>
        <h2 className= "text-white">Chennai</h2>
      </div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    contentStyle={{background: "#0c001d"}}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="28-10-2023"
    dateClassName='text-white'
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<img src = "https://vectorseek.com/wp-content/uploads/2023/06/ICC-Cricket-World-Cup-Logo-2023-Vector-01.jpg" width={"100%"} style={{border:"1px solid",borderRadius:"50%"}}/>}
  >
    <div className='row'>
      <div className='col-6'>
        <img className = 'w-md-100 w-100' width="100%" src ="https://starzplay-img-prod-ssl.akamaized.net/474w/criclife/08102023INDIAVSAUSTRALIALIVEY2023M/08102023INDIAVSAUSTRALIALIVEY2023M-474x677-PST.jpg"/>
      </div>
      <div className='col-6 text-white'>
        <h1>AUS VS IND</h1>
        <h2 className= "text-white">28 OCT'23</h2>
        <h2 className= "text-white">Chennai</h2>
      </div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    contentStyle={{background: "#0c001d"}}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="28-10-2023"
    dateClassName='text-white'
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<img src = "https://vectorseek.com/wp-content/uploads/2023/06/ICC-Cricket-World-Cup-Logo-2023-Vector-01.jpg" width={"100%"} style={{border:"1px solid",borderRadius:"50%"}}/>}
  >
    <div className='row'>
      <div className='col-6'>
        <img className = 'w-md-100 w-100' width="100%" src ="https://starzplay-img-prod-ssl.akamaized.net/474w/criclife/08102023INDIAVSAUSTRALIALIVEY2023M/08102023INDIAVSAUSTRALIALIVEY2023M-474x677-PST.jpg"/>
      </div>
      <div className='col-6 text-white'>
        <h1>AUS VS IND</h1>
        <h2 className= "text-white">28 OCT'23</h2>
        <h2 className= "text-white">Chennai</h2>
      </div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    contentStyle={{background: "#0c001d"}}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="28-10-2023"
    dateClassName='text-white'
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<img src = "https://vectorseek.com/wp-content/uploads/2023/06/ICC-Cricket-World-Cup-Logo-2023-Vector-01.jpg" width={"100%"} style={{border:"1px solid",borderRadius:"50%"}}/>}
  >
    <div className='row'>
      <div className='col-6'>
        <img className = 'w-md-100 w-100' width="100%" src ="https://starzplay-img-prod-ssl.akamaized.net/474w/criclife/08102023INDIAVSAUSTRALIALIVEY2023M/08102023INDIAVSAUSTRALIALIVEY2023M-474x677-PST.jpg"/>
      </div>
      <div className='col-6 text-white'>
        <h1>AUS VS IND</h1>
        <h2 className= "text-white">28 OCT'23</h2>
        <h2 className= "text-white">Chennai</h2>
      </div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    contentStyle={{background: "#0c001d"}}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="28-10-2023"
    dateClassName='text-white'
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<img src = "https://vectorseek.com/wp-content/uploads/2023/06/ICC-Cricket-World-Cup-Logo-2023-Vector-01.jpg" width={"100%"} style={{border:"1px solid",borderRadius:"50%"}}/>}
  >
    <div className='row'>
      <div className='col-6'>
        <img className = 'w-md-100 w-100' width="100%" src ="https://starzplay-img-prod-ssl.akamaized.net/474w/criclife/08102023INDIAVSAUSTRALIALIVEY2023M/08102023INDIAVSAUSTRALIALIVEY2023M-474x677-PST.jpg"/>
      </div>
      <div className='col-6 text-white'>
        <h1>AUS VS IND</h1>
        <h2 className= "text-white">28 OCT'23</h2>
        <h2 className= "text-white">Chennai</h2>
      </div>
    </div>
  </VerticalTimelineElement>
  
  {/* <VerticalTimelineElement
  
    className="vertical-timeline-element--work"
    date="Chennai, 2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaGraduationCap />}
  >
    <div className='row'>
      <div className='col-6'>
        <img className = 'w-md-100 w-100' width="100%" src ="https://starzplay-img-prod-ssl.akamaized.net/474w/criclife/08102023INDIAVSAUSTRALIALIVEY2023M/08102023INDIAVSAUSTRALIALIVEY2023M-474x677-PST.jpg"/>
      </div>
      <div className='col-6 text-white'>
        <h1>AUS VS IND</h1>
        <h2 className= "text-white">28 OCT'23</h2>
        <h2 className= "text-white">Chennai</h2>
      </div>
    </div>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaGraduationCap />}
  >
    <div className='row'>
      <div className='col-6'>
        <img className = 'w-md-100 w-100' width="100%" src ="https://starzplay-img-prod-ssl.akamaized.net/474w/criclife/08102023INDIAVSAUSTRALIALIVEY2023M/08102023INDIAVSAUSTRALIALIVEY2023M-474x677-PST.jpg"/>
      </div>
      <div className='col-6 text-white'>
        <h1>AUS VS IND</h1>
        <h2 className= "text-white">28 OCT'23</h2>
        <h2 className= "text-white">Chennai</h2>
      </div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaGraduationCap />}
  >
    <div className='row'>
      <div className='col-6'>
        <img className = 'w-md-100 w-100' width="100%" src ="https://starzplay-img-prod-ssl.akamaized.net/474w/criclife/08102023INDIAVSAUSTRALIALIVEY2023M/08102023INDIAVSAUSTRALIALIVEY2023M-474x677-PST.jpg"/>
      </div>
      <div className='col-6 text-white'>
        <h1>AUS VS IND</h1>
        <h2 className= "text-white">28 OCT'23</h2>
        <h2 className= "text-white">Chennai</h2>
      </div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaGraduationCap />}
  >
    <div className='row'>
      <div className='col-6'>
        <img className = 'w-md-100 w-100' width="100%" src ="https://starzplay-img-prod-ssl.akamaized.net/474w/criclife/08102023INDIAVSAUSTRALIALIVEY2023M/08102023INDIAVSAUSTRALIALIVEY2023M-474x677-PST.jpg"/>
      </div>
      <div className='col-6 text-white'>
        <h1>AUS VS IND</h1>
        <h2 className= "text-white">28 OCT'23</h2>
        <h2 className= "text-white">Chennai</h2>
      </div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaGraduationCap />}
  >
    <div className='row'>
      <div className='col-6'>
        <img className = 'w-md-100 w-100' width="100%" src ="https://starzplay-img-prod-ssl.akamaized.net/474w/criclife/08102023INDIAVSAUSTRALIALIVEY2023M/08102023INDIAVSAUSTRALIALIVEY2023M-474x677-PST.jpg"/>
      </div>
      <div className='col-6 text-white'>
        <h1>AUS VS IND</h1>
        <h2 className= "text-white">28 OCT'23</h2>
        <h2 className= "text-white">Chennai</h2>
      </div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaGraduationCap />}
  >
    <div className='row'>
      <div className='col-6'>
        <img className = 'w-md-100 w-100' width="100%" src ="https://starzplay-img-prod-ssl.akamaized.net/474w/criclife/08102023INDIAVSAUSTRALIALIVEY2023M/08102023INDIAVSAUSTRALIALIVEY2023M-474x677-PST.jpg"/>
      </div>
      <div className='col-6 text-white'>
        <h1>AUS VS IND</h1>
        <h2 className= "text-white">28 OCT'23</h2>
        <h2 className= "text-white">Chennai</h2>
      </div>
    </div>
  </VerticalTimelineElement> */}
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    date='FINAL'
    dateClassName='text-white'

    icon={<img src = "https://th.bing.com/th/id/OIP.hHhcoSCpox0i8Wm74dnvWAHaHa?pid=ImgDet&rs=1" width={"100%"} style={{border:"1px solid",borderRadius:"50%"}}/>}
  />
    </VerticalTimeline>
    </div>
    </div>
  );
}

export default Home;