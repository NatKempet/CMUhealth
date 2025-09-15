import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ArrowLeft, MapPin, Clock, Phone, Globe, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const InternationalStudents = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 py-16">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button
              variant="secondary"
              className="mb-6 bg-purple-100 text-purple-800 hover:bg-purple-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-white mb-4">
            International Students Health Services
          </h1>
          <p className="text-xl text-purple-100/90">
            Healthcare policy and services for international students at Chiang Mai University
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Policy Section */}
          <div className="space-y-6">
            <Card className="p-6 shadow-card border-l-4 border-purple-600">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
                <Globe className="w-6 h-6 mr-2 text-purple-600" />
                นักศึกษาต่างชาติ (รหัส 61 เป็นต้นไป)
              </h2>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>ต้องจัดทำ <span className="font-semibold text-purple-700">ประกันสุขภาพส่วนบุคคล</span></li>
                <li>ปฏิบัติตามประกาศ มช. เรื่องประกันสุขภาพนักศึกษาต่างชาติ (3 ก.ค. 2561)</li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                  สามารถใช้บริการใน มช. ได้ตามสิทธิปกติ ถ้ามีเอกสารประกัน
                </li>
              </ul>
            </Card>

            <Card className="p-6 shadow-card border-l-4 border-purple-600">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">International Students (2018 and onward)</h2>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Must obtain <span className="font-semibold text-purple-700">personal health insurance</span></li>
                <li>Must comply with CMU Health Insurance Policy for International Students (Issued: July 3, 2018)</li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                  Eligible to access health services at CMU with valid insurance documentation
                </li>
              </ul>
            </Card>

            <Card className="p-6 shadow-card border-l-4 border-purple-600">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">国际学生（2018年及以后入学）</h2>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>必须办理 <span className="font-semibold text-purple-700">个人健康保险</span></li>
                <li>须遵守清迈大学关于国际学生健康保险的公告（发布日期：2018年7月3日）</li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                  若提供有效的健康保险文件，可正常使用清迈大学的医疗服务
                </li>
              </ul>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="space-y-6">
            <Card className="p-6 shadow-card border-l-4 border-purple-600">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-purple-600" />
                Service Locations
              </h2>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>International Student Clinic – CMU Hospital, Building A, 2nd Floor</li>
                <li>Student Health Center – Student Affairs Building, Ground Floor</li>
                <li>Emergency Department – CMU Hospital Main Building (24/7)</li>
              </ul>
            </Card>

            <Card className="p-6 shadow-card border-l-4 border-purple-600">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-2 text-purple-600" />
                Service Hours
              </h2>
              <p><strong>International Student Clinic:</strong> Mon - Fri, 08:30 - 16:00</p>
              <p><strong>General Clinic:</strong> Mon - Fri, 08:00 - 16:00 | Sat 08:00 - 12:00</p>
              <p><strong>Emergency Services:</strong> 24/7</p>
              <p className="text-sm text-muted-foreground mt-2">*Closed on Sundays & public holidays (except emergency)</p>
            </Card>

            <Card className="p-6 shadow-card border-l-4 border-purple-600">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
                <Phone className="w-6 h-6 mr-2 text-purple-600" />
                Contact Information
              </h2>
              <p><strong>International Clinic:</strong> +66 53-946-050</p>
              <p><strong>Emergency Hotline:</strong> +66 53-946-900</p>
              <p><strong>Student Affairs:</strong> +66 53-943-021</p>
              <p><strong>Email:</strong> international-health@cmu.ac.th</p>
              <p><strong>WeChat:</strong> CMU_Health_EN</p>
              <p><strong>Line:</strong> @cmu_international_health</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalStudents;
