import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ArrowLeft, Clock, MapPin, Phone, Smile } from "lucide-react";
import { Link } from "react-router-dom";

const DentalServices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 via-white to-violet-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-700 py-16">
        <div className="container mx-auto px-4 text-white">
          <Link to="/">
            <Button variant="secondary" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              กลับหน้าหลัก
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-4">สิทธิด้านทันตกรรม</h1>
          <p className="text-xl text-white/90">
            บริการทันตกรรมสำหรับนักศึกษามหาวิทยาลัยเชียงใหม่
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Information */}
          <div className="space-y-6">
            <Card className="p-6 shadow-card bg-white">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
                <Smile className="w-6 h-6 mr-2" />
                บริการทันตกรรมที่ได้รับสิทธิ
              </h2>
              <div className="space-y-4 text-foreground">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold">การตรวจและรักษาทั่วไป</h3>
                  <p>ตรวจสุขภาพช่องปาก ขูดหินปูน อุดฟัน</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold">การถอนฟัน</h3>
                  <p>ถอนฟันธรรมดา ถอนรากฟัน</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold">การรักษารากฟัน</h3>
                  <p>รักษารากฟันเบื้องต้น (ตามเงื่อนไข)</p>
                </div>
              </div>
              <div className="mt-6 bg-violet-50 border border-violet-200 p-4 rounded-lg">
                <p className="text-purple-800 font-medium">
                  ✅ บริการตามสิทธิบัตรทอง เช่น อุดฟัน ถอนฟัน ขูดหินปูน ค่าตรวจ ค่าเอ็กซเรย์  
                  บางกรณีนักศึกษาสามารถรับบริการได้โดยไม่มีค่าใช้จ่าย
                </p>
              </div>
            </Card>

            <Card className="p-6 shadow-card bg-white">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">เอกสารที่ต้องเตรียม</h2>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>บัตรนักศึกษาที่ใช้ได้</li>
                <li>บัตรประจำตัวประชาชน</li>
                <li>ใบส่งตัวจากแพทย์ (หากมี)</li>
                <li>ประวัติการรักษาก่อนหน้า (หากมี)</li>
              </ul>
            </Card>

            <Card className="p-6 shadow-card bg-white">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">ค่าใช้จ่าย</h2>
              <div className="space-y-3 text-foreground">
                <div className="bg-violet-50 p-4 rounded-lg border border-violet-200">
                  <p className="font-semibold text-purple-700">นักศึกษาระดับปริญญาตรี</p>
                  <p>ฟรี สำหรับการรักษาเบื้องต้น</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-semibold">นักศึกษาระดับบัณฑิตศึกษา</p>
                  <p>ลดค่าใช้จ่าย 50% จากราคาปกติ</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="space-y-6">
            {/* Service Locations and Times */}
            <Card className="p-6 shadow-card bg-white">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
                <MapPin className="w-6 h-6 mr-2" />
                การรับบริการทันตสุขภาพ
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm text-foreground">
                  <thead>
                    <tr className="bg-violet-100 text-purple-800">
                      <th className="border px-3 py-2 text-left">สถานที่</th>
                      <th className="border px-3 py-2 text-left">วัน-เวลา</th>
                      <th className="border px-3 py-2 text-left">หมายเหตุ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-3 py-2">คลินิกบริการเพื่อการเรียนการสอน <br /> รพ.ทันตกรรม คณะทันตแพทยศาสตร์</td>
                      <td className="border px-3 py-2">จันทร์–ศุกร์ ⏰ 08.30–16.30 น.</td>
                      <td className="border px-3 py-2">ใช้สิทธิบัตรทอง (หากสิทธิอยู่ที่ รพ.มหาราช)</td>
                    </tr>
                    <tr>
                      <td className="border px-3 py-2">คลินิกทันตกรรมศูนย์สุขภาพ มช.</td>
                      <td className="border px-3 py-2">จันทร์–เสาร์ ⏰ 08.30–20.30 น. <br /> อาทิตย์ ⏰ 08.30–16.30 น.</td>
                      <td className="border px-3 py-2">เปิดทุกวัน</td>
                    </tr>
                    <tr>
                      <td className="border px-3 py-2">คลินิกทันตกรรมพิเศษ <br /> คณะทันตแพทยศาสตร์</td>
                      <td className="border px-3 py-2">จันทร์–เสาร์ ⏰ 08.30–20.30 น. <br /> อาทิตย์ ⏰ 08.30–16.30 น.</td>
                      <td className="border px-3 py-2">ชำระเงินเอง</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-red-600 mt-3">
                ⚠️ หากสิทธิบัตรทองอยู่ที่ รพ.อื่น ต้องมี "หนังสือส่งตัว" จากต้นสังกัด มิฉะนั้นต้องชำระ 50% ของค่าบริการ
              </p>
              <p className="text-sm text-purple-700 mt-1">
                ✅ สิทธิประกันสังคม สามารถรับส่วนลด 50% เมื่อชำระค่าบริการครบ 900 บาทขึ้นไป
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                หมายเหตุ: ค่าบริการเป็นไปตามระดับการรักษา  
                - ระดับ 1–2: โดยนักศึกษาทันตกรรม ป.ตรี/ป.โท  
                - ระดับ 3: โดยอาจารย์ทันตแพทย์/ทันตแพทย์ (ขึ้นกับอาการ)
              </p>
            </Card>

            {/* Service Hours */}
            <Card className="p-6 shadow-card bg-white">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-2" />
                เวลาให้บริการ
              </h2>
              <div className="space-y-2 text-foreground">
                <p><strong>วันจันทร์ - ศุกร์:</strong> 08:30 - 16:00 น.</p>
                <p><strong>พักเที่ยง:</strong> 12:00 - 13:00 น.</p>
                <p><strong>วันเสาร์ - อาทิตย์:</strong> ปิดทำการ</p>
                <p className="text-sm text-muted-foreground mt-2">*แนะนำให้นัดหมายล่วงหน้า</p>
              </div>
            </Card>

            {/* Contact */}
            <Card className="p-6 shadow-card bg-white">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
                <Phone className="w-6 h-6 mr-2" />
                การนัดหมาย
              </h2>
              <div className="space-y-2 text-foreground">
                <p><strong>โทรศัพท์:</strong> 053-944-451-2</p>
                <p><strong>อีเมล:</strong> dental@cmu.ac.th</p>
                <p><strong>เวลานัดหมาย:</strong> 08:00 - 16:00 น.</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalServices;
