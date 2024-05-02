"use client";

import Image from "next/image";
import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";

const MettingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();

    const createMeeting = () => {
        
    }

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        img="/icons/add-meeting.svg"
        title="Новая встреча"
        description="Начать встречу сейчас"
        handleClick={() => setMeetingState("isInstantMeeting")}
        className="bg-orange-1"
      />
      <HomeCard
        img="/icons/schedule.svg"
        title="Запланировать"
        description="Назначить встречу"
        handleClick={() => setMeetingState("isScheduleMeeting")}
        className="bg-blue-1"
      />
      <HomeCard
        img="/icons/recordings.svg"
        title="Записи"
        description="Просмотреть записи"
        handleClick={() => setMeetingState("isJoiningMeeting")}
        className="bg-purple-1"
      />
      <HomeCard
        img="/icons/join-meeting.svg"
        title="Присоединиться"
        description="по приглашающей ссылке"
        handleClick={() => setMeetingState("isJoiningMeeting")}
        className="bg-yellow-1"
      />

      <MeetingModal 
        isOpen={meetingState === 'isInstantMeeting'}
        onClose={() => setMeetingState(undefined)}
        title="Начать встречу прямо сейчас"
        className-="text-center"
        buttonText="Начать встречу"
        handleClick={createMeeting}
      />
    </section>
  );
};

export default MettingTypeList;
