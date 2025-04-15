export default function HeroSection() {
    return (
<section className="min-h-[130vh] flex flex-col justify-center items-center bg-gradient-to-b from-white to-blue-50 text-center px-4">
<h1
          data-aos="fade-up"
          className="text-5xl font-bold leading-tight"
        >
          재난 대피소 안내 앱
        </h1>
        <p data-aos="fade-up" data-aos-delay="200" className="text-xl text-gray-600 mt-4 max-w-md">
          위급 상황 시, 가장 가까운 대피소까지 안전하게 안내해드립니다.
        </p>
        <a
          href="/download/app.zip"
          download
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
        >
          앱 다운로드
        </a>
        <img
          data-aos="zoom-in"
          data-aos-delay="600"
          src="/assets/app_main.png"
          alt="앱 스크린샷"
          className="w-[300px] mt-12 drop-shadow-xl"
        />
      </section>
    )
  }