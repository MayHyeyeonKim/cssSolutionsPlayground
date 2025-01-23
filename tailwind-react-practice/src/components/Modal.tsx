import React from 'react';
import ProfileCard from './ProfileCard';
import { Tutor } from '../data/TutorDummy';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    tutor: Tutor | null;
};

const Modal = ({ isOpen, onClose, tutor }: ModalProps) => {
    if (!isOpen || !tutor) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-3xl w-[70%] h-[70%] relative">
                <button
                    className="absolute top-1 right-3 text-pink-500"
                    onClick={onClose}
                >
                    Close
                </button>
                <ProfileCard tutor={tutor} />
            </div>
        </div>
    );
};

export default Modal;
