import React from "react";
import ReactDom from "react-dom/client";
import  "../src/style.css";



const BookList = () => {
    return (
        <section className="section">
            <Book/>
            <Book/>
            <Book/>
        </section>
    );
};

const Book = () => {
    return (
        <article className="article">
            <Image/>
            <Title/>
            <Author/>
        </article>
    );
};

const Image = () =>(
    <img src="https://images.unsplash.com/photo-1712650827891-cf87e3b8aaec?q=80&w=1539&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="an-img"
    />
)

const Title = () => <h2>Intersting Facts For Curious Minds</h2>;
const Author = () => {
    return <h4>Jordan Moore</h4>
}

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<BookList/>);
