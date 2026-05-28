import { useState } from "react";
import "./App.css";

function App() {
  const [showForm, setShowForm] = useState(false);

  const [meetingName, setMeetingName] = useState(
    "멋사 토이프로젝트 회의"
  );

  const [participantCount, setParticipantCount] = useState("6명");

  const isReady =
    meetingName.trim() !== "" &&
    participantCount.trim() !== "";

  return (
    <main className="phone" aria-label="MeetPick 모임 생성">
      {/* HERO SCREEN */}
      <section
        className={`screen hero-screen ${
          !showForm ? "active" : ""
        }`}
      >
        <img
          className="brand"
          src="/assets/logo.png"
          alt="MeetPick"
        />

        <div className="copy-column">
          <span className="chip">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="m12 3 1.6 4.7L18 9.3l-4.4 1.6L12 16l-1.6-5.1L6 9.3l4.4-1.6L12 3Z"
                stroke="currentColor"
                strokeLinejoin="round"
              />
              <path
                d="m18.8 14 .8 2.4 2.4.8-2.4.8-.8 2.5-.8-2.5-2.5-.8 2.5-.8.8-2.4Z"
                stroke="currentColor"
                strokeLinejoin="round"
              />
            </svg>
            AI POWERED
          </span>

          <h1>
            모임 시간,
            <br />
            이제 AI가 대신 PICK
          </h1>

          <p className="subtitle">
            날짜 조율은 AI에게 맡기고,
            모임에만 집중하세요.
          </p>
        </div>

        <div className="hero-card">
          <img
            src="/assets/home-image.png"
            alt=""
          />
        </div>

        <button
          className="primary-button"
          type="button"
          onClick={() => setShowForm(true)}
        >
          모임 만들기
        </button>
      </section>

      {/* FORM SCREEN */}
      <section
        className={`screen form-screen ${
          showForm ? "active" : ""
        }`}
      >
        <header className="topbar">
          <button
            className="back"
            type="button"
            aria-label="이전 화면"
            onClick={() => setShowForm(false)}
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="m15 5-7 7 7 7"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="title">모임 생성</div>

          <div className="dots">
            <i></i>
            <i></i>
            <i></i>
          </div>
        </header>

        <span className="chip">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="m12 3 1.6 4.7L18 9.3l-4.4 1.6L12 16l-1.6-5.1L6 9.3l4.4-1.6L12 3Z"
              stroke="currentColor"
              strokeLinejoin="round"
            />
            <path
              d="m18.8 14 .8 2.4 2.4.8-2.4.8-.8 2.5-.8-2.5-2.5-.8 2.5-.8.8-2.4Z"
              stroke="currentColor"
              strokeLinejoin="round"
            />
          </svg>
          STEP 1
        </span>

        <h1>어떤 모임인가요?</h1>

        <p className="subtitle">
          모임 이름과 참여 인원을 알려주세요.
        </p>

        <div className="field-list">
          <label className="field-card">
            <span className="field-label">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="m4 16 1.1 3.9L9 19l9.6-9.6a2.6 2.6 0 0 0-3.7-3.7L5.3 15.3Z"
                  stroke="currentColor"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.5 7.1 17 10.6"
                  stroke="currentColor"
                  strokeLinecap="round"
                />
              </svg>
              모임 이름
            </span>

            <input
              type="text"
              value={meetingName}
              onChange={(e) =>
                setMeetingName(e.target.value)
              }
              placeholder="모임 이름 입력"
            />
          </label>

          <label className="field-card">
            <span className="field-label">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M8.5 11.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
                  stroke="currentColor"
                />
                <path
                  d="M2.8 20a5.7 5.7 0 0 1 11.4 0"
                  stroke="currentColor"
                  strokeLinecap="round"
                />
                <path
                  d="M16.5 11a2.8 2.8 0 1 0 0-5.6"
                  stroke="currentColor"
                  strokeLinecap="round"
                />
                <path
                  d="M17.1 14.8A5 5 0 0 1 21.2 20"
                  stroke="currentColor"
                  strokeLinecap="round"
                />
              </svg>
              참여 인원
            </span>

            <input
              type="text"
              value={participantCount}
              onChange={(e) =>
                setParticipantCount(e.target.value)
              }
              placeholder="참여 인원 입력"
            />
          </label>
        </div>

        <div className="form-actions">
          <button
            className={`primary-button ${
              isReady ? "ready" : ""
            }`}
          >
            모임 페이지 생성
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;