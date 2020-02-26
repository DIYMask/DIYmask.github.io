import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>HK Mask</h2>
      <p>
        Disclaimer:
        <br />
        This website has no relationship with the HK Mask, Sew On Studio and Dr. K Kwong. It is solely made as an unofficial manual.
        All Copyright of the material listed is owned by the auther. <br />
        此網頁與HK Mask，裳樂匯坊及Dr. K Kwong 沒有關係，設立目的為非官方的說明書。本網頁所載有的文檔的版權均為該作者所擁有。
      </p>
{/*       <ul className="actions">
        <li>
          <Link to="/generic" className="button">
            Learn More
          </Link>
        </li>
      </ul> */}
    </section>
    <section>
{/*       <h2>Etiam feugiat</h2>
      <dl className="alt">
        <dt>Address</dt>
        <dd>1234 Somewhere Road &bull; Nashville, TN 00000 &bull; USA</dd>
        <dt>Phone</dt>
        <dd>(000) 000-0000 x 0000</dd>
        <dt>Email</dt>
        <dd>
          <a href="https://codebushi.com">information@untitled.tld</a>
        </dd>
      </dl> */}
      <ul className="icons">
      Dr K Kwong Twitter 
        <li>
          <a
            href="https://twitter.com/DrKKwongChem"
            className="icon fa-twitter alt"
          > 
            <span className="label">Twitter</span>
          </a>
          
        </li>
        <br/>
        HK Mask Facebook 
        <li>
          <a href="https://www.facebook.com/masksbyhongkongers/" className="icon fa-facebook alt">
            <span className="label">Facebook</span>
          </a>
        </li>
        <br/>
        Dr K Kwong Facebook 
        <li>
          <a href="https://www.facebook.com/DrKKwongChem/" className="icon fa-facebook alt">
            <span className="label">Facebook</span>
          </a>
        </li>
        <br/>
        Sew On Studio 裳樂匯坊 Facebook
        <li>
          <a href="https://www.facebook.com/standnewshk/" className="icon fa-facebook alt">
            <span className="label">Facebook</span>
          </a>
        </li>

{/*         <li>
          <a href="https://codebushi.com" className="icon fa-instagram alt">
            <span className="label">Instagram</span>
          </a>
        </li> */}
{/*         <li>
          <a
            href="https://github.com/codebushi/gatsby-starter-stellar"
            className="icon fa-github alt"
          >
            <span className="label">GitHub</span>
          </a>
        </li> */}
{/*         <li>
          <a href="https://codebushi.com" className="icon fa-dribbble alt">
            <span className="label">Dribbble</span>
          </a>
        </li> */}
      </ul>
    </section>
{/*     <p className="copyright">
      &copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.
    </p> */}
  </footer>
)

export default Footer
