const teamMembers = [
    {
      name: '김영훈',
      role: '화면 구조 및 UI/UX 디자인, 프론트엔드 개발',
      image: '/assets/member_younghun.png',
    },
    {
      name: '사네토우 유우나',
      role: 'UI/UX 디자인 및 컴포넌트, 프론트엔드 개발',
      image: '/assets/member_yuna.png',
    },
    {
      name: '심지명',
      role: '데이터 처리 및 백엔드 개발',
      image: '/assets/member_jimyung.png',
    },
    {
      name: '이승호',
      role: '데이터 활용 및 안내 기능 구현, 백엔드 개발',
      image: '/assets/member_seungho.png',
    },
  ]
  
  export default function TeamSection() {
    return (
      <section className="py-40 bg-gray-50 px-4" id="team">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold" data-aos="fade-up">팀 소개</h2>
          <p className="text-gray-600 mt-2" data-aos="fade-up" data-aos-delay="100">
            우리 앱을 함께 만든 팀원들을 소개합니다
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full shadow-lg mb-4 object-cover"
                />
              ) : (
                <div className="w-24 h-24 mx-auto rounded-full bg-gray-300 mb-4 flex items-center justify-center text-xl font-bold text-white shadow-lg">
                  {member.name.charAt(0)}
                </div>
              )}
              <h3 className="font-semibold text-xl">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
  
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="600">
          <a
            href="https://github.com/FaSBIL/OSSbasic-teamproject"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
          >
            팀 GitHub Repository 보기
          </a>
        </div>
      </section>
    )
  }
  
