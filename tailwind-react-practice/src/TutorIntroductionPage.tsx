import ProfileCard from './components/ProfileCard';
import TutorInfoCards from './components/TutorInfoCards';

const TutorIntroductionPage = () => {
    return (
        <div>
            <div className="text-2xl font-bild text-center pt-4">여기는 튜터 소개 페이지</div>
            <div className="mt-4">
                <TutorInfoCards />
                <ProfileCard />
            </div>
        </div>
    );
};

export default TutorIntroductionPage;
