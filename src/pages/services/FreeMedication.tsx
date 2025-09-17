import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ArrowLeft, Clock, MapPin, Phone, Pill } from "lucide-react";
import { Link } from "react-router-dom";

const FreeMedication = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 py-16">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button
              variant="secondary"
              className="mb-6 bg-white/20 text-white hover:bg-white/30"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              กลับหน้าหลัก
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-white mb-4">
            สิทธิรับยา ฟรี
          </h1>
          <p className="text-xl text-purple-100">
            ข้อมูลการรับยาฟรีสำหรับนักศึกษามหาวิทยาลัยเชียงใหม่
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Information */}
          <div className="space-y-6">
            <Card className="p-6 shadow-card border border-purple-200">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
                <Pill className="w-6 h-6 mr-2 text-purple-600" />
                เจ็บป่วยเล็กน้อย 16 อาการ
              </h2>
              <div className="space-y-4 text-foreground">
                <p>
                  นักศึกษาสามารถ{" "}
                  <span className="font-semibold text-purple-700">
                    รับยาฟรีที่ร้านยาพฤฒพลัง คณะเภสัชศาสตร์ มช.
                  </span>{" "}
                  พร้อมรับส่วนลดค่ายา หรือสินค้าบางรายการ{" "}
                  <strong className="text-purple-700">5%</strong>
                </p>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h3 className="font-semibold mb-2 text-purple-700">
                    อาการที่ครอบคลุม
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>ไข้, ไอ, เจ็บคอ</li>
                    <li>ปวดหัว, เวียนหัว</li>
                    <li>ปวดท้อง, ท้องเสีย, ท้องผูก</li>
                    <li>ปัสสาวะขัด, ปัสสาวะลำบาก, ปัสสาวะเจ็บ</li>
                    <li>ตกขาวผิดปกติ</li>
                    <li>บาดแผล, ผื่น คัน</li>
                    <li>ความผิดปกติทางตา, ความผิดปกติทางหู</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card border border-purple-200">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">
                เงื่อนไขการรับยา
              </h2>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>ต้องเป็นนักศึกษาปัจจุบันของ มช.</li>
                <li>นำบัตรนักศึกษาแสดงต่อเภสัชกร</li>
                <li>รับยาครอบคลุมเฉพาะอาการ 16 รายการที่กำหนด</li>
              </ul>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="space-y-6">
            <Card className="p-6 shadow-card border border-purple-200">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-purple-600" />
                สถานที่รับยา
              </h2>
              <div className="space-y-4 text-foreground">
                <div>
                  <h3 className="font-semibold">ร้านยาพฤฒพลัง</h3>
                  <p>คณะเภสัชศาสตร์ มหาวิทยาลัยเชียงใหม่</p>
                  <a
                    href="https://maps.app.goo.gl/XFW54SWAG2adL4cK8?g_st=ipc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <iframe
                      src="https://www.google.com/maps?q=Q273+536+%E0%B8%A8%E0%B8%B9%E0%B8%99%E0%B8%A2%E0%B9%8C%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B9%80%E0%B8%AA%E0%B8%A3%E0%B8%B4%E0%B8%A1%E0%B8%9E%E0%B8%A4%E0%B8%92%E0%B8%9E%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%AA%E0%B8%B9%E0%B8%87%E0%B8%AD%E0%B8%B2%E0%B8%A2%E0%B8%B8+%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88+Senior+Wellness+Center+%E0%B8%95%E0%B8%B3%E0%B8%9A%E0%B8%A5%E0%B8%8A%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%84%E0%B8%A5%E0%B8%B2%E0%B8%99+%E0%B8%AD%E0%B8%B3%E0%B9%80%E0%B8%A0%E0%B8%AD%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88+%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88+50100&ftid=0x30da31bef30729bb:0xec10fb44fb9b2ffa&entry=gps&lucs=,94284457,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94282134,94203019,47084304&g_ep=CAISEjI1LjM1LjAuNzk5MDg4MzU1MBgAIIgnKmMsOTQyODQ0NTcsOTQyMjQ4MjUsOTQyMjcyNDcsOTQyMjcyNDgsOTQyMzExODgsNDcwNzE3MDQsNDcwNjk1MDgsOTQyMTg2NDEsOTQyODIxMzQsOTQyMDMwMTksNDcwODQzMDRCAlRI&skid=40c2fa46-8136-424d-8f89-795299b56672&g_st=ipc"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                    <Button className="mt-3 bg-purple-600 hover:bg-purple-700 text-white">
                      เปิด Google Maps
                    </Button>
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card border border-purple-200">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-2 text-purple-600" />
                เวลาทำการ
              </h2>
              <div className="space-y-2 text-foreground">
                <p>
                  <strong>วันจันทร์ - ศุกร์:</strong> 08:00 - 16:00 น.
                </p>
                <p>
                  <strong>วันเสาร์:</strong> 08:00 - 12:00 น.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  *ปิดวันอาทิตย์และวันหยุดนักขัตฤกษ์
                </p>
              </div>
            </Card>

            <Card className="p-6 shadow-card border border-purple-200">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
                <Phone className="w-6 h-6 mr-2 text-purple-600" />
                ติดต่อสอบถาม
              </h2>
              <div className="space-y-2 text-foreground">
                <p>
                  <strong>ร้านยาพฤฒพลัง:</strong> 053-945-063
                </p>
                <p>
                  <strong>อีเมล:</strong> pharmacy@cmu.ac.th
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeMedication;
