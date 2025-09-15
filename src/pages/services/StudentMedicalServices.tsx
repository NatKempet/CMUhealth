import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ArrowLeft, Clock, MapPin, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const AccidentTreatment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 via-white to-violet-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-700 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="secondary" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              กลับหน้าหลัก
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-4">การใช้สิทธิรักษาพยาบาลกรณีอุบัติเหตุจากรถ</h1>
          <p className="text-xl text-white/90">
            ข้อมูลการใช้สิทธิประกันอุบัติเหตุและการรักษาพยาบาลทั่วไป
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* General Illness */}
          <Card className="p-6 shadow-lg bg-white">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-purple-700">
              <Clock className="w-6 h-6 mr-2" /> กรณีเจ็บป่วยทั่วไป
            </h2>
            <ul className="list-disc list-inside text-purple-800 space-y-2">
              <li>
                <strong>เวลาราชการ (จันทร์–ศุกร์):</strong> ศูนย์สุขภาพ มช. ชั้น 1 อาคารศูนย์สุขภาพ
                ⏰ 08.00–20.00 น., วันเสาร์/นักขัตฤกษ์ 08.00–16.00 น., หยุดวันอาทิตย์
              </li>
              <li>
                <strong>เวลาราชการ (จันทร์–ศุกร์ ยกเว้นพุธ):</strong> คลินิกผู้ป่วยนอกภาควิชาเวชศาสตร์ครอบครัว รพ.มหาราชฯ หน่วย CSC ชั้น 1 ⏰ 08.00–11.30 น., ยื่นบัตร 08.00–11.00 น.
              </li>
              <li>
                <strong>นอกเวลาราชการ (16.00–24.00 น.):</strong> ห้องตรวจนอกเวลา อาคารบุญสม มาร์ติน รพ.มหาราชฯ รับบริการผู้ป่วยนอก
              </li>
            </ul>
          </Card>

          {/* Emergency Cases */}
          <Card className="p-6 shadow-lg bg-white">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-red-600">
              <AlertTriangle className="w-6 h-6 mr-2" /> กรณีอุบัติเหตุหรือฉุกเฉิน
            </h2>
            <ul className="list-disc list-inside text-purple-800 space-y-2">
              <li>
                <strong>ทุกเวลา (24 ชม.):</strong> หน่วยตรวจฉุกเฉิน รพ.มหาราชฯ หรือโรงพยาบาลอื่นทั่วประเทศ
                หากรับบริการที่อื่น → เก็บใบเสร็จ + ใบรับรองแพทย์ → เบิกค่ารักษาไม่เกิน 10,000 บาท ที่ SD One Stop Service
              </li>
              <li>
                <strong>เข้ารับการรักษาโดยนอนโรงพยาบาล (เฉพาะ รพ.มหาราชนครเชียงใหม่):</strong> ใช้สิทธิบัตรทอง + สิทธิอนามัยนักศึกษา ✅ ค่าห้องพิเศษคู่ ✅ ค่าอาหารพิเศษ ❌ ไม่ครอบคลุมค่าเฝ้าไข้พิเศษ, ห้องพิเศษที่อื่น, การพักรักษาที่โรงพยาบาลอื่น
              </li>
              <li>
                นักศึกษาที่มีข้อจำกัดด้านสถานะหรือสิทธิ: แสดงบัตรประชาชน + บัตรนักศึกษา
                · ✅ ได้รับสิทธิเทียบเท่าบัตรทอง
                · ❌ ยกเว้นไม่สามารถใช้สิทธิโครงการเฉพาะโรค เช่น ผ่าตัดเปลี่ยนไต, ล้างไตทางช่องท้อง (CAPD), มะเร็งเม็ดเลือดขาว/ต่อมน้ำเหลือง, โรคเลือดออกง่าย, ยากลุ่ม ED
              </li>
              <li>
                ตรวจสอบสิทธิหรือขอรับรองค่ารักษา → งานสังคมสงเคราะห์ ชั้น 2 อาคารเฉลิมพระบารมี รพ.มหาราชฯ
              </li>
              <li>
                นักศึกษาถึงแก่ชีวิต “ด้วยสาเหตุอื่น (ไม่ใช่อุบัติเหตุ)” · 💰 ค่าปลงศพ 50,000 บาท ✅ ชำระโดยบริษัทประกันภัย (มีระยะรอคอย 6 เดือนสำหรับนักศึกษาปี 1)
              </li>
            </ul>
          </Card>

          {/* Required Documents */}
          <Card className="p-6 shadow-lg bg-white">
            <h2 className="text-2xl font-semibold mb-4 text-purple-700">เอกสารที่ต้องเตรียม</h2>
            <ul className="list-disc list-inside text-purple-800 space-y-2">
              <li>บัตรประชาชน หรือ บัตรนักศึกษา</li>
              <li>ใบรับแจ้งความจากตำรวจ (กรณีอุบัติเหตุ)</li>
              <li>ใบเสร็จค่ารักษาพยาบาล</li>
              <li>ใบรายงานการตรวจรักษา</li>
              <li>ใบสำคัญการชำระเงิน</li>
              <li>รูปถ่ายที่เกิดเหตุ (หากมี)</li>
            </ul>
          </Card>

          {/* Contact & Location */}
          <Card className="p-6 shadow-lg bg-white">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-purple-700">
              <MapPin className="w-6 h-6 mr-2" /> สถานที่และติดต่อ
            </h2>
            <ul className="list-disc list-inside text-purple-800 space-y-2">
              <li>สำนักกิจการนักศึกษา, อาคารกิจการนักศึกษา ชั้น 2 ห้อง 201</li>
              <li>กองคลัง มช., อาคารสำนักงานอธิการบดี ชั้น 1</li>
              <li>โทรฉุกเฉิน: 053-941-000</li>
              <li>Line: @cmu_sa</li>
              <li>Email: student-affair@cmu.ac.th</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AccidentTreatment;
