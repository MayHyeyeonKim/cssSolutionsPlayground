import dummyUser from '../assets/dummyUser.png';

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
        image: dummyUser,
    },
    {
        name: '삼상해',
        introduction: '안녕하세요 저는 삼상해입니다.',
        image: dummyUser,
    },
    {
        name: '사상해',
        introduction: '안녕하세요 저는 사상해입니다.',
        image: dummyUser,
    },
];

const TutorInfoCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {TutorDummy.map((tutor, index) => (
                <div key={index} className='rounded-3xl bg-gray-200 p-4 mx-4 text-left overflow-hidden'>
                    <div className='flex items-center'>
                    <img src={tutor.image} alt={tutor.name} className="w-10 h-10 rounded-full object-cover" />
                    <div className='p-5 space-y-2'>
                        <div className='text-lg font-bold'>{tutor.name}</div>
                        <div className='text-sm text-gray-500'>{tutor.introduction}</div>
                    </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TutorInfoCards;
