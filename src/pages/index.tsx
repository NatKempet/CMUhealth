// ...existing imports
import { ServiceCard } from "../components/ServiceCard";
import {
  Heart,
  Smile,
  Pill,
  Car,
  Shield,
  Globe,
  FileText,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import elephant from "../assets/cmuelephant.jpg";

const Index = () => {
  const services = [
    {
      title: "การรับบริการรักษาพยาบาลสำหรับนักศึกษา มช.",
      description:
        "บริการรักษาพยาบาลทั่วไป ตรวจสุขภาพ และการดูแลสุขภาพเบื้องต้นสำหรับนักศึกษา",
      icon: Heart,
      href: "/student-medical-services",
    },
    {
      title: "สิทธิด้านทันตกรรม",
      description:
        "บริการทันตกรรมครบวงจร ตรวจสุขภาพช่องปาก และการรักษาฟันสำหรับนักศึกษา",
      icon: Smile,
      href: "/dental-services",
    },
    {
      title: "สิทธิรับยา ฟรี",
      description:
        "รับยาฟรีตามใบสั่งแพทย์ ยาพื้นฐาน และยาสำหรับโรคเรื้อรังสำหรับนักศึกษา",
      icon: Pill,
      href: "/free-medication",
    },
    {
      title: "การใช้สิทธิรักษาพยาบาลกรณีอุบัติเหตุจากรถ",
      description: "การเบิกค่ารักษาพยาบาลกรณีอุบัติเหตุจากรถยนต์ รถจักรยานยนต์",
      icon: Car,
      href: "/accident-treatment",
    },
    {
      title: "บริการรักษา Covid-19",
      description:
        "ตรวจหา Covid-19 การรักษา การฉีดวัคซีน และคำแนะนำการดูแลตนเอง",
      icon: Shield,
      href: "/covid-treatment",
    },
    {
      title: "International Students",
      description:
        "Comprehensive healthcare services for international students with English support",
      icon: Globe,
      href: "/international-students",
    },
    {
      title: "สิทธิสวัสดิการด้านการรักษาพยาบาลสำหรับนักศึกษา",
      description:
        "ข้อมูลสวัสดิการและสิทธิประโยชน์ด้านการรักษาพยาบาลสำหรับนักศึกษามหาวิทยาลัยเชียงใหม่",
      icon: FileText,
      href: "/student-health-welfare",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-violet-600">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000" />
        <div className="absolute top-40 left-40 w-60 h-60 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000" />
      </div>

      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-700 to-violet-800 py-20 lg:py-32 overflow-hidden">
        {/* Background elephant image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${elephant})` }}
        />

        {/* Animated background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_50%)]" />
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-white rounded-full opacity-20 animate-ping" />
        <div className="absolute top-40 right-32 w-2 h-2 bg-purple-200 rounded-full opacity-30 animate-pulse" />
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-violet-200 rounded-full opacity-25 animate-bounce" />

        {/* Content */}
        <div className="relative container mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 rounded-full backdrop-blur-sm mb-6 animate-pulse">
              <Heart className="w-12 h-12 text-white" />
            </div>
          </div>

          <h1 className="text-6xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-violet-200 mb-6 drop-shadow-2xl">
            CMU Health
          </h1>

          <div className="max-w-4xl mx-auto">
            <p className="text-2xl lg:text-3xl text-purple-100 mb-6 font-light">
              ศูนย์บริการสุขภาพสำหรับนักศึกษามหาวิทยาลัยเชียงใหม่
            </p>
            <p className="text-lg text-purple-200 max-w-2xl mx-auto leading-relaxed">
              Comprehensive health services for Chiang Mai University students
              with quality care and professional support
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <button
              onClick={() => {
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center px-8 py-4 bg-white text-purple-700 font-semibold rounded-full hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              เริ่มต้นใช้บริการ
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 bg-gradient-to-b from-purple-700 via-purple-600 to-violet-700"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block">
              <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
                บริการสุขภาพของเรา
              </h2>
              <div className="h-1 bg-gradient-to-r from-purple-200 to-violet-200 rounded-full" />
            </div>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mt-8 leading-relaxed">
              เลือกบริการที่คุณต้องการเพื่อดูข้อมูลและรายละเอียดเพิ่มเติม
              <br />
              <span className="text-purple-200 text-lg">
                Choose the service you need for more information and details
              </span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  href={service.href}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-violet-700">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl font-bold mb-4">
              ทำไมต้องเลือก CMU Health?
            </h2>
            <p className="text-purple-100 text-lg">Why choose CMU Health?</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center text-white">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <Clock className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-4">บริการตลอด 24 ชั่วโมง</h3>
              <p className="text-purple-100">
                24/7 Emergency Services Available
              </p>
            </div>

            <div className="text-center text-white">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <Shield className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-4">มาตรฐานสากล</h3>
              <p className="text-purple-100">
                International Healthcare Standards
              </p>
            </div>

            <div className="text-center text-white">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <Heart className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-4">ดูแลด้วยใจ</h3>
              <p className="text-purple-100">Caring with Compassion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-purple-800 via-purple-700 to-violet-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                ติดต่อเรา | Contact Us
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-purple-200 to-violet-200 rounded-full mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Phone className="w-6 h-6 mr-3" />
                  ข้อมูลติดต่อทั่วไป
                </h3>
                <div className="space-y-4 text-purple-100">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-purple-200" />
                    <div>
                      <strong className="text-white">โทรศัพท์:</strong>{" "}
                      053-945-000
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-purple-200" />
                    <div>
                      <strong className="text-white">อีเมล:</strong>{" "}
                      health@cmu.ac.th
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 text-purple-200 mt-1" />
                    <div>
                      <strong className="text-white">ที่อยู่:</strong>{" "}
                      โรงพยาบาลมหาราชนครเชียงใหม่
                      <br />
                      คณะแพทยศาสตร์
                      <br />
                      มหาวิทยาลัยเชียงใหม่
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 shadow-xl text-white border border-white/30">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Shield className="w-6 h-6 mr-3" />
                  Emergency Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-purple-200" />
                    <div>
                      <strong>Emergency:</strong> 053-946-900
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 mr-3 text-purple-200" />
                    <div>
                      <strong>International:</strong> +66 53-946-050
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-purple-200" />
                    <div>
                      <strong>Email:</strong> emergency@cmu.ac.th
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-purple-200" />
                    <div>
                      <strong>24/7 Hotline:</strong> Available for all students
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 via-purple-800 to-violet-900 text-purple-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">CMU Health Services</h3>
              <p className="text-purple-200 text-lg">
                มหาวิทยาลัยเชียงใหม่ | Chiang Mai University
              </p>
            </div>

            <div className="border-t border-purple-700 pt-8">
              <p className="text-purple-300">
                © 2024 Chiang Mai University. All rights reserved.
              </p>
              <p className="text-purple-400 text-sm mt-2">
                Caring for your health, supporting your success
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
