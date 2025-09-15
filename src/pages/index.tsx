import { ServiceCard } from "../components/ServiceCard";
import { Heart, Smile, Pill, Car, Shield, Globe } from "lucide-react";

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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 via-white to-violet-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-violet-600 to-purple-700 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/hero-pattern.svg')] bg-cover" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
            CMU Health
          </h1>
          <p className="text-xl lg:text-2xl text-violet-100 mb-8 max-w-3xl mx-auto">
            ศูนย์บริการสุขภาพสำหรับนักศึกษามหาวิทยาลัยเชียงใหม่
          </p>
          <p className="text-lg text-violet-200 max-w-2xl mx-auto">
            Comprehensive health services for Chiang Mai University students
            with quality care and professional support
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-violet-700 mb-4">
              บริการสุขภาพของเรา
            </h2>
            <p className="text-xl text-violet-500 max-w-2xl mx-auto">
              เลือกบริการที่คุณต้องการเพื่อดูข้อมูลและรายละเอียดเพิ่มเติม
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-violet-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-violet-700 mb-6">
              ติดต่อเรา | Contact Us
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-violet-600">
                  ข้อมูลติดต่อทั่วไป
                </h3>
                <div className="text-violet-800">
                  <p>
                    <strong>โทรศัพท์:</strong> 053-945-000
                  </p>
                  <p>
                    <strong>อีเมล:</strong> health@cmu.ac.th
                  </p>
                  <p>
                    <strong>ที่อยู่:</strong> โรงพยาบาลมหาวิทยาลัยเชียงใหม่
                  </p>
                  <p>
                    110 ถนนอินทวโรรส ตำบลศรีภูมิ อำเภอเมือง จังหวัดเชียงใหม่
                    50200
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-violet-600">
                  Emergency Contact
                </h3>
                <div className="text-violet-800">
                  <p>
                    <strong>Emergency:</strong> 053-946-900
                  </p>
                  <p>
                    <strong>International:</strong> +66 53-946-050
                  </p>
                  <p>
                    <strong>Email:</strong> emergency@cmu.ac.th
                  </p>
                  <p>
                    <strong>24/7 Hotline:</strong> Available for all students
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-violet-700 text-violet-50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">CMU Health Services</p>
          <p className="opacity-90">
            มหาวิทยาลัยเชียงใหม่ | Chiang Mai University
          </p>
          <p className="text-sm opacity-75 mt-4">
            © 2024 Chiang Mai University. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
