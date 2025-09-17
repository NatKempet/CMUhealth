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
          <h1 className="text-4xl font-bold text-white mb-4">สิทธิรับยา ฟรี</h1>
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
                    <div className="mt-3">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4481.206737698732!2d99.0026321!3d18.762910799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da31bef30729bb%3A0xec10fb44fb9b2ffa!2z4Lio4Li54LiZ4Lii4LmM4Liq4LmI4LiH4LmA4Liq4Lij4Li04Lih4Lie4Lik4LiS4Lie4Lil4Lix4LiH4Lic4Li54LmJ4Liq4Li54LiH4Lit4Liy4Lii4Li4IOC4oeC4q-C4suC4p-C4tOC4l-C4ouC4suC4peC4seC4ouC5gOC4iuC4teC4ouC4h-C5g-C4q-C4oeC5iCBTZW5pb3IgV2VsbG5lc3MgQ2VudGVy!5e1!3m2!1sth!2sth!4v1758115994867!5m2!1sth!2sth"
                        width="100%"
                        height="250"
                        loading="lazy"
                      ></iframe>
                    </div>
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
