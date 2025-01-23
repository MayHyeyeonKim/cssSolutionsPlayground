import React from 'react';

type ProfileCardProps = {
    tutor: Tutor;
};

const ProfileCard = ({ tutor }: ProfileCardProps) => {
    return (
        <div className="w-full h-full bg-gray-200 flex flex-col justify-center items-center rounded-3xl">
            ProfileCard
            <div>{tutor.name}</div>
        </div>
    );
};

export default ProfileCard;
