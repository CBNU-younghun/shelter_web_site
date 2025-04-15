import star from '../assets/star.png'
import showList from '../assets/main --showList.png'
import search from '../assets/search.png'
import gps from '../assets/main --search detail.png'
import areaList from '../assets/area list.png'

export default function FeatureSection() {
  return (
    <section className="py-60 bg-white px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold" data-aos="fade-up">주요 기능</h2>
        <p className="text-gray-600 mt-2" data-aos="fade-up" data-aos-delay="100">우리 앱의 핵심 기능들을 소개합니다</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="text-center" data-aos="fade-right">
          <img src={showList} className="w-[180px] h-[360px] mx-auto mb-6 rounded-3xl shadow-xl object-contain border border-gray-200" alt="설정" />
          <h3 className="text-xl font-semibold mb-2">오프라인 안내</h3>
          <p className="text-gray-600">인터넷 없이도 대피소를 안내합니다.</p>
        </div>
        <div className="text-center" data-aos="fade-left" data-aos-delay="200">
          <img src={areaList} className="w-[180px] h-[360px] mx-auto mb-6 rounded-3xl shadow-xl object-contain border border-gray-200" alt="대피소 목록" />
          <h3 className="text-xl font-semibold mb-2">대피소 목록</h3>
          <p className="text-gray-600">행정안전부에서 제공하는 데이터를 기반으로 작성되었습니다.</p>
        </div>
        <div className="text-center" data-aos="fade-right" data-aos-delay="400">
          <img src={search} className="w-[180px] h-[360px] mx-auto mb-6 rounded-3xl shadow-xl object-contain border border-gray-200" alt="검색" />
          <h3 className="text-xl font-semibold mb-2">대피소 검색</h3>
          <p className="text-gray-600">지역명, 거리 등으로 대피소를 쉽게 검색할 수 있어요.</p>
        </div>
        <div className="text-center" data-aos="fade-left" data-aos-delay="600">
          <img src={gps} className="w-[180px] h-[360px] mx-auto mb-6 rounded-3xl shadow-xl object-contain border border-gray-200" alt="GPS" />
          <h3 className="text-xl font-semibold mb-2">GPS 기반 길안내</h3>
          <p className="text-gray-600">현재 위치를 기준으로 빠른 경로를 안내합니다.</p>
        </div>
        <div className="text-center" data-aos="fade-up" data-aos-delay="800">
          <img src={star} className="w-[180px] h-[360px] mx-auto mb-6 rounded-3xl shadow-xl object-cover border border-gray-200" alt="즐겨찾기" />
          <h3 className="text-xl font-semibold mb-2">즐겨찾기 기능</h3>
          <p className="text-gray-600">자주 찾는 대피소를 즐겨찾기로 등록해 바로 확인할 수 있어요.</p>
        </div>
      </div>
    </section>
  )
}
