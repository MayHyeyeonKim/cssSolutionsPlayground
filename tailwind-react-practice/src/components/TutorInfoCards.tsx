import TutorDummy, { Tutor } from '../data/TutorDummy';

type TutorInfoCardsProps = {
    onCardClick: (tutor: Tutor) => void;
};

const TutorInfoCards = ({ onCardClick }: TutorInfoCardsProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {TutorDummy.map((tutor, index) => (
                <div
                    key={index}
                    className="rounded-3xl bg-gray-200 mx-4 text-left overflow-hidden cursor-pointer"
                    onClick={() => onCardClick(tutor)}
                >
                    <div className="flex flex-col sm: flex-row md: flex-row justify-center items-center w-full h-64">
                        <img
                            src={tutor.image}
                            alt={tutor.name}
                            className="w-full h-3/4 object-cover"
                        />
                        <div className="w-full h-1/4 space-y-2 flex flex-col justify-center items-center">
                            <div className="text-lg font-bold">
                                {tutor.name}
                            </div>
                            <div className="text-sm text-gray-500">
                                {tutor.introduction}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TutorInfoCards;
