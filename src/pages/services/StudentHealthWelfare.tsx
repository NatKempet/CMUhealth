import React from "react";
import { FileText } from "lucide-react";

const StudentHealthWelfare = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 via-white to-violet-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-violet-600 to-purple-700 py-20 lg:py-32 text-center">
        <div className="absolute inset-0 opacity-10 bg-[url('/hero-pattern.svg')] bg-cover" />
        <div className="relative container mx-auto px-4">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
            สิทธิสวัสดิการด้านการรักษาพยาบาล
          </h1>
          <p className="text-xl lg:text-2xl text-violet-100 mb-4 max-w-3xl mx-auto">
            สำหรับนักศึกษามหาวิทยาลัยเชียงใหม่
          </p>
          <p className="text-lg text-violet-200 max-w-2xl mx-auto">
            ข้อมูลสวัสดิการและสิทธิประโยชน์ด้านการรักษาพยาบาลที่ครบถ้วน
          </p>
        </div>
      </section>

      {/* Welfare Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center mb-8">
            <FileText className="w-10 h-10 text-violet-600 mr-4" />
            <h2 className="text-3xl font-bold text-violet-700">
              สิทธิสวัสดิการด้านการรักษาพยาบาลสำหรับนักศึกษา มช.
            </h2>
          </div>

          <ul className="space-y-6 text-violet-800 text-lg list-disc list-inside">
            <li>
              <strong>บริการอนามัยนักศึกษา:</strong> วงเงินสนับสนุนค่ารักษาพยาบาล 20,000 บาท/ปีการศึกษา หลังใช้สิทธิหลักของตนเองแล้ว สำหรับค่าใช้จ่ายส่วนเกินจากสิทธิรัฐ เช่น ยานอกบัญชียาหลัก, อุปกรณ์การแพทย์พิเศษ ฯลฯ (เฉพาะนักศึกษาที่ชำระค่าธรรมเนียมการศึกษา รุ่นรหัส 61 เป็นต้นไป) ยกเว้นนักศึกษาต่างชาติ
            </li>
            <li>
              <strong>สิทธิประกันอุบัติเหตุนักศึกษา:</strong> วงเงิน 10,000 บาท/กรณี ตลอดปีการศึกษา โดยกรณีอุบัติเหตุจากรถ ให้ใช้สิทธิ พ.ร.บ. รถก่อน แล้วจึงใช้ประกันอุบัติเหตุนักศึกษาและสิทธิอื่นตามลำดับ
            </li>
            <li>
              <strong>สิทธิหลักประกันสุขภาพถ้วนหน้า (บัตรทอง):</strong> สำหรับนักศึกษาปริญญาตรีปี 1 ทุกคน ลงทะเบียนออนไลน์ในวันรายงานตัว และสามารถใช้สิทธิบัตรทองที่ รพ.มหาราช แม้ไม่ย้ายทะเบียนบ้าน (เริ่มใช้ได้ประมาณ 1 เดือนหลังลงทะเบียน)
            </li>
            <li>
              <strong>สิทธิบุตรข้าราชการ:</strong> สำหรับนักศึกษาที่เป็นบุตรข้าราชการและอายุไม่เกิน 20 ปี ใช้บัตรประชาชนเบิกตรงได้ (กรณีผู้ประสบภัยจากรถ ใช้สิทธิ พ.ร.บ. รถก่อน)
            </li>
            <li>
              <strong>สิทธิประกันสังคม:</strong> ใช้ร่วมกับบัตรทองไม่ได้ ต้องเลือกอย่างใดอย่างหนึ่ง หากต้องการใช้บัตรทอง + อนามัยนักศึกษา ต้องยกเลิกสิทธิประกันสังคมก่อน
            </li>
            <li>
              <strong>ย้ายสิทธิหลักประกันสุขภาพถ้วนหน้า (บัตรทอง) มาที่ รพ.มหาราช:</strong>{" "}
              <a href="https://isuandok.med.cmu.ac.th/hic/reg_form/index" className="text-violet-600 underline" target="_blank">
                ลงทะเบียนได้ที่นี่
              </a>
            </li>
            <li>
              <strong>มหาวิทยาลัยสนับสนุนค่ารักษาส่วนเกินจากสิทธิรัฐ:</strong> วงเงิน 20,000 บาท/ปีการศึกษา
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-violet-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-violet-700 mb-6">ติดต่อเรา | Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-violet-800">
              <h3 className="text-xl font-semibold text-violet-600">ข้อมูลติดต่อทั่วไป</h3>
              <p><strong>โทรศัพท์:</strong> 053-945-000</p>
              <p><strong>อีเมล:</strong> health@cmu.ac.th</p>
              <p><strong>ที่อยู่:</strong> โรงพยาบาลมหาวิทยาลัยเชียงใหม่</p>
              <p>110 ถนนอินทวโรรส ตำบลศรีภูมิ อำเภอเมือง จังหวัดเชียงใหม่ 50200</p>
            </div>
            <div className="space-y-4 text-violet-800">
              <h3 className="text-xl font-semibold text-violet-600">Emergency Contact</h3>
              <p><strong>Emergency:</strong> 053-946-900</p>
              <p><strong>International:</strong> +66 53-946-050</p>
              <p><strong>Email:</strong> emergency@cmu.ac.th</p>
              <p><strong>24/7 Hotline:</strong> Available for all students</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-violet-700 text-violet-50 py-8 text-center">
        <p className="text-lg font-semibold mb-2">CMU Health Services</p>
        <p className="opacity-90">มหาวิทยาลัยเชียงใหม่ | Chiang Mai University</p>
        <p className="text-sm opacity-75 mt-4">© 2024 Chiang Mai University. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default StudentHealthWelfare;
