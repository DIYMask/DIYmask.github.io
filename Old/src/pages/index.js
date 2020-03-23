import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'

import Video from "../components/video"

import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

import stats from '../assets/images/stats.jpg'
import maskPic from '../assets/images/Mask_overview.jpg'
import maskPicOutlook from '../assets/images/mask_pic_outlook.jpg'
import GuidePic1 from '../assets/images/guide pic-01.jpg'
import GuidePic2 from '../assets/images/guide pic-02.jpg'
import GuidePic6 from '../assets/images/guide pic-06.jpg'
import GuidePic7 from '../assets/images/guide pic-07.jpg'

import { Picture } from 'react-responsive-picture';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBaby } from '@fortawesome/free-solid-svg-icons'
import { faChild } from '@fortawesome/free-solid-svg-icons'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { faMars } from '@fortawesome/free-solid-svg-icons'
import { faVenus } from '@fortawesome/free-solid-svg-icons'




class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="HK Mask" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>HK Mask</h2>
                </header>
                
                <Picture src={maskPicOutlook} alt=""/>

                <p><a href="https://hk.lifestyle.appledaily.com/lifestyle/20200221/ZGJCFKIPBFAGK4RHNPZRGMKL3M/">Apple Daily</a></p>
                
                <p>
                HK Mask 可更換濾芯從而重複使用的自製口罩，於2020年初新型冠狀病毒肆虐香港期間，由鄺士山博士（Dr. K. Kwong）主導研發。
                
                </p>

                <p>
                由於新型冠狀病毒於香港肆虐期間，市民對口罩的需求大增，而口罩供應非常短缺，香港便開始本土製造生產口罩的計劃。然而，因應製造口罩的原材料在全球均難採購，機器製作生產口罩面對極大的困難。因此，鄺士山博士於2020年2月10日開始研究DIY口罩計劃，並嘗試與FOCUS Filtration and Engineering Limited研究供應DIY口罩中層濾芯的可行性，及透過sew on studio裳樂匯坊協助車製口罩。此計劃的目的是製造以棉布為面料，中層可更換濾芯（即中層物料）的口罩。由於棉布能重複使用及消毒，故不必再依賴以無塵房製作口罩，或從全球搜購原材料來製作，因而能於短時間內製成口罩，從而大大提升口罩的供應量。
                
                </p>

                <p>
                HK Mask的設計參照外科口罩的原理，主體由內中外三層組成，內、外層棉布套需要每天清洗熨燙，中層是阻隔飛沫的一次性濾芯（濾布），更換中層濾布後馬上即可使用。
                
                </p>

                <Picture src={maskPic} alt="" width="800" />

                <ul className="actions">
                  <li>
                  <button>
                <a href='https://zh.m.wikipedia.org/zh-hk/Made_in_HK%E5%8F%AF%E6%9B%BF%E6%8F%9B%E5%8F%A3%E7%BD%A9' download>Learn More 了解更多</a>
                </button>
                  </li>
                </ul>
              </div>
   
                
        
            </div>
          </section>

          <section id="Filter" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Filter 有關濾芯</h2>
                </header>
                
                <Picture src={stats} alt=""  sizes="(max-width: 800px) 33.3vw, 100vw" />
            <p>
            <a href="https://www.facebook.com/photo/?fbid=10157887204312158&set=a.10157616487867158">Source: Dr K Kwong Facebook</a>
            </p>





              </div>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Pattern Download 紙樣下載</h2>
              Designed 5 Different Sizes from XXS to M. It fits from Baby to Men. <br/>
              備有5個不同大小的設計，由加加細到中碼，適合由嬰兒到男士。 
            </header>
            <ul className="features">
              <li>
             
              <FontAwesomeIcon icon={faBaby} size="3x" />  
                 
      <p></p>
                <h3>Baby XXS  <br/> 嬰兒 加加細碼</h3>

                <p>
                <button>
                <a href='https://github.com/DIYMask/DIYmask.github.io/raw/pattern/src/assets/images/pattern/Mask%20pattern_baby%20xxs%20(update).jpg' download><h2>Download jpg</h2> </a>
                </button>
 
                </p>
                <p>
                <button>
                  <a href='https://github.com/DIYMask/DIYmask.github.io/raw/pattern/src/assets/images/pattern/Mask%20pattern_baby%20xxs%20(update).pdf' download><h2>Download pdf</h2></a>
                  </button>
                </p>
              </li>

              <li>
       
                <FontAwesomeIcon icon={faChild} size="3x" />  
                 
                 <p></p>
                <h3>Kids XS <br/> 小童 加細碼</h3>
                <p>
                <button>
                <a href='https://github.com/DIYMask/DIYmask.github.io/raw/pattern/src/assets/images/pattern/Mask%20pattern_Kids%20XS%20(update).jpg' download><h2>Download jpg</h2> </a>
                </button>
 
                </p>
                <p>
                <button>
                  <a href='https://github.com/DIYMask/DIYmask.github.io/raw/pattern/src/assets/images/pattern/Mask%20pattern_Kids%20XS%20(update).pdf' download><h2>Download pdf</h2> </a>
                  </button>
                </p>
              </li>

              <li>
              <FontAwesomeIcon icon={faUserFriends} size="3x" />  
                 
                 <p></p>
                <h3>Teenagers S <br/> 青年 細碼</h3>
                <p>
                <button>
                <a href='https://github.com/DIYMask/DIYmask.github.io/raw/pattern/src/assets/images/pattern/Mask%20pattern_Teens%20S%20(update).jpg' download><h2>Download jpg</h2> </a>
                </button>
 
                </p>
                <p>
                <button>
                  <a href='https://github.com/DIYMask/DIYmask.github.io/raw/pattern/src/assets/images/pattern/Mask%20pattern_Teens%20S%20(update).pdf' download><h2>Download pdf</h2> </a>
                  </button>
                </p>
              </li>

              <li>
              <FontAwesomeIcon icon={faVenus} size="3x" />  
                 
                 <p></p>
                <h3>Ladies M <br/> 女士 中碼</h3>
                <p>
                <button>
                <a href='https://github.com/DIYMask/DIYmask.github.io/raw/pattern/src/assets/images/pattern/Mask%20pattern_Ladies%20M%20(update).jpg' download><h2>Download jpg</h2> </a>
                </button>
 
                </p>
                <p>
                <button>
                  <a href='https://github.com/DIYMask/DIYmask.github.io/raw/pattern/src/assets/images/pattern/Mask%20pattern_Ladies%20M%20(update).pdf' download><h2>Download pdf</h2> </a>
                  </button>
                </p>
              </li>

              <li>
              <FontAwesomeIcon icon={faMars} size="3x" />  
                 
                 <p></p>
                <h3>Men M <br/> 男士 大碼</h3>
                <p>
                <button>
                <a href='https://github.com/DIYMask/DIYmask.github.io/raw/pattern/src/assets/images/pattern/Mask%20pattern_Men%20Large%20(update).jpg' download><h2>Download jpg</h2> </a>
                </button>
 
                </p>
                <p>
                <button>
                  <a href='https://github.com/DIYMask/DIYmask.github.io/raw/pattern/src/assets/images/pattern/Mask%20pattern_Men%20Large%20(update).pdf' download><h2>Download pdf</h2> </a>
                  </button>
                </p>
              </li>

            </ul>
{/*             <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer> */}
          </section>

          <section id="tutorial" className="main">
          <header className="major">
              <h2>Tutorial製作教學</h2>

              <iframe  src="https://www.youtube.com/embed/ZusqX4Cfa3w" width="100%" height="450" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p>
            <a href="https://www.youtube.com/watch?v=ZusqX4Cfa3w">Source: Sewonstudio Youtube Channel</a>
            </p>
            </header>
            <p>       
              <ol>
         <li>Fold the fabric in half, place the paper pattern on the fabric, pin the paper pattern and cut it along the edge, and then remove the pin. (Remember: the shell fabric is cut according to the soild line; the lining is cut according to the thick dotted line); and mark the marks(notch hole and elastic placement) on the fabric. 
         </li>
         <li>Put the shell cloth face to face(right side to right side), stitch the centre front with the back stitch, and then open the seam. </li>
