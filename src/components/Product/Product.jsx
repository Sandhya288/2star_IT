import React from 'react';
import "./Product.css";

const Products = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '20px', paddingTop: '20px' }}>OUR PRODUCTS</h1>
            <div className="containerhr">
                <hr className="centered-hr" />
            </div>
            <div className="container2" id="products">
                
                <Product
                    imgSrc="https://2staritsolution.netlify.app/sd.png"
                    alt="Product 1"
                    title="STORAGE DEVICES"
                    description="HDD, SDD, USB"
                />
                <Product
                    imgSrc="https://2staritsolution.netlify.app/monitor.png"
                    alt="Product 2"
                    title="MONITORS & TV's"
                    description="All size of desktop and monitors"
                />
                <Product
                    imgSrc="https://2staritsolution.netlify.app/print.png"
                    alt="Product 3"
                    title="PRINTERS"
                    description="Inkjet Printers, Laser Printers, MFPs, Printers"
                />
                <Product
                    imgSrc="https://2staritsolution.netlify.app/cc.png"
                    alt="Product 4"
                    title="CAMERAS"
                    description="Security camera, CC TV, RC CAMERAs"
                />
                <Product
                    imgSrc="https://2staritsolution.netlify.app/doc.png"
                    alt="Product 5"
                    title="DOCKING STATIONS"
                    description="Laptop, USB, Thunderbolt, docking station"
                />
                <Product
                    imgSrc="https://2staritsolution.netlify.app/gc.png"
                    alt="Product 6"
                    title="GRAPHIC CARD"
                    description="NVIDIA, ZOTAC, GEFORCE, AFOX Graphic cards"
                />
                <Product
                    imgSrc="https://2staritsolution.netlify.app/hset.png"
                    alt="Product 7"
                    title="HEADSET & MICROPHONES"
                    description="NVIDIA, ZOTAC, GEFORCE, AFOX Graphic cards"
                />
                <Product
                    imgSrc="https://2staritsolution.netlify.app/km.png"
                    alt="Product 8"
                    title="KEYBOARD AND MOUSE"
                    description="NVIDIA, ZOTAC, GEFORCE, AFOX Graphic cards"
                />
                <Product
                    imgSrc="https://i.ebayimg.com/images/g/zEcAAOSwhtFhtBfF/s-l500.jpg"
                    alt="Product 9"
                    title="Fingerprint Identification Technology"
                    description="NVIDIA, ZOTAC, GEFORCE, AFOX Graphic cards"
                />
                {/* Add more Product components for additional items */}
            </div>
        </div>
    );
};

const Product = ({ imgSrc, alt, title, description }) => {
    return (
        <div className="product">
            <img src={imgSrc} alt={alt} />
            <h2>{title}</h2>
            <p>{description}</p>
            <a href="storagepro.html">
                <button>VIEW MORE</button>
            </a>
        </div>
    );
};

export default Products;
