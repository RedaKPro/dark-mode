import React from 'react';

export default function Contacts() {
    return (
        <div className="flex flex-col justify-center items-center h-screen relative">
            <div className="mb-4 text-xl md:text-2xl">Contacts</div>
            <div className="space-y-4">
                <div className="flex items-center space-x-4">
                    <img width={100} src="/utils/img/char1.png" />
                    <strong>Andrew Alfred</strong>
                </div>
                <div className="flex items-center space-x-4">
                    <img width={100} src="https://files.oaiusercontent.com/file-Rm30NHvk9U2hRwjvTc4Q6C6N?se=2023-11-01T15%3A36%3A58Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D462e3dad-792f-479d-8ecd-6000d3386699.webp&sig=RSTpHLdwMFD1Hx5RA2n0/lpLq3/WH23XjmL/RTnojeQ%3D" />
                    <strong>Debra Houston</strong>
                </div>
                {/* ... */}
            </div>
        </div>
    );
}
