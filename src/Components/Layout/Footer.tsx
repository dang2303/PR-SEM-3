import "../css/footer2.css";
import React from "react";
import Icon from "../Other/icon";
import Anchor from "../Other/anchorFooter";
function Footer() {
  return (
    <footer className="footer ">
      <div className="container-fluid grid p-3">
        <div className="grid__row px-5">
          <div className="grid__column-2-4 ">
            <h3 className="footer__heading">About us</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="#" className="footer-item__link">
                  About
                </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item__link">
                  Job
                </a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-item__link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="grid__column-2-4">
            <h3 className="footer__heading">Resources</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="#" className="footer-item__link">
                  Open Source
                </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item__link">
                  Blog
                </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item__link">
                  The Art
                </a>
              </li>
            </ul>
          </div>
          <div className="grid__column-2-4">
            <h3 className="footer__heading">Partnerships</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="#" className="footer-item__link">
                  Artsy for Galleries
                </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item__link">
                  Artsy for Museums
                </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item__link">
                  Artsy for Auctions
                </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item__link">
                  Artsy for Fairs
                </a>
              </li>
            </ul>
          </div>
          <div className="grid__column-2-4">
            <h3 className="footer__heading">Support</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="" className="footer-item__link">
                  Talk to a Specialist
                </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item__link">
                  Visit our Help Center
                </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item__link">
                  Buying on Artsy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />

        <div className="footend grid__row px-5">
          <a href="" className="footer-item__link ">
            Visit our Help Center
          </a>
          <a href="" className="footer-item__link ">
            Visit our Help Center
          </a>
          <a href="" className="footer-item__link">
            Visit our Help Center
          </a>
          <a href="" className="footer-item__link">
            Visit our Help Center
          </a>
          <a href="#" className="footer-item__link">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="footer-item__link">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="footer-item__link">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" className="footer-item__link">
            <i className="bi bi-tiktok"></i>
          </a>
        </div>
      </div>
    </footer>
    // <div className="footer fixed-bottom text-center">
    //   <footer
    //     className="text-center text-lg-start text-black"
    //     style={{ backgroundColor: "#ffffff" }}
    //   >
    //     <div className="container p-4 pb-0">
    //       <section className="">
    //         <div className="row">
    //           <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
    //             <h5 className="text-uppercase">FOOTER CONTENT</h5>

    //             <p>
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //               Molestiae modi cum ipsam ad, illo possimus laborum ut
    //               reiciendis obcaecati. Ducimus, quas. Corrupti, pariatur eaque?
    //               Reiciendis assumenda iusto sapiente inventore animi?
    //             </p>
    //           </div>

    //           <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
    //             <h5 className="text-uppercase">Links</h5>

    //             <ul className="list-unstyled mb-0">
    //               <li>
    //                 <a href="#!" className="text-black">
    //                   Link 1
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#!" className="text-black">
    //                   Link 2
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#!" className="text-black">
    //                   Link 3
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#!" className="text-black">
    //                   Link 4
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>

    //           <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
    //             <h5 className="text-uppercase">Links</h5>

    //             <ul className="list-unstyled mb-0">
    //               <li>
    //                 <a href="#!" className="text-black">
    //                   Link 1
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#!" className="text-black">
    //                   Link 2
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#!" className="text-black">
    //                   Link 3
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#!" className="text-black">
    //                   Link 4
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>

    //           <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
    //             <h5 className="text-uppercase">Links</h5>

    //             <ul className="list-unstyled mb-0">
    //               <li>
    //                 <a href="#!" className="text-black">
    //                   Link 1
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#!" className="text-black">
    //                   Link 2
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#!" className="text-black">
    //                   Link 3
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#!" className="text-black">
    //                   Link 4
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>

    //           <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
    //             <h5 className="text-uppercase">Links</h5>

    //             <ul className="list-unstyled mb-0">
    //               <li>
    //                 <a href="#!" className="text-black">
    //                   Link 1
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#!" className="text-black">
    //                   Link 2
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#!" className="text-black">
    //                   Link 3
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#!" className="text-black">
    //                   Link 4
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </section>

    //       <hr className="mb-4" />
    //     </div>

    //     <div className="text-center p-1" style={{ backgroundColor: "#ffffff" }}>
    //       &#64; 2023 Artsy
    //       <Anchor name="Term of Use" />
    //       <Anchor name="Privacy Policy" />
    //       <Anchor name="Security" />
    //       <p>Do not sell my personal information</p>
    //       <section className="mb-4 text-center">
    //         <Icon name="facebook" />
    //         <Icon name="twitter" />
    //         <Icon name="google" />
    //         <Icon name="instagram" />
    //         <Icon name="tiktok" />
    //       </section>
    //     </div>
    //   </footer>
    // </div>
  );
}

export default Footer;
