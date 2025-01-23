import dummyUser from '../assets/dummyUser.png';
import dummyUser2 from '../assets/dummyUser2.png';

type Tutor = {
    name: string;
    introduction: string;
    image: string;
};

const TutorDummy: Tutor[] = [
    {
        name: '일상해',
        introduction: '안녕하세요 저는 일상해입니다.',
        image: dummyUser,
    },
    {
        name: '이상해',
        introduction: '안녕하세요 저는 이상해입니다.',
        image: dummyUser2,
    },
    {
        name: '삼상해',
        introduction: '안녕하세요 저는 삼상해입니다.',
        image: dummyUser2,
    },
    {
        name: '사상해',
        introduction: '안녕하세요 저는 사상해입니다.',
        image: dummyUser,
    },
];

const TutorInfoCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {TutorDummy.map((tutor, index) => (
                <div
                    key={index}
                    className="rounded-3xl bg-gray-200 mx-4 text-left overflow-hidden"
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
