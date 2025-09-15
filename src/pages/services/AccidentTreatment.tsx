import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ArrowLeft, Clock, MapPin, Phone, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const AccidentTreatment = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="secondary" className="mb-6 ้">
              <ArrowLeft className="w-4 h-4 mr-2" />
              กลับหน้าหลัก
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-primary-foreground mb-4">
            การใช้สิทธิรักษาพยาบาลกรณีอุบัติเหตุจากรถ
          </h1>
          <p className="text-xl text-primary-foreground/90">
            ข้อมูลการใช้สิทธิประกันอุบัติเหตุและการรักษาพยาบาล
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Information */}
          <div className="space-y-6">
            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-2" />
                ขั้นตอนการใช้สิทธิกรณีอุบัติเหตุ
              </h2>
              <ol className="list-decimal list-inside space-y-3 text-foreground">
                <li>แจ้งเหตุการณ์ที่สถานีตำรวจทันที</li>
                <li>เก็บรักษาใบรับแจ้งความจากตำรวจ</li>
                <li>ไปรับการรักษาที่โรงพยาบาลโดยเร็ว</li>
                <li>แจ้งให้โรงพยาบาลทราบว่าเป็นอุบัติเหตุจากรถ</li>
                <li>เก็บใบเสร็จและเอกสารการรักษาทั้งหมด</li>
                <li>ยื่นเรื่องเบิกค่ารักษาภายใน 30 วัน</li>
              </ol>
            </Card>

            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">เอกสารที่ต้องเตรียม</h2>
              <div className="space-y-4 text-foreground">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold">เอกสารพื้นฐาน</h3>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>บัตรนักศึกษาและบัตรประชาชน</li>
                    <li>ใบรับแจ้งความจากตำรวจ</li>
                    <li>ใบเสร็จค่ารักษาพยาบาล</li>
                  </ul>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold">เอกสารเพิ่มเติม</h3>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>ใบรายงานการตรวจรักษา</li>
                    <li>ใบสำคัญการชำระเงิน</li>
                    <li>รูปถ่ายที่เกิดเหตุ (หากมี)</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">วงเงินค่ารักษา</h2>
              <div className="space-y-3 text-foreground">
                <div className="bg-accent/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-primary">ค่ารักษาพยาบาลต่อครั้ง</h3>
                  <p className="text-2xl font-bold">สูงสุด 100,000 บาท</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold">ค่ารักษาต่อปีการศึกษา</h3>
                  <p className="text-xl font-semibold">สูงสุด 200,000 บาท</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="space-y-6">
            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">การรักษาที่ครอบคลุม</h2>
              <div className="space-y-4 text-foreground">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-green-700">ได้รับความคุ้มครอง</h3>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>ค่าห้องและค่าอาหาร</li>
                    <li>ค่าตรวจวินิจฉัย</li>
                    <li>ค่าผ่าตัดและยาเสพติด</li>
                    <li>ค่าเวชภัณฑ์และอุปกรณ์</li>
                    <li>ค่าฟื้นฟูสมรรถภาพ</li>
                  </ul>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-red-700">ไม่ได้รับความคุ้มครอง</h3>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>อุบัติเหตุจากการดื่มแอลกอฮอล์</li>
                    <li>การทำร้ายตัวเองโดยเจตนา</li>
                    <li>การกระทำผิดกฎหมาย</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                <MapPin className="w-6 h-6 mr-2" />
                สถานที่ยื่นเรื่อง
              </h2>
              <div className="space-y-4 text-foreground">
                <div>
                  <h3 className="font-semibold">สำนักกิจการนักศึกษา</h3>
                  <p>อาคารกิจการนักศึกษา ชั้น 2 ห้อง 201</p>
                </div>
                <div>
                  <h3 className="font-semibold">กองคลัง มช.</h3>
                  <p>อาคารสำนักงานอธิการบดี ชั้น 1</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-2" />
                เวลาให้บริการ
              </h2>
              <div className="space-y-2 text-foreground">
                <p><strong>วันจันทร์ - ศุกร์:</strong> 08:30 - 16:30 น.</p>
                <p><strong>พักเที่ยง:</strong> 12:00 - 13:00 น.</p>
                <p><strong>วันเสาร์ - อาทิตย์:</strong> ปิดทำการ</p>
                <p className="text-sm text-muted-foreground mt-2">
                  *กรณีเร่งด่วนสามารถติดต่อได้ 24 ชั่วโมง
                </p>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                <Phone className="w-6 h-6 mr-2" />
                ติดต่อฉุกเฉิน
              </h2>
              <div className="space-y-2 text-foreground">
                <p><strong>หมายเลขฉุกเฉิน:</strong> 053-941-000</p>
                <p><strong>กิจการนักศึกษา:</strong> 053-943-021-2</p>
                <p><strong>อีเมล:</strong> student-affair@cmu.ac.th</p>
                <p><strong>Line:</strong> @cmu_sa</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccidentTreatment;