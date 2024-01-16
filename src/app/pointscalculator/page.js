'use client'
import React, { useState } from 'react';

const PointsCalculator = () => {
    const [profileUrl, setProfileUrl] = useState('');
    const [points, setPoints] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleCalculatePoints = async () => {
        setIsLoading(true);
        setError(null);

        // Dummy timeout to simulate an API call
        setTimeout(() => {
            setPoints(1234); // Replace with actual logic to calculate points
            setIsLoading(false);
        }, 2000);
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-lg font-bold mb-4">Points Calculator</h2>
                <input 
                    type="text" 
                    className="border p-2 rounded w-full mb-4"
                    placeholder="Enter your public profile URL"
                    value={profileUrl}
                    onChange={(e) => setProfileUrl(e.target.value)}
                />
                <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                    onClick={handleCalculatePoints}
                    disabled={isLoading}
                >
                    {isLoading ? 'Calculating...' : 'Calculate Points'}
                </button>
                {points !== null && <p className="mt-4">Your Points: {points}</p>}
                {error && <p className="text-red-500 mt-4">{error}</p>}
            </div>
        </div>
    );
};

export default PointsCalculator;
