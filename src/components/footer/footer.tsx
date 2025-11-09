import React from "react";
import { contactInfo, socialLinks, companyInfo, creatorInfo } from "../../data/contactInfo"; // adjust the path if needed

const Footer: React.FC = () => {
    return (
        <footer className="footer-section">
            <div className="footer-widgets-wrapper footer-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <a href="index.html">
                                        <img src="src/assets/img/logo/white-logo.svg" alt="logo" />
                                    </a>
                                </div>
                                <div className="footer-content">
                                    <p>
                                        Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a lacinia
                                        curabitur lacinia mollis
                                    </p>
                                    <div className="social-icon d-flex align-items-center">
                                        {socialLinks.map((social, index) => (
                                            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                                                <i className={social.icon}></i>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="col-xl-2 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".5s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Quick Links</h3>
                                </div>
                                <ul className="list-area">
                                    {[
                                        { text: "About", url: "about.html" },
                                        { text: "Our Services", url: "service.html" },
                                        { text: "Our Blogs", url: "blog.html" },
                                        { text: "FAQ’S", url: "faq.html" },
                                        { text: "Contact Us", url: "contact.html" },
                                    ].map((link, idx) => (
                                        <li key={idx}>
                                            <a href={link.url}>
                                                <i className="fa-solid fa-chevron-right"></i> {link.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Recent Posts */}
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="single-footer-widget style-margin">
                                <div className="widget-head">
                                    <h3>Recent Posts</h3>
                                </div>
                                <div className="recent-post-area">
                                    {[
                                        { thumb: "src/assets/img/footer/pp1.jpg", date: "20 Feb, 2025", title: "2025 Batterman Award honors Brad Burkhart", url: "blog-details.html" },
                                        { thumb: "src/assets/img/footer/pp2.jpg", date: "15 Dec, 2025", title: "2025 Batterman Award honors Brad Burkhart", url: "blog-details.html" },
                                    ].map((post, idx) => (
                                        <div key={idx} className={`recent-post-items ${idx === 1 ? "mb-0" : ""}`}>
                                            <div className="thumb">
                                                <img src={post.thumb} alt="post" />
                                            </div>
                                            <div className="content">
                                                <ul className="post-date">
                                                    <li>
                                                        <i className="fa-solid fa-calendar-days me-2"></i>
                                                        {post.date}
                                                    </li>
                                                </ul>
                                                <h6>
                                                    <a href={post.url}>{post.title}</a>
                                                </h6>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".9s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Contact Us</h3>
                                </div>
                                <div className="footer-content">
                                    <ul className="contact-info">
                                        <li>
                                            <i className="fas fa-map-marker-alt"></i> {contactInfo.address}
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-phone-volume"></i>
                                            <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                                        </li>
                                        <li>
                                            <i className="fa-regular fa-envelope"></i>
                                            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-wrapper d-flex align-items-center justify-content-between">
                        <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                            © Copyright 2025 <span className="divider">|</span>{" "}
                            <a href={creatorInfo.website} target="_blank" rel="noopener noreferrer">
                                {creatorInfo.name}
                            </a>
                        </p>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
