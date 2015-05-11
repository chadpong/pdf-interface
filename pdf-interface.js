// PAGE SETTINGS
var DEFAULT_FONT_SIZE = 14;
var INDENT_LEFT = 20;
var INDENT_RIGHT = 20;
var LINE_SPACING = 8;
// END PAGE SETTINGS

var NAME = "CHADPONG PONGPANA";
var CID = "0000000000000";
var DOB = "15/12/2533";
var AGE = "24";
var GENDER = "MALE";
var MARRITAL_STATUS = "single";
var EDUCATION = "ประถม";
var OCCUPATION = "-";
var INCOME_SELF = "50";
var INCOME_FAMILY = "20";
var TEL_NO = "0000000000";
var ADDRESS_SELF = "228/99 ม.7 ต.ท่าโพธิ์ อ.เมือง จ.พิษณุโลก 65000";

var FAMILY_MEMBER_COUNT = "2";

var CAREGIVER_NAME = "จิราพร จรรโลใจ";
var CAREGIVER_TEL = "0000000000";
var CAREGIVER_RELATION = "เพื่อน";
var CAREGIVER_CID = "0000000000000";

var PRIMARY_HEALTH_PROVIDER = "อนามัยบ้านดอน";
var SECONDARY_HEALTH_PROVIDER = "โรงพยาบาลบ้านดิน";

var LATEST_SCREENING_ID = "1";
var LATEST_SCREENING_DATE = "25 เมษายน 2558";
var LATEST_ADL_GROUP = "กลุ่มที่ 3 ต้องการความช่วยเหลือ";
var LATEST_ADL_SCORE = "15";

var CURRENT_ASSESSMENT_ID = "1";
var CURRENT_ASSESSMENT_DATE = "25 เมษายน 2558";

