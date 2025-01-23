import dummyUser from '../assets/dummyUser.png';
import dummyUser2 from '../assets/dummyUser2.png';

export type Tutor = {
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

export default TutorDummy;
