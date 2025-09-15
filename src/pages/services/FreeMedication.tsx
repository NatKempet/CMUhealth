import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ArrowLeft, Clock, MapPin, Phone, Pill } from "lucide-react";
import { Link } from "react-router-dom";

const FreeMedication = () => {
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
            สิทธิรับยา ฟรี
          </h1>
          <p className="text-xl text-primary-foreground/90">
            ข้อมูลการรับยาฟรีสำหรับนักศึกษามหาวิทยาลัยเชียงใหม่
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Information */}
          <div className="space-y-6">
            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                <Pill className="w-6 h-6 mr-2" />
                ประเภทยาที่ได้รับฟรี
              </h2>
              <div className="space-y-4 text-foreground">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold">ยาพื้นฐาน</h3>
                  <p>ยาแก้ปวด ยาลดไข้ ยาแก้ท้องเสิย ยาแก้ไอ</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold">ยาต้านการอักเสบ</h3>
                  <p>ยาแก้อักเสบ ยาแก้แพ้ ยาทาแผล</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold">วิตามินและธาตุ</h3>
                  <p>วิตามินซี วิตามินบี รวม แคลเซียม เหล็ก</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold">ยาสำหรับโรคเรื้อรัง</h3>
                  <p>ตามคำสั่งแพทย์และอยู่ในบัญชียาหลัก</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">เงื่อนไขการรับยาฟรี</h2>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>ต้องเป็นนักศึกษาปัจจุบันของ มช.</li>
                <li>มีใบสั่งยาจากแพทย์ที่ได้รับอนุญาต</li>
                <li>ยาต้องอยู่ในบัญชียาหลักของโรงพยาบาล</li>
                <li>จำนวนยาตามความเหมาะสมทางการแพทย์</li>
                <li>ไม่เกิน 30 วัน ต่อครั้ง</li>
              </ul>
            </Card>

            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">ขั้นตอนการรับยา</h2>
              <ol className="list-decimal list-inside space-y-3 text-foreground">
                <li>รับใบสั่งยาจากแพทย์หลังการตรวจ</li>
                <li>นำใบสั่งยาและบัตรนักศึกษาไปที่ห้องจ่ายยา</li>
                <li>รอการเตรียมยาตามคิว</li>
                <li>รับคำแนะนำการใช้ยาจากเภสัชกร</li>
                <li>ลงชื่อรับยาในระบบ</li>
              </ol>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="space-y-6">
            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">ยาที่ไม่ครอบคลุม</h2>
              <div className="space-y-3 text-foreground">
                <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/20">
                  <h3 className="font-semibold text-destructive mb-2">ยาที่ต้องจ่ายเพิ่ม</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>ยาพิเศษนอกบัญชียาหลัก</li>
                    <li>ยาสำหรับความงาม</li>
                    <li>ยาเสริมอาหารเฉพาะ</li>
                    <li>ยาแพงจากต่างประเทศ</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                <MapPin className="w-6 h-6 mr-2" />
                สถานที่รับยา
              </h2>
              <div className="space-y-4 text-foreground">
                <div>
                  <h3 className="font-semibold">ห้องจ่ายยา โรงพยาบาล มช.</h3>
                  <p>ชั้น 1 อาคารผู้ป่วยนอก</p>
                </div>
                <div>
                  <h3 className="font-semibold">ห้องจ่ายยา คลินิกสุขภาพนักศึกษา</h3>
                  <p>อาคารกิจการนักศึกษา</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-2" />
                เวลารับยา
              </h2>
              <div className="space-y-2 text-foreground">
                <p><strong>วันจันทร์ - ศุกร์:</strong> 08:00 - 16:00 น.</p>
                <p><strong>วันเสาร์:</strong> 08:00 - 12:00 น.</p>
                <p><strong>พักเที่ยง:</strong> 12:00 - 13:00 น.</p>
                <p className="text-sm text-muted-foreground mt-2">
                  *ปิดวันอาทิตย์และวันหยุดนักขัตฤกษ์
                </p>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                <Phone className="w-6 h-6 mr-2" />
                ติดต่อสอบถาม
              </h2>
              <div className="space-y-2 text-foreground">
                <p><strong>ห้องจ่ายยา:</strong> 053-945-063</p>
                <p><strong>เภสัชกรรม:</strong> 053-945-064</p>
                <p><strong>อีเมล:</strong> pharmacy@cmu.ac.th</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeMedication;