import React from 'react';

export const Footer = () => {
    return (
        <footer className="bg-dark text-light py-3">
            <div className="container text-center">
                <p className="mb-0">
                    &copy; {new Date().getFullYear()} John Doe Railway Server
                </p>
            </div>
        </footer>
    );
};