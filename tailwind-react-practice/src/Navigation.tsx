import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <nav className="bg-pink-200 p-4 text-white w-full">
            <div className="flex gap-4">
                <Link
                    to="/"
                    className="hover:underline px-2 py-1 rounded-lg bg-pink-600 hover:bg-pink-700"
                >
                    메인 페이지
                </Link>
                <Link
                    to="/tailwind-practice"
                    className="hover:underline px-2 py-1 rounded-lg bg-pink-600 hover:bg-pink-700"
                >
                    실습
                </Link>
                <Link
                    to="/tailwind-properties"
                    className="hover:underline px-2 py-1 rounded-lg bg-pink-600 hover:bg-pink-700"
                >
                    테일윈드사전
                </Link>
            </div>
        </nav>
    );
};
