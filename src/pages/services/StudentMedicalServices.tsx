import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ArrowLeft, Clock, MapPin, Phone, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const StudentMedicalServices = () => {
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
            การรับบริการรักษาพยาบาลสำหรับนักศึกษา มช.
          </h1>
          <p className="text-xl text-primary-foreground/90">
            ข้อมูลและแนวทางการใช้บริการรักษาพยาบาลสำหรับนักศึกษามหาวิทยาลัยเชียงใหม่
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Information */}
          <div className="space-y-6">
            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                <Heart className="w-6 h-6 mr-2" />
                สิทธิการรักษาพยาบาล
              </h2>
              <div className="space-y-4 text-foreground">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold">นักศึกษาระดับปริญญาตรี</h3>
                  <p>ได้รับสิทธิรักษาพยาบาลฟรี 100% สำหรับการรักษาพยาบาลทั่วไป</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold">นักศึกษาระดับบัณฑิตศึกษา</h3>
                  <p>ได้รับสิทธิรักษาพยาบาลตามระเบียบของมหาวิทยาลัย</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">ขั้นตอนการใช้บริการ</h2>
              <ol className="list-decimal list-inside space-y-3 text-foreground">
                <li>นำบัตรนักศึกษาและบัตรประชาชนมาแสดง</li>
                <li>ลงทะเบียนที่แผนกผู้ป่วยนอก</li>
                <li>รอเรียกพบแพทย์ตามคิว</li>
                <li>รับยาที่ห้องจ่ายยา (หากจำเป็น)</li>
              </ol>
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
                  <h3 className="font-semibold">โรงพยาบาลมหาวิทยาลัยเชียงใหม่</h3>
                  <p>110 ถนนอินทวโรรส ตำบลศรีภูมิ อำเภอเมือง จังหวัดเชียงใหม่ 50200</p>
                </div>
                <div>
                  <h3 className="font-semibold">คลินิกสุขภาพนักศึกษา</h3>
                  <p>อาคารกิจการนักศึกษา มหาวิทยาลัยเชียงใหม่</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-2" />
                เวลาให้บริการ
              </h2>
              <div className="space-y-2 text-foreground">
                <p><strong>วันจันทร์ - ศุกร์:</strong> 08:00 - 16:00 น.</p>
                <p><strong>วันเสาร์:</strong> 08:00 - 12:00 น.</p>
                <p><strong>วันอาทิตย์และวันหยุดนักขัตฤกษ์:</strong> ปิดทำการ</p>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                <Phone className="w-6 h-6 mr-2" />
                ติดต่อสอบถาม
              </h2>
              <div className="space-y-2 text-foreground">
                <p><strong>โทรศัพท์:</strong> 053-945-000</p>
                <p><strong>อีเมล:</strong> health@cmu.ac.th</p>
                <p><strong>Line:</strong> @cmuhealth</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentMedicalServices;