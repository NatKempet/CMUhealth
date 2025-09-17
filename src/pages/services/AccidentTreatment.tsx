import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ArrowLeft, Clock, MapPin, Phone, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const AccidentTreatment = () => {
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
            การใช้สิทธิรักษาพยาบาลกรณีอุบัติเหตุจากรถ
          </h1>
          <p className="text-xl text-purple-100/90">
            ข้อมูลสิทธิ พ.ร.บ. และประกันอุบัติเหตุของนักศึกษา มช.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Information */}
          <div className="space-y-6">
            <Card className="p-6 shadow-card border-l-4 border-purple-600">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-2 text-purple-600" />
                สถานการณ์และสิทธิที่ใช้ได้
              </h2>
              <ul className="list-disc list-inside space-y-3 text-foreground">
                <li>
                  <strong>รถมี พ.ร.บ.:</strong>{" "}
                  <span className="text-purple-700 font-semibold">
                    ใช้สิทธิ พ.ร.บ. ได้ทันที
                  </span>{" "}
                  วงเงินสูงสุด <strong>30,000 บาท</strong>
                </li>
                <li>
                  <strong>รถไม่มี พ.ร.บ.:</strong> นักศึกษาชำระเงินเอง{" "}
                  <strong>30,000 บาท</strong> → เบิกจาก{" "}
                  <span className="text-purple-700 font-semibold">
                    ประกันอุบัติเหตุ มช.
                  </span>{" "}
                  ได้ <strong>10,000 บาท</strong>
                </li>
                <li>
                  <strong>มีคู่กรณี:</strong> ต้องมี{" "}
                  <span className="text-purple-700 font-semibold">
                    คำสั่งศาล
                  </span>{" "}
                  ว่าฝ่ายใดผิด และติดต่อบริษัทประกันเพื่อเบิกเพิ่มเติม
                </li>
              </ul>
            </Card>

            <Card className="p-6 shadow-card border-l-4 border-purple-600">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">
                การยื่นเบิกประกันอุบัติเหตุ มช.
              </h2>
              <p className="mb-4">
                หากรักษาที่ รพ.อื่น หรือ รพ.มหาราชตรวจสิทธิ พ.ร.บ. ไม่ได้
                ให้นำเอกสารไปยื่นเบิก{" "}
                <span className="font-semibold text-purple-700">
                  ประกันอุบัติเหตุ 10,000 บาท/กรณี
                </span>{" "}
                ที่{" "}
                <strong className="text-purple-800">SD One Stop Service</strong>{" "}
                (ชั้น 1 อาคารพลศึกษา กองพัฒนานักศึกษา)
              </p>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-purple-700 mb-2">
                  เอกสารที่ต้องใช้
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>ใบเสร็จรับเงิน</li>
                  <li>ใบรับรองแพทย์</li>
                  <li>สำเนาบัตรประชาชน</li>
                  <li>สำเนาบัตรนักศึกษา</li>
                  <li>สำเนาหน้าสมุดบัญชีธนาคาร</li>
                </ul>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                เวลาราชการ: 08.30–11.30 และ 13.00–16.30 น.
              </p>
            </Card>

            <Card className="p-6 shadow-card border-l-4 border-purple-600">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">
                กรณีนักศึกษาเสียชีวิต
              </h2>
              <p className="text-lg text-purple-800">
                ได้รับ{" "}
                <span className="font-bold">ค่าสินไหมทดแทน 200,000 บาท</span>{" "}
                ชำระโดย{" "}
                <span className="font-semibold">บริษัทประกันภัยอุบัติเหตุ</span>
              </p>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="space-y-6">
            <Card className="p-6 shadow-card border-l-4 border-purple-600">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-purple-600" />
                สถานที่ยื่นเรื่อง
              </h2>
              <div className="text-foreground space-y-3">
                <p>
                  <strong className="text-purple-800">
                    SD One Stop Service
                  </strong>{" "}
                  ชั้น 1 อาคารพลศึกษา กองพัฒนานักศึกษา
                </p>
                <a
                  href="https://maps.app.goo.gl/C9rdNmmEeBLMCzJD6?g_st=ipc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    เปิด Google Maps
                  </Button>
                </a>
                {/* Mini Map Embed */}
                <div className="mt-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4480.299361362164!2d98.95773559999999!3d18.7970326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3beed323cae3%3A0xacaf37a426eca751!2zU0REIE9uZSBTdG9wIFNlcnZpY2UgIuC4leC4teC5ieC5gOC4lOC4teC4ouC4p-C4ruC4ueC5ieC5gOC4o-C4t-C5iOC4reC4hyI!5e1!3m2!1sth!2sth!4v1758116595238!5m2!1sth!2sth"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SD One Stop Service Map"
                  ></iframe>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card border-l-4 border-purple-600">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-2 text-purple-600" />
                เวลาให้บริการ
              </h2>
              <p>
                <strong>วันจันทร์ - ศุกร์:</strong> 08:30 - 11:30 น. และ 13:00 -
                16:30 น.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                *ปิดวันเสาร์-อาทิตย์ และวันหยุดนักขัตฤกษ์
              </p>
            </Card>

            <Card className="p-6 shadow-card border-l-4 border-purple-600">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
                <Phone className="w-6 h-6 mr-2 text-purple-600" />
                ติดต่อสอบถาม
              </h2>
              <p>
                <strong>กองพัฒนานักศึกษา:</strong> 053-943-021-2
              </p>
              <p>
                <strong>อีเมล:</strong>{" "}
                <span className="text-purple-700">
                  student-affair@cmu.ac.th
                </span>
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccidentTreatment;
