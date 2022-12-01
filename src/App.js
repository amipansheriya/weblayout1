import logo from './images/logo.svg';
import img11 from './images/asset 11.jpeg';
import './App.css';
import mycs from './homepage.module.css';
import video1 from './images/v1.mp4';
import video2 from './images/v2.mp4';
import video3 from './images/v3.mp4';
import video4 from './images/v4.mp4';
import video5 from './images/v5.mp4';
import video6 from './images/v6.mp4';
import bg from './images/asset 22.png';
import student from './images/asset 18.jpeg';
import different from './images/asset 35.png';
import pimg1 from './images/asset 23.png';
import pimg2 from './images/asset 24.png';
import pimg3 from './images/asset 25.png';
import pimg4 from './images/asset 26.png';
import pimg5 from './images/asset 27.png';
import pimg6 from './images/asset 28.png';



function App() {
  return (
    <div className={mycs.main}>

{/* ================================================================================================================
                                            HEADER
================================================================================================================ */}

      <div className={mycs.header}>
        <div className={mycs.headline}>
          <div className={mycs.mail}>
            <a className={mycs.m}>
              &#9993; info@cdmi.in
            </a>
            <a className={mycs.m}>
              &#10041; verify cirtificate
            </a>
          </div>
          <div className={mycs.contact}>
            <a>
              HAVE ANY QUESTION ? +91 90333 16003
            </a>
          </div>
          <div className={mycs.social}>
            <a href="#" className={mycs.s}>
              
            </a>
          </div>
        </div>

        <div className={mycs.nav}>
          <div className={mycs.logo}>
            <img src={logo} className={mycs.img_logo}></img>
          </div>
          <div className={mycs.menubar}>
            <ul className={mycs.mainmenu}>
              <li className={mycs.menu}><a href="#">home</a></li>
              <li className={mycs.menu}><a href="#">courses &#8744;</a></li>
              <li className={mycs.menu}><a href="#">collage courses</a></li>
              <li className={mycs.menu}><a href="#">activities &#8744;</a>
                <ul className={mycs.submenu}>
                  <li><a href="#">gallery</a></li>
                  <li><a href="#">events</a></li>
                </ul>
              </li>
              <li className={mycs.menu}><a href="#">blog</a></li>
              <li className={mycs.menu}><a href="#">know us &#8744;</a>
                <ul className={mycs.submenu}>
                  <li><a href="#">about us</a></li>
                  <li><a href="#">success stories</a></li>
                  <li><a href="#">placement partners</a></li>
                </ul>
              </li>
              <li className={mycs.menu}><a href="#">get in touch</a></li>
              <li className={mycs.menu}><a href="#">student zone &#8744;</a>
                <ul className={mycs.submenu}>
                  <li><a href="#">student login</a></li>
                  <li><a href="#">showcase</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

{/* ================================================================================================================
                                              SLIDER
================================================================================================================ */}

      <div className={mycs.slider}>

      </div>

{/* ================================================================================================================
                                              COURSES
================================================================================================================ */}
        <div className={mycs.courses}>
          <div className={mycs.subheader}>
            <p className={mycs.subtxt}>CREATIVE COURSE</p>
          </div>
          <div className={mycs.mainheader}>
            <h1 className={mycs.maintxt}>OFFERED COURSES</h1>
          </div>

          <div className={mycs.coursev}>
            <div className={mycs.v1}>
              <div className={mycs.vbox}>
                <video autoPlay loop={20} muted  src={require('./images/v1.mp4')}>
                  {/* <source src="./images/v1.mp4" type="video/mp4"></source> */}
                </video>
                <h4 className={mycs.vcaption}>Multimedia Courses</h4>
                <hr></hr>
                <div className={mycs.vboxend}>
                  <div className={mycs.star}>
                    &#9733;&#9733;&#9733;&#9733;&#9734;
                  </div>
                  <button className={mycs.vbtn}>know more..!</button>
                </div>
              </div>
            </div>
            <div className={mycs.v1}>
              <div className={mycs.vbox}>
                <video autoPlay loop={20} muted  src={require('./images/v2.mp4')}>
                  {/* <source src="./images/v1.mp4" type="video/mp4"></source> */}
                </video>
                <h4 className={mycs.vcaption}>UI/UX Grafics Design</h4>
                <hr></hr>
                <div className={mycs.vboxend}>
                  <div className={mycs.star}>
                    &#9733;&#9733;&#9733;&#9733;&#9734;
                  </div>
                  <button className={mycs.vbtn}>know more..!</button>
                </div>
              </div>
            </div>
            <div className={mycs.v1}>
              <div className={mycs.vbox}>
                <video autoPlay loop={20} muted  src={require('./images/v3.mp4')}>
                  {/* <source src="./images/v1.mp4" type="video/mp4"></source> */}
                </video>
                <h4 className={mycs.vcaption}>Programming IT</h4>
                <hr></hr>
                <div className={mycs.vboxend}>
                  <div className={mycs.star}>
                    &#9733;&#9733;&#9733;&#9733;&#9734;
                  </div>
                  <button className={mycs.vbtn}>know more..!</button>
                </div>
              </div>
            </div>
            <div className={mycs.v1}>
              <div className={mycs.vbox}>
                <video autoPlay loop={20} muted  src={require('./images/v4.mp4')}>
                  {/* <source src="./images/v1.mp4" type="video/mp4"></source> */}
                </video>
                <h4 className={mycs.vcaption}>Trendy Courses</h4>
                <hr></hr>
                <div className={mycs.vboxend}>
                  <div className={mycs.star}>
                    &#9733;&#9733;&#9733;&#9733;&#9734;
                  </div>
                  <button className={mycs.vbtn}>know more..!</button>
                </div>
              </div>
            </div>
            <div className={mycs.v1}>
              <div className={mycs.vbox}>
                <video autoPlay loop={20} muted  src={require('./images/v5.mp4')}>
                  {/* <source src="./images/v1.mp4" type="video/mp4"></source> */}
                </video>
                <h4 className={mycs.vcaption}>Civil Match Engineering</h4>
                <hr></hr>
                <div className={mycs.vboxend}>
                  <div className={mycs.star}>
                    &#9733;&#9733;&#9733;&#9733;&#9734;
                  </div>
                  <button className={mycs.vbtn}>know more..!</button>
                </div>
              </div>
            </div>
            <div className={mycs.v1}>
              <div className={mycs.vbox}>
                <video autoPlay loop={20} muted src={require('./images/v6.mp4')}>
                  {/* <source src="./images/v1.mp4" type="video/mp4"></source> */}
                </video>
                <h4 className={mycs.vcaption}>Business Development</h4>
                <hr></hr>
                <div className={mycs.vboxend}>
                  <div className={mycs.star}>
                    &#9733;&#9733;&#9733;&#9733;&#9734;
                  </div>
                  <button className={mycs.vbtn}>know more..!</button>
                </div>
              </div>
            </div>
          </div>
          <button className={mycs.allbtn}>
            view all courses &#8594;
          </button>
        </div>

{/* ================================================================================================================
                                              ABOUT
================================================================================================================ */}

      <div className={mycs.about}>
        <div className={mycs.abouttxt}>
          <div className={mycs.subheader}>
            <p className={mycs.subtxt}>CREATIVE COURSE</p>
            <h4 className={mycs.aboutcap}>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</h4>
            <p className={mycs.aboutpara}>
            Creative Design and Multimedia Institute(CDMI) is a reputed training institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing and  All types of IT Courses with 8 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.
            </p>
            <button className={mycs.allbtn}>
              view all courses &#8594;
            </button>
          </div>
        </div>
        <div className={mycs.aboutphoto}>
          <img src={require('./images/asset 11.jpeg')}></img>
          <p className={mycs.play}>&#9654;</p>
        </div>
      </div>

{/* ================================================================================================================
                                              REVIEW
================================================================================================================ */}

      <div className={mycs.review}>
        <div className='rev'>
          <div className={mycs.review1}>
            
          </div>
          <h1 className='counter'>
            8000+
          </h1>
        </div>
        <div className='rev'>
          <div className={mycs.review2}>
            
          </div>
          <h1 className='counter'>
            10+
          </h1>
        </div>
        <div className='rev'>
          <div className={mycs.review3}>
            
          </div>
          <h1 className='counter'>
            60+
          </h1>
        </div>
        <div className='rev'>
          <div className={mycs.review4}>
            
          </div>
          <h1 className='counter'>
            4000+
          </h1>
        </div>
          
      </div>

{/* ================================================================================================================
                                              HAPPY STUDENTS
================================================================================================================ */}

      <div className={mycs.students}>
        <div className={mycs.stdtxt}>
          <div className={mycs.subheader}>
            <p className={mycs.subtxt}>HAPPY STUDENTS</p>
          </div>
          <div className={mycs.mainheader}>
            <h1 className={mycs.maintxt}>ALUMNI SPEAK</h1>
          </div>
          <p className={mycs.aboutpara}>
          It was an amazing experience with Creative Design & Multimedia Institute(CDMI) for two years. I learned lots of new things that helped me expand my knowledge and enrich myself as a web Designer. Thanks to Creative Design & Multimedia Institute(CDMI). 
          </p>
          <div className={mycs.developer}>
            <div className={mycs.devimg}>
              <img src={require('./images/asset 18.jpeg')}></img>
            </div>
            <div className={mycs.devintro}>
              <p className={mycs.devname}>palak chauhan</p>
              <p className={mycs.devpost}><i>android developer</i> @ jk instict media</p>
            </div>
          </div>

        </div>
        <div className={mycs.stdpic}>
          <div className={mycs.shape}>
            <img src={require('./images/asset 22.png')}></img>
          </div>
        </div>
      </div>

{/* ================================================================================================================
                                              WHY CHOOSE CREATIVE
================================================================================================================ */}

      <div className={mycs.choose}>
          <div className={mycs.subheader}>
            <p className={mycs.subtxt}>READ OUR DIFFERENCE</p>
          </div>
          <div className={mycs.mainheader}>
            <h1 className={mycs.maintxt}>WHY CHOOSE CREATIVE</h1>
          </div>

          <div className={mycs.diff}>
            <div className={mycs.diffbox}>
              <div className={mycs.difficon1}></div>
              <h2 className={mycs.diffheader}>Industry Experts As Trainers</h2>
              <p className={mycs.diffpara}>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
            </div>
            <div className={mycs.diffbox}>
              <div className={mycs.difficon2}></div> 
              <h2 className={mycs.diffheader}>Latest Curriculum</h2>
              <p className={mycs.diffpara}>We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time.</p>
            </div>
            <div className={mycs.diffbox}>
              <div className={mycs.difficon3}></div>
              <h2 className={mycs.diffheader}>Latest Technology</h2>
              <p className={mycs.diffpara}>We strive to let you have a solid foundational knowledge of technologies shaping the IT World today.</p>
            </div>
            <div className={mycs.diffbox}>
              <div className={mycs.difficon4}></div>
              <h2 className={mycs.diffheader}>Interview Assistance</h2>
              <p className={mycs.diffpara}>At the end of each training,our training instructor will go through the possible technical questions you may be asked.</p>
            </div>
            <div className={mycs.diffbox}>
              <div className={mycs.difficon5}></div>
              <h2 className={mycs.diffheader}>Free Upgradation</h2>
              <p className={mycs.diffpara}>We will be provided free upgradation for any newer version of the course you have.</p>
            </div>
            <div className={mycs.diffbox}>
              <div className={mycs.difficon6}></div>
              <h2 className={mycs.diffheader}>Lifetime Support</h2>
              <p className={mycs.diffpara}>We will provide you lifetime support on all the courses you learned from us.</p>
            </div>
          </div>
      </div>

{/* ================================================================================================================
                                             STUDENT PLACEMENT
================================================================================================================ */}

      <div className={mycs.placement}>
        <div className={mycs.subheader}>
          <p className={mycs.subtxt}>STUDENT PLACEMENT</p>
        </div>
        <div className={mycs.mainheader}>
          <h1 className={mycs.maintxt} align="center">OUR RECRUITMENT PARTNERS</h1>
        </div>
        <div className={mycs.placeimg}>
          <img className={mycs.pimg} src={require('./images/asset 23.png')}></img>
          <img className={mycs.pimg} src={require('./images/asset 24.png')}></img>
          <img className={mycs.pimg} src={require('./images/asset 25.png')}></img>
          <img className={mycs.pimg} src={require('./images/asset 26.png')}></img>
          <img className={mycs.pimg} src={require('./images/asset 27.png')}></img>
          <img className={mycs.pimg} src={require('./images/asset 28.png')}></img>
        </div>
      </div>

    </div>
  );
}

export default App;
