import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ArrowLeft, Clock, MapPin, Phone, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const CovidTreatment = () => {
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
            บริการรักษา Covid-19
          </h1>
          <p className="text-xl text-primary-foreground/90">
            บริการดูแลรักษาและป้องกัน Covid-19 สำหรับนักศึกษา มช.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Information */}
          <div className="space-y-6">
            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-2" />
                บริการที่ให้
              </h2>
              <div className="space-y-4 text-foreground">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold">การตรวจหา Covid-19</h3>
                  <p>Antigen Test Kit (ATK) และ RT-PCR ฟรีสำหรับนักศึกษา</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold">การรักษาผู้ป่วยอาการเล็กน้อย</h3>
                  <p>ยาบรรเทาอาการ การดูแลที่บ้าน คำแนะนำการดูแลตนเอง</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold">การฉีดวัคซีน</h3>
                  <p>วัคซีนป้องกัน Covid-19 ตามแผนของกระทรวงสาธารณสุข</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">เมื่อมีอาการสงสัย</h2>
              <div className="space-y-4 text-foreground">
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">อาการที่ต้องระวัง</h3>
                  <ul className="list-disc list-inside space-y-1 text-yellow-700">
                    <li>มีไข้ เหนื่อย เพลีย</li>
                    <li>ไอ เจ็บคอ มีน้ำมูก</li>
                    <li>ปวดศีรษะ ปวดกล้ามเนื้อ</li>
                    <li>เสียรสชาติ กลิ่น</li>
                  </ul>
                </div>
                <ol className="list-decimal list-inside space-y-2">
                  <li>แยกตัวจากคนอื่นทันที</li>
                  <li>โทรศัพท์ติดต่อคลินิกสุขภาพนักศึกษา</li>
                  <li>มาตรวจที่โรงพยาบาล มช.</li>
                  <li>รอผลการตรวจและปฏิบัติตามคำแนะนำ</li>
                </ol>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">การดูแลตนเองที่บ้าน</h2>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>แยกห้องพักจากคนอื่นในบ้าน</li>
                <li>ใส่หน้ากากอนามัยตลอดเวลา</li>
                <li>ดื่มน้ำและพักผ่อนให้เพียงพอ</li>
                <li>รับประทานยาตามคำแนะนำของแพทย์</li>
                <li>วัดไข้และติดตามอาการเป็นประจำ</li>
                <li>หากอาการแย่ลง ให้รีบมาโรงพยาบาล</li>
              </ul>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="space-y-6">
            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">การป้องกัน</h2>
              <div className="space-y-4 text-foreground">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-green-700">มาตรการป้องกัน</h3>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>ใส่หน้ากากอนามัยในที่สาธารณะ</li>
                    <li>ล้างมือบ่อยๆ ด้วยสบู่</li>
                    <li>เว้นระยะห่างทางสังคม</li>
                    <li>หลีกเลี่ยงการไปในที่แออัด</li>
                    <li>ฉีดวัคซีนครบตามกำหนด</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                <MapPin className="w-6 h-6 mr-2" />
                สถานที่ให้บริการ
              </h2>
              <div className="space-y-4 text-foreground">
                <div>
                  <h3 className="font-semibold">คลินิก Covid-19 มช.</h3>
                  <p>อาคารเฉลิมพระเกียรติ โรงพยาบาลมหาวิทยาลัยเชียงใหม่</p>
                </div>
                <div>
                  <h3 className="font-semibold">จุดตรวจ ATK</h3>
                  <p>หน้าอาคารกิจการนักศึกษา และหอพักนักศึกษา</p>
                </div>
                <div>
                  <h3 className="font-semibold">จุดฉีดวัคซีน</h3>
                  <p>โรงพยาบาลมหาวิทยาลัยเชียงใหม่ และสำนักกีฬา มช.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-2" />
                เวลาให้บริการ
              </h2>
              <div className="space-y-3 text-foreground">
                <div>
                  <h3 className="font-semibold">คลินิก Covid-19</h3>
                  <p>ทุกวัน 08:00 - 20:00 น.</p>
                </div>
                <div>
                  <h3 className="font-semibold">จุดตรวจ ATK</h3>
                  <p>วันจันทร์ - ศุกร์ 07:00 - 17:00 น.</p>
                </div>
                <div>
                  <h3 className="font-semibold">ฉีดวัคซีน</h3>
                  <p>ตามประกาศ (โดยปกติ วันจันทร์ - ศุกร์)</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                <Phone className="w-6 h-6 mr-2" />
                ติดต่อฉุกเฉิน
              </h2>
              <div className="space-y-2 text-foreground">
                <p><strong>คลินิก Covid-19:</strong> 053-946-700</p>
                <p><strong>ห้องฉุกเฉิน:</strong> 053-946-900</p>
                <p><strong>สายด่วน Covid:</strong> 1422</p>
                <p><strong>อีเมล:</strong> covid19@cmu.ac.th</p>
                <p><strong>Line:</strong> @cmucovid19</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CovidTreatment;