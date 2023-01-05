import React from 'react';

function Navbar() {

    return (
        <div>
            <nav className="flex justify-between bg-blue-500 h-12">
                <div className="mx-4 my-2">LOGO</div>
                <div className="mx-4 my-2 cursor-pointer">Admin Console</div>
            </nav>

        </div>
    );
}

export default Navbar;