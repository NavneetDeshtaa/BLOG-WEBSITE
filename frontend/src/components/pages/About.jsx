import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <p>
        Welcome to BLOG VERSE, a vibrant community where voices from all walks of life come together to share stories,
        ideas, and insights.
         Whether you're here to read, write, or just browse, we're delighted to have you as part of our community.
        </p>
       <p className="whatweoffer">  What We Offer</p>
          <p>Read:Dive into a diverse collection of blogs written by our community members.
      From personal stories and expert advice to creative writing and thought-provoking discussions,
      there's something for everyone.</p>

      <p>Write: Have a story to tell or an idea to share? Our user-friendly interface makes it easy for you 
        to write and publish your own blogs. Join our community of writers and let your voice be heard.</p>

      <p>Engage: Comment on posts, share your favorite articles, and connect with other readers and writers.
      At BLOG VERSE, we encourage active engagement and meaningful conversations.</p>
        <p className="joinblogverse">
        Join BlogVerse today and become part of a dynamic community where ideas flourish and connections are made.
        Explore the vast universe of blogging, and let your voice be heard!
        </p>
        <p>

        </p>
      </div>
    </article>
  );
};

export default About;