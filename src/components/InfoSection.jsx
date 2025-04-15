export default function InfoSection() {
    return (
      <section className="py-60 bg-blue-50 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">우리는 왜 이 앱을 만들었나요?</h2>
          <p className="text-gray-700 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            재난 발생 시, 사용자들이 가장 가까운 대피소를 빠르고 정확하게 찾을 수 있도록 돕기 위해 이 앱을 개발했습니다.
            특히 인터넷 연결이 어려운 상황을 고려하여 오프라인 안내 기능을 포함하였고,
            알림 및 안내음성을 통해 사용자들의 대피소까지 안전하게 안내 합니다.
          </p>
        </div>
      </section>
    )
  }