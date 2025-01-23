import { useState } from 'react';
import TutorInfoCards from './components/TutorInfoCards';
import Modal from './components/Modal';
import { Tutor } from './data/TutorDummy';

const TutorIntroductionPage = () => {
    const [selectedTutor, setSelectedTutor] = useState<Tutor | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => {
        setSelectedTutor(null);
        setIsModalOpen(false);
    };

    const handleCardClick = (tutor: Tutor) => {
        setSelectedTutor(tutor);
        setIsModalOpen(true);
    };

    return (
        <div>
            <div className="text-2xl font-bild text-center pt-4">
                여기는 튜터 소개 페이지
            </div>
            <div className="mt-4 ">
                <TutorInfoCards onCardClick={handleCardClick} />
                {/* <ProfileCard /> */}
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                tutor={selectedTutor}
            />
        </div>
    );
};

export default TutorIntroductionPage;
