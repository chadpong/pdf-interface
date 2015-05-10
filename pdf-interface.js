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
var SEX = "MALE";
var MARRITAL_STATUS = "single";
var EDUCATION = "ประถม";
var OCCUPATION = "-";
var INCOME = "50";
var FAMILY_INCOME = "20";
var TEL_NO = "0000000000";
var ADDRESS = "228/99 ม.7 ต.ท่าโพธิ์ อ.เมือง จ.พิษณุโลก 65000";
var MED_HISTORY = "เป็นไข้ เป็นหวัด ปวดขา ปวดหลัง";
var SURGERY_HISTORY = "-";
var CHRONIC_DISEASE = "-";
var REGULARLY_MED = "-";



function createPDF () {
var SCREENING_ASSESSMENT_SUMMARY = [];

	SCREENING_ASSESSMENT_SUMMARY.push([
		{
			text : 'การประเมิน',
			style : 'subheader',
			alignment : 'center'
		},
		{
			text : 'ชื่อผู้ประเมิน',
			style : 'subheader',
			alignment : 'center'
		},
		{
			text : 'ตำแหน่ง',
			style : 'subheader',
			alignment : 'center'
		},
		{
			text : 'สังกัด',
			style : 'subheader',
			alignment : 'center'
		},
		{
			text : 'เบอร์โทรศัพท์',
			style : 'subheader',
			alignment : 'center'
		}]);
	SCREENING_ASSESSMENT_SUMMARY.push(['คัดกรองความสามารถในการทำกิจวัตรประจำวัน (ADL)','รามอส สว่างโสดา','นักกายภาพ','รพ. ร้อยเอ็ด','0000000000']);
	SCREENING_ASSESSMENT_SUMMARY.push(['ประเมินผู้สูงอายุ 5 ด้าน','รามอส สว่างโสดา','นักกายภาพ','รพ. ร้อยเอ็ด','0000000000']);
	SCREENING_ASSESSMENT_SUMMARY.push(['ประเมินความต้องการ','รามอส สว่างโสดา','นักกายภาพ','รพ. ร้อยเอ็ด','0000000000']);
	var STACK = [];
	
	STACK.push ({ text : 'aaaaa' });
	STACK.push ({ text : 'aaaaa' });
	var font = {
	   THSarabun : {
	     normal : 'THSarabun.ttf',
	     bold : 'THSarabunBold.ttf'
	   }
	};

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
				},
				{
					columns : [
						{
							text : 'ชื่อ - นามสกุล  : ' + NAME,
							margin : [INDENT_LEFT, LINE_SPACING, 0, 0],
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
							margin : [INDENT_LEFT, LINE_SPACING, 0, 0],
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
							text : 'เพศ  : ' + SEX,
							margin : [INDENT_LEFT, LINE_SPACING, 0, 0],
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
							margin : [INDENT_LEFT, LINE_SPACING, 0, 0],
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
							text : 'รายได้ของผู้สูงอายุ  : ' + INCOME + " บาท/ เดือน",
							margin : [INDENT_LEFT, LINE_SPACING, 0, 0],
							width : 250
						},
						{
							text : 'รายได้ของครับครัว  : ' + FAMILY_INCOME + " บาท/ เดือน",
							margin : [INDENT_LEFT, LINE_SPACING, 0, 0],
						}
					]
				},
				{
					text : 'เบอร์โทรศัพท์ที่สามารถติดต่อได้ : ' + TEL_NO ,
					margin : [INDENT_LEFT, LINE_SPACING, 0, 0]					
				},
				{
					text : 'ที่อยู่ที่สามารถติดต่อได้ : ' + ADDRESS ,
					margin : [INDENT_LEFT, LINE_SPACING, 0, 0]					
				},
				{
					text : 'ประวัติการผ่าตัด : ' + SURGERY_HISTORY ,
					margin : [INDENT_LEFT, LINE_SPACING, 0, 0]					
				},
				{
					text : 'โรคประจำตัว : ' + CHRONIC_DISEASE ,
					margin : [INDENT_LEFT, LINE_SPACING, 0, 0]					
				},
				{
					text : 'ยาที่รับประทานประจำ : ' + CHRONIC_DISEASE ,
					margin : [INDENT_LEFT, LINE_SPACING, 0, 0]
				},
				{
					text : 'หมายเหตุ : แผนที่บ้านผู้สูงอายุอยู่หน้าสุดท้ายของเอกสารนี้' ,
					margin : [INDENT_LEFT, LINE_SPACING + 50, 0, 0],
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
					stack :STACK
				}
			],
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