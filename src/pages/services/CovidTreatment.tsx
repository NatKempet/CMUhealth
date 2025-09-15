import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ArrowLeft, Clock, Phone, Shield, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const CovidTreatment = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 py-16">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button
              variant="secondary"
              className="mb-6 bg-purple-100 text-purple-800 hover:bg-purple-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              กลับหน้าหลัก
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-white mb-4">
            บริการรักษา Covid-19
          </h1>
          <p className="text-xl text-purple-100/90">
            บริการดูแลรักษาและป้องกัน Covid-19 สำหรับนักศึกษา มช.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Info */}
          <div className="space-y-6">
            <Card className="p-6 shadow-card border-l-4 border-purple-600">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-2 text-purple-600" />
                บริการผ่านระบบออนไลน์
              </h2>
              <p className="mb-4 text-foreground">
                เข้ารับบริการรักษา Covid-19 ได้ง่าย ๆ ผ่านระบบออนไลน์ของมหาวิทยาลัยเชียงใหม่
              </p>
              <a
                href="https://covid.scmc.cmu.ac.th/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
              >
                เข้าสู่ระบบบริการ
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <div className="mt-6 space-y-3 bg-purple-50 p-4 rounded-lg border border-purple-200">
                <ul className="list-disc list-inside space-y-2 text-purple-800">
                  <li>
                    <span className="font-semibold">ไม่ต้องไปนั่งรอตรวจ</span> →
                    เจ้าหน้าที่จะโทรติดต่อตามขั้นตอน
                  </li>
                  <li>
                    <span className="font-semibold">รับยาที่จุดให้บริการ</span>{" "}
                    และสามารถดาวน์โหลดเอกสารยืนยันฟรี
                  </li>
                  <li>
                    ใช้เอกสารยืนยันเพื่อ{" "}
                    <span className="font-semibold">ลาเรียน</span> ได้
                  </li>
                </ul>
              </div>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="space-y-6">
            <Card className="p-6 shadow-card border-l-4 border-purple-600">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
                <Phone className="w-6 h-6 mr-2 text-purple-600" />
                ติดต่อสอบถาม
              </h2>
              <div className="space-y-2 text-foreground">
                <p>
                  <strong>คลินิก Covid-19:</strong>{" "}
                  <span className="text-purple-700">053-946-700</span>
                </p>
                <p>
                  <strong>ห้องฉุกเฉิน:</strong>{" "}
                  <span className="text-purple-700">053-946-900</span>
                </p>
                <p>
                  <strong>สายด่วน Covid:</strong>{" "}
                  <span className="text-purple-700">1422</span>
                </p>
                <p>
                  <strong>อีเมล:</strong>{" "}
                  <span className="text-purple-700">covid19@cmu.ac.th</span>
                </p>
                <p>
                  <strong>Line:</strong>{" "}
                  <span className="text-purple-700">@cmucovid19</span>
                </p>
              </div>
            </Card>

            <Card className="p-6 shadow-card border-l-4 border-purple-600">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-2 text-purple-600" />
                เวลาให้บริการ
              </h2>
              <p className="text-foreground">
                <strong>ทุกวัน:</strong> 08:00 - 20:00 น.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                *อาจมีการเปลี่ยนแปลงตามประกาศของมหาวิทยาลัย
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CovidTreatment;
