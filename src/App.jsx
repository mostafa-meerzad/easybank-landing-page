
import React from 'react';
import Header from './components/Header';
import Reason from './components/reason';
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
<h1> Next generation digital banking </h1>
<p className='content'>

 Take your financial life online. Your Easybank account will be a one-stop-shop 
 for spending, saving, budgeting, investing, and much more.
</p>
<button className='invite-btn mobile'>Request Invite</button>
</section>
  
  <section className="reasons">

    <h2>Why choose Easybank?</h2>
    <p className="content">   
  We leverage Open Banking to turn your bank account into your financial hub. Control 
  your finances like never before.
    </p>


    <Reason title={" Online Banking"} content={"Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."} src={online}/>
    
    <Reason title={"Simple Budgeting"} content={" Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."} src={budgeting}/>

    <Reason title={"Fast Onboarding"} content={"We don’t do branches. Open your account in minutes online and start taking control of your finances right away."} src={onBoarding}/>

    <Reason title={" Open API"} content={"Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."} src={api}/>
  </section>

  <section className="articles">
    <h2>Latest Articles</h2>

    <Article author={"By Claire Robinson"} title={"Receive money in any currency with no fees"} content={"The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"} src={currency}/>

    <Article author={"By Wilson Hutton"} title={"Treat yourself without worrying about money"} content={"Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"} src={restaurant}/>

    <Article author={
  "By Wilson Hutton"}
  title={"Take your Easybank card wherever you go"} content={"We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"} src={plane} />

  <Article  author={"By Claire Robinson"} title={"Our invite-only Beta accounts are now live!"} content={"After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."} src={confetti}/>
  </section>

</main>
<footer className='footer'>

  <div className="social-media">
    <Logo/>
    <Facebook/>
    <Youtube/>
    <Twitter/>
    <Pinterest/>
    <Instagram/>


  </div>

  <menu className="contacts">
  
    <li className="link"> About Us</li>
    <li className="link">Contact</li>
    <li className="link">  Blog</li>
    <li className="link">  Support</li>
    <li className="link">  Privacy Policy</li>
  </menu>

  <div>
    <button className="invite-btn">Request Invite</button>
    <span>/ © Easybank. All Rights Reserved</span>

  </div>
</footer>
</>
  );
}

export default App;


// Home
  // About
  // Contact
  // Blog
  // Careers

  // Request Invite



  // Next generation digital banking

  // Take your financial life online. Your Easybank account will be a one-stop-shop 
  // for spending, saving, budgeting, investing, and much more.

  // Request Invite



  // Why choose Easybank?

  // We leverage Open Banking to turn your bank account into your financial hub. Control 
  // your finances like never before.

  // Online Banking
  // Our modern web and mobile applications allow you to keep track of your finances 
  // wherever you are in the world.

  // Simple Budgeting
  // See exactly where your money goes each month. Receive notifications when you’re 
  // close to hitting your limits.

  // Fast Onboarding
  // We don’t do branches. Open your account in minutes online and start taking control 
  // of your finances right away.

  // Open API
  // Manage your savings, investments, pension, and much more from one account. Tracking 
  // your money has never been easier.

  

  // Latest Articles

  // By Claire Robinson
  // Receive money in any currency with no fees
  // The world is getting smaller and we’re becoming more mobile. So why should you be 
  // forced to only receive money in a single …

  // By Wilson Hutton
  // Treat yourself without worrying about money
  // Our simple budgeting feature allows you to separate out your spending and set 
  // realistic limits each month. That means you …

  // By Wilson Hutton
  // Take your Easybank card wherever you go
  // We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
  // while you’re abroad. We’ll even show you …

  // By Claire Robinson
  // Our invite-only Beta accounts are now live!
  // After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
  // It’s easy to request an invite through the site ...

  

  // About Us
  // Contact
  // Blog
  // Careers
  // Support
  // Privacy Policy

  // Request Invite

  // © Easybank. All Rights Reserved
  