<li>Fold the top side of the shell cloth into the back 1 cm, put the wire in the right position, and use the return stitch to fix the folding position.</li>
<li>Fold the bottom side of the shell cloth into 1 cm, and use the stitches to fix the position of the hem.</li>
<li>Fold the bottom of the lining up and down into 1 cm, and use the back stitching step at the top and the stitching step at the bottom to fix the folding position.</li>
<li>Put elastics on both sides of the shell cloth. The position of the elastics must be placed on the side, and the position is fixed by about 1 cm with back stitching.</li>
<li>Place the top and bottom cloths facing each other,and fix the sides with the back stitches, then turn outwards.</li>
<li>Put the tapes in the side position between the two cloths, and sew the two cloths with the back stitch (beware to avoid sewing the cotton tape)</li>
<li>In the middle bottom of the mask stitch a small rectangle to stitch on 2 layers with needle steps, about an inch wide for fixing the filter. Sew on both sides of the wire （sew the shell fabric only) to secure the wire and not slide.</li>
<li>Clean and disinfect before use.</li>
       </ol></p>
          </section>




          <section id="second" className="main special">
            <header className="major">
              <h2>Manual 使用教學</h2>
              </header>
              <h2>How to wear HK Mask (如何佩戴HK Mask)</h2>

              <iframe  src="https://www.youtube.com/embed/bttYhG1laJk" width="100%" height="450" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p>
            <a href="https://www.youtube.com/watch?v=bttYhG1laJk">Source: Sewonstudio Youtube Channel</a>
              </p>

              
              <iframe  src="https://www.youtube.com/embed/-9UDIIwFRa8" width="100%" height="450" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              

            <p><a href="https://www.youtube.com/watch?v=-9UDIIwFRa8">Source: Dr K Kwong Youtube Channel</a></p>

        
              <p>              <ol>
                <li>Open the mask cover, place the filter from the top. The furry side faces inside.
                <br/>打開口罩套開口，從頂部放置中層濾芯。毛茸茸的絨面向內。
                </li>
                <Picture src={GuidePic1} alt="" height="200" width="200" />
                <li>Close the mask cover, ensure the filter sticks out of the upper cover and the bottom corners.
                <br/>關閉口罩套開口，確保中層濾芯從上方和下方的角位伸出。
                </li>
                
                <Picture src={GuidePic2} alt="" height="200" width="200" />
                <li>The side with wire faces up, place the ear loops around ears.
                <br/>帶有鐵線的一面向上，將耳繩掛在耳朵兩側
                </li>

                <li>Place the ties around your head and secure with a knot. First tie the collar, then tied back of head.
                <br/>將線打結於頭後位置。先綁後頸若領位，然後係後尾枕的位置。
                </li>
                <li>Mold or pinch the wire to the shape of your nose
                <br/>將鐵線沿著鼻樑按壓以緊貼鼻形</li>
              </ol></p>

              <h2>How To Clean and Sanitize 如何清潔和消毒口罩套</h2>
              <p>              
              <ol>
              <li>Wash with water and soap the fabric mask
              <br/>以肥皂水沖洗口罩套</li>
              <Picture src={GuidePic6} alt="" height="200" width="200" />
              <li>Air dry, then iron for sanitization the fabric mask.
              <br/>晾乾，然後用熨斗消毒口罩套外、內面。</li>
              <Picture src={GuidePic7} alt="" height="200" width="200" />
              <li>Since the filter is processed by special procedures, it cannot be reused after being heated and sterilized. It should not be treated with other chemicals.
              <br/>由於中層濾芯是經過特殊程序處理的，因此，即使對中層濾芯進行高溫加熱後無法再次使用。中層濾芯亦不應使用其他化學品處理。
              </li>
              </ol></p>

              <h2>Usage Limitation 使用時間</h2>
              <p>              
              <ol>
              <li>The use time is the same as the general disposable surgical masks.
              <br/>中層濾芯的使用時間與一般一次性外科手術口罩相同。
              </li>

              <li>Users are recommended to replace the filter once when use it once every four hours. And the mask cover should also be sanitized and cleaned as instructed above.
              <br/>建議用家每四小時更換中層濾芯，並如上述清潔和消毒口罩套外、內面
              </li>
              </ol></p>










   


            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-money"></span>
                <strong>HK$1-2</strong> Price of filter <br/>中層濾芯價格
              </li>
              <li className="style2">
                <span className="icon fa-bars"></span>
                <strong>86% <br/> -/+5% @0.3um</strong> Filtration Efficiency <br/> 過濾率
              </li>
              <li className="style3">
                <span className="icon fa-recycle"></span>
                <strong>Infinite <br/> 無限次</strong> Mask Cover Cycle <br/> 口罩套重用次數 &#40; 清洗過後 &#41;
              </li>
              <li className="style4">
                <span className="icon fa-cut"></span>
                <strong>DIYable <br/> 可DIY </strong> Mask Cover Design <br/> 口罩套設計
              </li>
              <li className="style5">
                <span className="icon fa-magic"></span>
                <strong>Origin <br/> 來自 </strong> Designed in HK <br/> 香港設計
              </li>
            </ul>


            
            </section>
             
            {/* <p className="content">


            
              Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl
              eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum
              ac arcu sit amet, fermentum pellentesque et purus. Integer maximus
              varius lorem, sed convallis diam accumsan sed. Etiam porttitor
              placerat sapien, sed eleifend a enim pulvinar faucibus semper quis
              ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer
              eget purus nec nulla mattis et accumsan ut magna libero. Morbi
              auctor iaculis porttitor. Sed ut magna ac risus et hendrerit
              scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras
              eu ornare dui curabitur lacinia.
            </p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
         

          <section id="cta" className="main special">
            <header className="major">
              <h2>Congue imperdiet</h2>
              <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button special">
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section> */}
        </div>
      </Layout>
    )
  }
}

export default Index