function createPDF () {
var SCREENING_ASSESSMENT_SUMMARY = [];

	SCREENING_ASSESSMENT_SUMMARY.push([
		{
			text : 'การประเมิน',
			style : 'subheader',
			alignment : 'center',
			fillColor: '#9C9C9C'
		},
		{
			text : 'ชื่อผู้ประเมิน',
			style : 'subheader',
			alignment : 'center',
			fillColor: '#9C9C9C'
		},
		{
			text : 'ตำแหน่ง',
			style : 'subheader',
			alignment : 'center',
			fillColor: '#9C9C9C'
		},
		{
			text : 'สังกัด',
			style : 'subheader',
			alignment : 'center',
			fillColor: '#9C9C9C'
		},
		{
			text : 'เบอร์โทรศัพท์',
			style : 'subheader',
			alignment : 'center',
			fillColor: '#9C9C9C'
		}]);
	SCREENING_ASSESSMENT_SUMMARY.push(['คัดกรองความสามารถในการทำกิจวัตรประจำวัน (ADL)','รามอส สว่างโสดา','นักกายภาพ','รพ. ร้อยเอ็ด','0000000000']);
	SCREENING_ASSESSMENT_SUMMARY.push(['ประเมินผู้สูงอายุ 5 ด้าน','รามอส สว่างโสดา','นักกายภาพ','รพ. ร้อยเอ็ด','0000000000']);
	SCREENING_ASSESSMENT_SUMMARY.push(['ประเมินความต้องการ','รามอส สว่างโสดา','นักกายภาพ','รพ. ร้อยเอ็ด','0000000000']);

var FAMILY_MEMBER = [];
	FAMILY_MEMBER.push ({ text : '1. ลูก : จิราวัฒน์ วัฒนาวง' , margin : [ INDENT_LEFT, LINE_SPACING, 0, 0]});
	FAMILY_MEMBER.push ({ text : 'เบอร์โทรศัพท์ที่สามารถติดต่อได้ : 123456789' , margin : [ INDENT_LEFT + 10, LINE_SPACING, 0, 0]});
	FAMILY_MEMBER.push ({ text : '2. น้อง : จักรกิต สิทธยา' , margin : [ INDENT_LEFT, LINE_SPACING, 0, 0]});
	FAMILY_MEMBER.push ({ text : 'เบอร์โทรศัพท์ที่สามารถติดต่อได้ : 123456789' , margin : [ INDENT_LEFT + 10, LINE_SPACING, 0, 0]});

var HEALTH_RIGHTS = [];
	HEALTH_RIGHTS.push ( { text : 'สิทธิหลักประกันสุขภาพถ้วนหน้า (77/89)' , margin : [INDENT_LEFT + 20, LINE_SPACING, 0, 0]});
	HEALTH_RIGHTS.push ( { text : 'สิทธิประกันสังคม (99)' , margin : [INDENT_LEFT + 20, LINE_SPACING, 0, 0]});
	HEALTH_RIGHTS.push ( { text : 'บัตรคนพิการ (ท65655599)' , margin : [INDENT_LEFT + 20, LINE_SPACING, 0, 0]});

var SOCIAL_RIGHTS = [];
	SOCIAL_RIGHTS.push ( { text : 'บริการรถรับส่งไปโรงพยาบาล' , margin : [INDENT_LEFT + 20, LINE_SPACING, 0, 0]});
	SOCIAL_RIGHTS.push ( { text : 'การปรับสภาพห้องน้ำ' , margin : [INDENT_LEFT + 20, LINE_SPACING, 0, 0]});
	SOCIAL_RIGHTS.push ( { text : 'ไม้เท้าช่วยเดิน' , margin : [INDENT_LEFT + 20, LINE_SPACING, 0, 0]});

var CURRENT_ASSESSMENT_RESULT = [];
	CURRENT_ASSESSMENT_RESULT.push([
		{
			text : 'ด้านการประเมิน',
			style : 'subheader',
			alignment : 'center',
			fillColor: '#9C9C9C'
		},
		{
			text : 'ผลการประเมิน',
			style : 'subheader',
			alignment : 'center',
			fillColor: '#9C9C9C'
		}
	]);
	var font = {
	   THSarabun : {
	     normal : 'THSarabun.ttf',
	     bold : 'THSarabunBold.ttf'
	   }
	};
	CURRENT_ASSESSMENT_RESULT.push(['การประเมินด้านสังคม', 'จำเป็นต้องส่งผู้เชี่ยวชาญ (คะแนน)']);
	CURRENT_ASSESSMENT_RESULT.push(['การประเมินความสามารถในการทำกิจวัตรประจำวัน', 'จำเป็นต้องส่งผู้เชี่ยวชาญ (คะแนน)']);
	CURRENT_ASSESSMENT_RESULT.push(['การประเมินสภาพสมอง', 'ไม่จำเป็นต้องส่งผู้เชี่ยวชาญ (คะแนน)']);
	CURRENT_ASSESSMENT_RESULT.push(['การประเมินภาวะกลืนลำบาก', 'ไม่จำเป็นต้องส่งผู้เชี่ยวชาญ (คะแนน)']);
	CURRENT_ASSESSMENT_RESULT.push(['การประเมินภาวะซึมเศร้าในช่วง 2 สัปดาห์ที่ผ่านมารวมทั้งวันนี้', 'จำเป็นต้องส่งผู้เชี่ยวชาญ (คะแนน)']);

	var docDefinition = {
			pageMargins: [20, 90, 20, 70], // left, top, right, bottom
	 		header: { 				
				margin : [10, 0,0,0],
				image: 'nhso_logo',
				width: 200				       
		    },
		    footer: {		    	
		        margin: [20 , 5, 0, 0],
	 			columns: [
					{
						image: 'nu_logo',
						width: 200,
						alignment : 'center'
					}								
				]	
		    },		    
	 		content: [
				{
					text: 'ข้อตกลงแผนการดูแลผู้สูงอายุ',
					style : 'header',
					alignment : 'center',
					margin : [0, LINE_SPACING, 0, 0]
				},	
				{
					text: '( Care Agreement Plan)',
					style : 'subheader',
					alignment : 'center',
					margin : [0, LINE_SPACING, 0, 0]
				},
				{
					image: 'avatar',
					alignment : 'right',
					width : 100
				},
				{
					text: '1. ช้อมูลทั่วไป',
					style : 'header',
					alignment : 'left',
					margin : [0, LINE_SPACING - 55, 0, 0]
				},	
				{
					text: 'ข้อมูลผู้สูงอายุ',
					style : 'subheader',
					alignment : 'left',
					margin : [INDENT_LEFT, LINE_SPACING, 0, 0],
					decoration: 'underline'
				},
				{
					columns : [
						{
							text : 'ชื่อ - นามสกุล  : ' + NAME,
							margin : [INDENT_LEFT * 2, LINE_SPACING, 0, 0],
							width : 250
						},
						{
							text : 'เลขบัตรประจำตัวประชาชน  : ' + CID,
							margin : [INDENT_LEFT, LINE_SPACING, 0, 0],
						}
					]
				},
				{
					columns : [
						{
							text : 'วัน/เดือน/ปีเกิด  : ' + DOB,
							margin : [INDENT_LEFT * 2, LINE_SPACING, 0, 0],
							width : 250
						},
						{
							text : 'อายุ  : ' + AGE + ' ปี',
							margin : [INDENT_LEFT, LINE_SPACING, 0, 0],
						}
					]
				},
				{
					columns : [
						{
							text : 'เพศ  : ' + GENDER,
							margin : [INDENT_LEFT * 2, LINE_SPACING, 0, 0],
							width : 250
						},
						{
							text : 'สถานภาพสมรส  : ' + MARRITAL_STATUS,
							margin : [INDENT_LEFT, LINE_SPACING, 0, 0],
						}
					]
				},
				{
					columns : [
						{
							text : 'การศึกษาสูงสุดที่ได้รับ  : ' + EDUCATION,
							margin : [INDENT_LEFT * 2, LINE_SPACING, 0, 0],
							width : 250
						},
						{
							text : 'อาชีพ  : ' + OCCUPATION,
							margin : [INDENT_LEFT, LINE_SPACING, 0, 0],
						}
					]
				},
				{
					columns : [
						{
							text : 'รายได้ของผู้สูงอายุ  : ' + INCOME_SELF + " บาท/ เดือน",
							margin : [INDENT_LEFT * 2, LINE_SPACING, 0, 0],
							width : 250
						},
						{
							text : 'รายได้ของครับครัว  : ' + INCOME_FAMILY + " บาท/ เดือน",
							margin : [INDENT_LEFT, LINE_SPACING, 0, 0],
						}
					]
				},
				{
					text : 'เบอร์โทรศัพท์ที่สามารถติดต่อได้ : ' + TEL_NO ,
					margin : [INDENT_LEFT * 2, LINE_SPACING, 0, 0]
				},
				{
					text : 'ที่อยู่ที่สามารถติดต่อได้ : ' + ADDRESS_SELF ,
					margin : [INDENT_LEFT * 2, LINE_SPACING, 0, 0]					
				},	
				{
					text : 'หมายเหตุ : แผนที่บ้านผู้สูงอายุอยู่หน้าสุดท้ายของเอกสารนี้' ,
					margin : [INDENT_LEFT * 2, LINE_SPACING + 50, 0, 0],
					pageBreak : 'after'
				},					
				{
					text : 'สมาชิกที่อาศัยอยู่ในบ้านเดียวกัน ' + FAMILY_MEMBER_COUNT + ' คน',
					style : 'subheader',
					alignment : 'left',
					margin : [INDENT_LEFT, LINE_SPACING , 0, 0],
					decoration: 'underline'
				},
				{
					stack : FAMILY_MEMBER
				},
				{
					text : 'ผู้ดูแลหลัก',
					style : 'subheader',
					alignment : 'left',
					margin : [INDENT_LEFT, LINE_SPACING , 0, 0],
					decoration: 'underline'
				},
				{
					columns : [
						{
							text : 'ชื่อ  : ' + CAREGIVER_NAME,
							margin : [INDENT_LEFT, LINE_SPACING, 0, 0],
							width : 250
						},
						{
							text : 'เลขบัตรประจำตัวประชาชน  : ' + CAREGIVER_CID,
							margin : [INDENT_LEFT, LINE_SPACING, 0, 0],
						}
					]
				},
				{
					columns : [
						{
							text : 'เบอร์โทรศัพท์  : ' + CAREGIVER_TEL,
							margin : [INDENT_LEFT, LINE_SPACING, 0, 0],
							width : 250
						},
						{
							text : 'ความสัมพันธ์  : ' + CAREGIVER_RELATION,
							margin : [INDENT_LEFT, LINE_SPACING, 0, 0],
						}
					]
				},
				// section 2
				{
					text: '2. ข้อมูลสวัสดิการที่ได้รับในปัจจุบัน',
					style : 'header',
					alignment : 'left',
					margin : [0, LINE_SPACING, 0, 0]
				},
				{
					text : 'สวัสดิการด้านสุขภาพ',
					style : 'subheader',
					alignment : 'left',
					margin : [INDENT_LEFT, LINE_SPACING, 0, 0],
					decoration: 'underline'
				},
				{
					ul : HEALTH_RIGHTS
				},
				{
					text : 'หน่วยบริการปฐมภูมิประจำครอบครัว  : ' + PRIMARY_HEALTH_PROVIDER,
					margin : [INDENT_LEFT * 2, LINE_SPACING, 0, 0],					
				},
				{
					text : 'หน่วยบริการประจำส่งต่อ  : ' + SECONDARY_HEALTH_PROVIDER,
					margin : [INDENT_LEFT * 2, LINE_SPACING, 0, 0],					
				},
				{
					text : 'สวัสดิการด้านสังคม',
					style : 'subheader',
					alignment : 'left',
					margin : [INDENT_LEFT, LINE_SPACING, 0, 0],
					decoration: 'underline'
				},
				{
					ul : SOCIAL_RIGHTS,
					pageBreak : 'after'
				},
				// section 3
				{
					text: '3. สรุปผลการคัดกรอง / ประเมิน',
					style : 'header',
					alignment : 'left',
					margin : [0, LINE_SPACING, 0, 0]
				},	
				{
					text: 'ผู้ประเมิน',
					style : 'subheader',
					alignment : 'left',
					margin : [INDENT_LEFT, LINE_SPACING, 0, 0]
				},
				{
					margin : [INDENT_LEFT, LINE_SPACING, INDENT_RIGHT, 0], 
	 				table: {
						widths: [220, 100, '*', '*', '*'],
						headerRows: 1,
						body: SCREENING_ASSESSMENT_SUMMARY
					}									
				},
				{
					text: '3.1 การคัดกรองเพื่อจำแนกกลุ่มผุ้สูงอายุตามศักยภาพ',
					style : 'subheader',
					alignment : 'left',
					margin : [INDENT_LEFT, LINE_SPACING, 0, 0]
				},
				{
					stack : [
						{
							margin : [INDENT_LEFT, 0, 0, 0],
							columns : [
								{
									text : 'การคัดกรองครั้งที่   : ' + LATEST_SCREENING_ID,
									margin : [INDENT_LEFT , LINE_SPACING, 0, 0],
									width : 120,
									bold : true
								},
								{
									text : 'วันที่  : ' + LATEST_SCREENING_DATE,
									margin : [0, LINE_SPACING, 0, 0],
								}
							]
						},
						{
							text : 'ผลการคัดกรอง ADL : ' + LATEST_ADL_GROUP + '(' + LATEST_ADL_SCORE + 'คะแนน)',
							margin : [INDENT_LEFT * 2, LINE_SPACING, 0 , 0]
						}
					]
				},
				{
					text: '3.2 การประเมินผู้สูงอายุที่ต้องได้รับการดูแลระยะยาว',
					style : 'subheader',
					alignment : 'left',
					margin : [INDENT_LEFT, LINE_SPACING, 0, 0]
				},
				{
					text : 'graph',
					alignment : 'center'
				},
				{
					text: 'การประเมินครั้งปัจจุบัน',
					style : 'subheader',
					alignment : 'left',
					margin : [INDENT_LEFT * 2 , LINE_SPACING, 0, 0]
				},
				{	
					margin : [INDENT_LEFT, 0, 0, 0],
					columns : [
						{
							text : 'ครั้งที่ : ' + CURRENT_ASSESSMENT_ID,
							margin : [INDENT_LEFT , LINE_SPACING, 0, 0],
							width : 70,
							bold : true
						},
						{
							text : 'วันที่  : ' + CURRENT_ASSESSMENT_DATE,
							margin : [0, LINE_SPACING, 0, 0],
						}
					]
				},
				{
					margin : [INDENT_LEFT, LINE_SPACING, INDENT_RIGHT, 0], 
					
	 				table: {
						widths: ['*', '*'],
						headerRows: 1,

						body: CURRENT_ASSESSMENT_RESULT
					}									
				}
			], // END CONTENT
			defaultStyle: {
				font: 'THSarabun',
				fontSize : DEFAULT_FONT_SIZE
			},
			styles : {
				header : {
					bold : true,
					fontSize : DEFAULT_FONT_SIZE + 2
				},
				subheader : {
					bold : true,
					fontSize : DEFAULT_FONT_SIZE
				}
			},
			images : {
				nu_logo : base64_nu_logo,
				nhso_logo : base64_nhso_logo,
				avatar : base64_avatar
				// map : base64_map
			}
 		};

 		pdfMake.fonts = font; 		
 		// pdfMake.createPdf(docDefinition).open();
 		pdfMake.createPdf(docDefinition).getBase64(function (base64) {
			$('iframe').attr('src', "data:application/pdf;base64," + base64);
		});
}