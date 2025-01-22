import React from 'react';
import ProfileCard from './components/ProfileCard';
import TutorInfoCard from './components/TutorInfoCard';

const TutorIntroductionPage = () => {
    return (
        <div>
            <h1>여기는 튜터 소개 페이지</h1>
            <div className="mt-4">
                <TutorInfoCard />
                <ProfileCard />
            </div>
        </div>
    );
};

export default TutorIntroductionPage;
