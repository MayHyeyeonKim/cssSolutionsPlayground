export const TailwindPage = () => {
    const utilities = [
        { category: 'Layout', classes: [
            { class: 'flex', description: 'Makes a container a flexbox' },
            { class: 'grid', description: 'Defines a grid container' },
            { class: 'block', description: 'Displays an element as a block' },
            { class: 'inline-block', description: 'Displays an element as an inline block' }
        ] },
        { category: 'Spacing', classes: [
            { class: 'm-4', description: 'Applies margin to all sides' },
            { class: 'p-4', description: 'Applies padding to all sides' },
            { class: 'space-x-4', description: 'Adds horizontal spacing between elements' },
            { class: 'space-y-4', description: 'Adds vertical spacing between elements' }
        ] },
        { category: 'Typography', classes: [
            { class: 'text-center', description: 'Centers the text' },
            { class: 'font-bold', description: 'Makes the font bold' },
            { class: 'text-2xl', description: 'Sets text size to 2xl' }
        ] },
        { category: 'Backgrounds', classes: [
            { class: 'bg-blue-500', description: 'Sets background color to blue' },
            { class: 'bg-gradient-to-r', description: 'Creates a gradient from left to right' },
            { class: 'bg-cover', description: 'Scales background image to cover container' }
        ] },
        { category: 'Borders', classes: [
            { class: 'border', description: 'Adds a border to an element' },
            { class: 'border-gray-500', description: 'Sets border color to gray' },
            { class: 'rounded-lg', description: 'Adds large border-radius for rounded corners' }
        ] },
        { category: 'Flexbox', classes: [
            { class: 'justify-center', description: 'Aligns items in the center horizontally' },
            { class: 'items-center', description: 'Aligns items in the center vertically' },
            { class: 'flex-wrap', description: 'Allows flex items to wrap onto multiple lines' }
        ] },
        { category: 'Grid', classes: [
            { class: 'grid-cols-3', description: 'Defines a grid with 3 columns' },
            { class: 'gap-4', description: 'Adds gap between grid items' },
            { class: 'place-items-center', description: 'Centers grid items horizontally and vertically' }
        ] },
        { category: 'Colors', classes: [
            { class: 'text-red-500', description: 'Sets text color to red' },
            { class: 'bg-green-300', description: 'Sets background color to light green' },
            { class: 'border-blue-400', description: 'Sets border color to blue' }
        ] }
    ];

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Tailwind Utility Classes</h1>
            <div>이것도 수정해야함!</div>
            <table className="table-auto w-full border-collapse border border-gray-400">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-400 px-4 py-2">Category</th>
                        <th className="border border-gray-400 px-4 py-2">Class</th>
                        <th className="border border-gray-400 px-4 py-2">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {utilities.map((utility, index) => (
                        utility.classes.map((item, idx) => (
                            <tr key={`${index}-${idx}`} className="hover:bg-gray-200">
                                <td className="border border-gray-400 px-4 py-2 font-medium">
                                    {idx === 0 ? utility.category : ''}
                                </td>
                                <td className="border border-gray-400 px-4 py-2">
                                    {item.class}
                                </td>
                                <td className="border border-gray-400 px-4 py-2">
                                    {item.description}
                                </td>
                            </tr>
                        ))
                    ))}
                </tbody>
            </table>
        </div>
    );
};
