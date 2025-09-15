import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ArrowLeft, Clock, MapPin, Phone, Smile } from "lucide-react";
import { Link } from "react-router-dom";

const DentalServices = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="secondary" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              กลับหน้าหลัก
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-primary-foreground mb-4">
            สิทธิด้านทันตกรรม
          </h1>
          <p className="text-xl text-primary-foreground/90">
            บริการทันตกรรมสำหรับนักศึกษามหาวิทยาลัยเชียงใหม่
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Information */}
          <div className="space-y-6">
            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                <Smile className="w-6 h-6 mr-2" />
                บริการทันตกรรมที่ได้รับสิทธิ
              </h2>
              <div className="space-y-4 text-foreground">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold">การตรวจและรักษาทั่วไป</h3>
                  <p>ตรวจสุขภาพช่องปาก ขูดหินปูน อุดฟัน</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold">การถอนฟัน</h3>
                  <p>ถอนฟันธรรมดา ถอนรากฟัน</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold">การรักษารากฟัน</h3>
                  <p>รักษารากฟันเบื้องต้น (ตามเงื่อนไข)</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">เอกสารที่ต้องเตรียม</h2>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>บัตรนักศึกษาที่ใช้ได้</li>
                <li>บัตรประจำตัวประชาชน</li>
                <li>ใบส่งตัวจากแพทย์ (หากมี)</li>
                <li>ประวัติการรักษาก่อนหน้า (หากมี)</li>
              </ul>
            </Card>

            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">ค่าใช้จ่าย</h2>
              <div className="space-y-3 text-foreground">
                <div className="bg-accent/20 p-4 rounded-lg">
                  <p className="font-semibold text-primary">นักศึกษาระดับปริญญาตรี</p>
                  <p>ฟรี สำหรับการรักษาเบื้องต้น</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-semibold">นักศึกษาระดับบัณฑิตศึกษา</p>
                  <p>ลดค่าใช้จ่าย 50% จากราคาปกติ</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                <MapPin className="w-6 h-6 mr-2" />
                สถานที่ให้บริการ
              </h2>
              <div className="space-y-4 text-foreground">
                <div>
                  <h3 className="font-semibold">คณะทันตแพทยศาสตร์ มช.</h3>
                  <p>239 ถนนห้วยแก้ว ตำบลสุเทพ อำเภอเมือง จังหวัดเชียงใหม่ 50200</p>
                </div>
                <div>
                  <h3 className="font-semibold">คลินิกทันตกรรม โรงพยาบาล มช.</h3>
                  <p>110 ถนนอินทวโรรส ตำบลศรีภูมิ อำเภอเมือง จังหวัดเชียงใหม่</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-2" />
                เวลาให้บริการ
              </h2>
              <div className="space-y-2 text-foreground">
                <p><strong>วันจันทร์ - ศุกร์:</strong> 08:30 - 16:00 น.</p>
                <p><strong>พักเที่ยง:</strong> 12:00 - 13:00 น.</p>
                <p><strong>วันเสาร์ - อาทิตย์:</strong> ปิดทำการ</p>
                <p className="text-sm text-muted-foreground mt-2">
                  *แนะนำให้นัดหมายล่วงหน้า
                </p>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
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