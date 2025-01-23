import React, { useState } from 'react';

export const TailwindPage = () => {
    const [isFlexOpen, setIsFlexOpen] = useState(false);

    const handleToggle = () => {
        setIsFlexOpen(!isFlexOpen);
    };

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">
                Tailwind Utility Classes
            </h1>
            <div className="flex flex-row">
                {/* Flex Toggle Section */}
                <div className="p-1">
                    <button
                        onClick={handleToggle}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Toggle Flex Utilities
                    </button>

                    {isFlexOpen && (
                        <div className="mt-4 p-4 border rounded-lg bg-gray-100">
                            <h2 className="text-xl font-semibold mb-2">
                                Flex Utilities
                            </h2>
                            <ul className="list-disc list-inside space-y-1">
                                <li>
                                    <code className="text-blue-600">flex</code>:
                                    Apply flexbox display
                                </li>
                                <li>
                                    <code className="text-blue-600">
                                        flex-row
                                    </code>
                                    : Horizontal row direction
                                </li>
                                <li>
                                    <code className="text-blue-600">
                                        flex-col
                                    </code>
                                    : Vertical column direction
                                </li>
                                <li>
                                    <code className="text-blue-600">
                                        justify-start
                                    </code>
                                    : Align items to the start
                                </li>
                                <li>
                                    <code className="text-blue-600">
                                        justify-center
                                    </code>
                                    : Center items horizontally
                                </li>
                                <li>
                                    <code className="text-blue-600">
                                        justify-end
                                    </code>
                                    : Align items to the end
                                </li>
                                <li>
                                    <code className="text-blue-600">
                                        items-start
                                    </code>
                                    : Align items to the start vertically
                                </li>
                                <li>
                                    <code className="text-blue-600">
                                        items-center
                                    </code>
                                    : Center items vertically
                                </li>
                                <li>
                                    <code className="text-blue-600">
                                        items-end
                                    </code>
                                    : Align items to the end vertically
                                </li>
                                <li>
                                    <code className="text-blue-600">
                                        gap-x-4
                                    </code>
                                    : Add horizontal spacing between children
                                </li>
                                <li>
                                    <code className="text-blue-600">
                                        gap-y-4
                                    </code>
                                    : Add vertical spacing between children
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                {/* Flex Toggle Section */}
                {/* <div className="p-1">
                    <button
                        onClick={handleToggle}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Toggle Flex Utilities
                    </button>

                    {isFlexOpen && (
                        <div className="mt-4 p-4 border rounded-lg bg-gray-100">
                            <h2 className="text-xl font-semibold mb-2">
                                Flex Utilities
                            </h2>
                            <ul className="list-disc list-inside space-y-1">
                                <li>
                                    <code className="text-blue-600">flex</code>:
                                    Apply flexbox display
                                </li>
                                <li>
                                    <code className="text-blue-600">
                                        flex-row
                                    </code>
                                    : Horizontal row direction
                                </li>
                                <li>
                                    <code className="text-blue-600">
                                        flex-col
                                    </code>
                                    : Vertical column direction
                                </li>
                                <li>
                                    <code className="text-blue-600">
                                        justify-start
                                    </code>
                                    : Align items to the start
                                </li>
                                <li>
                                    <code className="text-blue-600">
                                        justify-center
                                    </code>
                                    : Center items horizontally
                                </li>
                                <li>
                                    <code className="text-blue-600">
                                        justify-end
                                    </code>
                                    : Align items to the end
                                </li>
                                <li>
                                    <code className="text-blue-600">
                                        items-start
                                    </code>
                                    : Align items to the start vertically
                                </li>
                                <li>
                                    <code className="text-blue-600">
                                        items-center
                                    </code>
                                    : Center items vertically
                                </li>
                                <li>
                                    <code className="text-blue-600">
                                        items-end
                                    </code>
                                    : Align items to the end vertically
                                </li>
                                <li>
                                    <code className="text-blue-600">
                                        gap-x-4
                                    </code>
                                    : Add horizontal spacing between children
                                </li>
                                <li>
                                    <code className="text-blue-600">
                                        gap-y-4
                                    </code>
                                    : Add vertical spacing between children
                                </li>
                            </ul>
                        </div>
                    )}
                </div> */}
            </div>
        </div>
    );
};
