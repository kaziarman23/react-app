import React from "react";
import ReactDom from "react-dom/client";
import  "../src/style.css";

const img = "https://images.unsplash.com/photo-1712650827891-cf87e3b8aaec?q=80&w=1539&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const title = "Intersting Facts For Curious Minds";
const author = "Jordan Moore";

const BookList = () => {
    return (
        <section className="section">
            <Book/>
            <Book/>
        </section>
    );
};

const Book = () => {
    return (
        <article className="article">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>            
        </article>
    );
};


const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<BookList/>);
