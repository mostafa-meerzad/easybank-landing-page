
import React from 'react';
import Header from './components/Header';
import {Feature} from './components/Feature';
import Article from './components/Article';
import { Facebook, Instagram, Pinterest, Twitter, Youtube, Logo } from './assets/images/images';

import currency from "./assets/images/image-currency.jpg"

import confetti from "./assets/images/image-confetti.jpg"

import mockups from "./assets/images/image-mockups.png"

import plane from "./assets/images/image-plane.jpg"

import restaurant from "./assets/images/image-restaurant.jpg"

import online from "./assets/images/icon-online.svg"

import onBoarding from "./assets/images/icon-onboarding.svg"

import budgeting from "./assets/images/icon-budgeting.svg"

import api from "./assets/images/icon-api.svg"
const App = () => {
  return (
    <>
<Header/>
<main className="main">

<section className="intro">  
<h1 className='intro-title'> Next generation digital banking </h1>
<p className='intro-content text-content'>

 Take your financial life online. Your Easybank account will be a one-stop-shop 
 for spending, saving, budgeting, investing, and much more.
</p>
<button className='invite-btn'>Request Invite</button>
</section>
  
  <section className="features">

 {/* <header> */}
 <h2 className='features-title'>Why choose Easybank?</h2>
    <p className="features-content text-content">   
  We leverage Open Banking to turn your bank account into your financial hub. Control 
  your finances like never before.
    </p>
 {/* </header> */}

<div className="features-container">
  
<Feature title={" Online Banking"} content={"Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."} src={online}/>
    
    <Feature title={"Simple Budgeting"} content={" Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."} src={budgeting}/>

    <Feature title={"Fast Onboarding"} content={"We don’t do branches. Open your account in minutes online and start taking control of your finances right away."} src={onBoarding}/>

    <Feature title={" Open API"} content={"Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."} src={api}/>
</div>
  </section>

  <section className="articles">
   <header>
   <h2 className='articles-title'>Latest Articles</h2>
   </header>
<div className="articles-container">
  
<Article author={"By Claire Robinson"} title={"Receive money in any currency with no fees"} content={"The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"} src={currency}/>

<Article author={"By Wilson Hutton"} title={"Treat yourself without worrying about money"} content={"Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"} src={restaurant}/>

<Article author={
"By Wilson Hutton"}
title={"Take your Easybank card wherever you go"} content={"We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"} src={plane} />

<Article  author={"By Claire Robinson"} title={"Our invite-only Beta accounts are now live!"} content={"After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."} src={confetti}/>
</div>
  </section>

</main>
<footer className='footer'>

    <Logo/>
  <div className="social-media">
    <Facebook/>
    <Youtube/>
    <Twitter/>
    <Pinterest/>
    <Instagram/>


  </div>

  <menu className="contacts">
  
    <ul>
    <li className="contact-link"> About Us</li>
    <li className="contact-link">Contact</li>
    <li className="contact-link">  Blog</li>
    </ul>
    <ul>
    <li className="contact-link">  Careers</li>
    <li className="contact-link">  Support</li>
    <li className="contact-link">  Privacy Policy</li>
    </ul>
  </menu>

  
    <button className="invite-btn">Request Invite</button>
    <small className='copy-right'>© Easybank. All Rights Reserved</small>

  
</footer>
</>
  );
}

export default App;


