import React from 'react';

const SimilarProductCard = () => {
    return (
        <div className="group relative my-2">
            <div className="w-64 mx-auto"> {/* Static width container */}
                {/* Image wrapper */}
                <div className="card h-64 w-64 overflow-hidden rounded-2xl relative">
                    <img
                        className="w-full h-full object-cover object-top"
                        src="https://plus.unsplash.com/premium_vector-1722928290337-122e86bd185e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="similarproductcardimages"
                    />
                </div>

                {/* Details Section */}
                <div className="details w-64 pt-3 space-y-1 rounded-md">
                    <div className="name">
                        <h1 className="text-lg font-semibold">Niky</h1>
                        <p className="text-sm text-gray-600">Blue Shirt</p>
                    </div>
                    <div className="price flex items-center gap-3">
                        <span className="font-sans text-gray-800">₹400</span>
                        <span className="line-through text-gray-400">₹999</span>
                        <span className="text-primary-color font-semibold">60%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimilarProductCard;
